import React, { useContext } from 'react';
import { IField } from 'tiny-mobx-form';
import { FormContext } from './form-context';

type EventType = React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

interface Input extends Pick<IField, 'name' | 'placeholder' | 'label' | 'value'>{
  autoFocus: boolean;
  key: string;
  id: string;
  onChange: (e: EventType) => void;
}

interface FieldValue {
  input: Input;
  errors: string[];
  showErrors: boolean;
}

interface FieldProps {
  name: string;
  children: (field: FieldValue) => React.ReactNode;
}

export function Field({ name, children }: FieldProps) {
  const { form } = useContext(FormContext);
  if (!(name in form.fields)) {
    throw Error(`There is no field named ${name}`);
  }
  const field = form.fields[name];
  const { placeholder, value, isFocused, label, errors, isTouched, hasErrors } = field;
  const input = {
    name,
    placeholder,
    value,
    id: name,
    key: `${name}-${isFocused}`,
    autoFocus: isFocused,
    label: label,
    onChange: (e: EventType) => field.value = e.currentTarget.value,
  };
  const showErrors = isTouched && hasErrors;

  return children({ input, errors, showErrors });
}
