import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { Form, Field, ErrorField } from '../../src';

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

const ReactBindings = () => {
  const [formErrors, setFormErrors] = useState([]);

  const submit = (values: any, errors: any) => {
    if (errors.length) {
      setFormErrors(errors);
    } else {
      alert(JSON.stringify(values, null, 4));
    }
  };

  return (
    <Form fields={schema} submit={submit}>
      <Field name="firstName">
        {({ input, label }) => (
          <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorField name={input.name} />
          </div>
        )}
      </Field>
      <Field name="lastName">
        {({ input, label }) => (
          <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorField name={input.name} />
          </div>
        )}
      </Field>
      <Field name="email">
        {({ input, label }) => (
          <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorField name={input.name} />
          </div>
        )}
      </Field>
      <Field name="age">
        {({ input, label }) => (
          <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorField name={input.name} />
          </div>
        )}
      </Field>
      <div style={{ color: '#e74c3c' }}>
        {formErrors.map(error => <p>{error}</p>)}
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

const App = observer(ReactBindings);

ReactDOM.render(<App />, document.getElementById('root'));
