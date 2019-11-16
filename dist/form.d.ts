import React from 'react';
import { IFormOptions, IFormSchema, IInitialValues } from 'tiny-mobx-form';
export interface FormProps {
    fields: IFormSchema[];
    initialValues?: IInitialValues;
    options?: IFormOptions;
    children: React.ReactNode;
}
export declare const Form: React.FC<FormProps>;
