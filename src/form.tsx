import React from 'react';
import { Form as FormModel, IFormOptions, IFormSchema, IInitialValues } from 'tiny-mobx-form';
import { FormContext } from './form-context';

interface Submit {
  (values: any, errors: string[]): void;
}

export interface FormProps {
  fields: IFormSchema[];
  initialValues?: IInitialValues;
  options?: IFormOptions;
  children: React.ReactNode;
  submit: Submit;
}

export const Form: React.FC<FormProps> = ({
  fields,
  initialValues = {},
  options = {},
  submit,
  children,
}) => {
  const form = new FormModel(fields, initialValues, options);
  const value = { form };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.persist();
    if (form.errors) {
      form.showErrors();
    } else {
      await submit(form.values, form.errors);
    }
  }
  return (
    <FormContext.Provider value={value}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormContext.Provider>
  );
};
