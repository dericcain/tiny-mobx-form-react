import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Input } from '../src';

const schema = [
  {
    name: 'firstName',
    placeholder: 'John',
    label: 'First Name',
    validation: 'required|letters|length:2,20',
    initialValue: '',
  },
  {
    name: 'lastName',
    placeholder: 'Appleseed',
    label: 'Last Name',
    validation: 'required|letters|length:2,20',
    initialValue: '',
  },
  {
    name: 'email',
    placeholder: 'jon@gmail.com',
    label: 'Email',
    validation: 'required|email',
    initialValue: '',
  },
  {
    name: 'age',
    placeholder: '22',
    label: 'Age',
    validation: 'required|number|size:18,100',
    initialValue: '',
  },
];

const FieldWrapper = ({ name, children }) => (
  <div style={{ marginBottom: 12 }}>
    <>
      {children}
      <Input.Errors name={name} />
    </>
  </div>
);

const App = () => {
  return (
    <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}>
      <Form fields={schema}>
        <FieldWrapper name="firstName">
          <Input name="firstName" type="text" style={{ padding: 6 }} />
        </FieldWrapper>
        <FieldWrapper name="lastName">
          <Input name="lastName" type="text" style={{ padding: 6 }} />
        </FieldWrapper>
        <FieldWrapper name="email">
          <Input name="email" type="email" style={{ padding: 6 }} />
        </FieldWrapper>
        <FieldWrapper name="age">
          <Input name="age" type="number" style={{ padding: 6 }} />
        </FieldWrapper>
      </Form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
