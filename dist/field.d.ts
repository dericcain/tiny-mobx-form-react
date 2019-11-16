import React from 'react';
import { IField } from 'tiny-mobx-form';
declare type EventType = React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
interface Input extends Pick<IField, 'name' | 'placeholder' | 'value'> {
    autoFocus: boolean;
    key: string;
    id: string;
    onChange: (e: EventType) => void;
}
interface FieldValue {
    input: Input;
    label: string;
    errors: string[];
    hasErrors: boolean;
}
interface FieldProps {
    name: string;
    children: (field: FieldValue) => React.ReactNode | React.ReactElement | any;
}
export declare const ObservedField: React.FunctionComponent<FieldProps>;
export {};
