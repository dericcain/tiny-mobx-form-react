import { useContext } from 'react';
import { FormContext } from './form-context';
import { IField, IForm } from 'tiny-mobx-form';

export function useForm(): IForm {
  const { form } = useContext(FormContext);
  return form;
}

export function useField(fieldName: string): IField {
  const { form } = useContext(FormContext);
  if (!(fieldName in form.fields)) {
    throw Error(`There is no field named ${fieldName}`);
  }
  return form.fields[fieldName];
}

export function useFormErrors(): [string[], () => void] {
  const { form } = useContext(FormContext);
  return [form.errors, form.showErrors];
}
