import React, { createContext, useContext } from 'react';
import { Form as Form$1 } from 'tiny-mobx-form';
import { observer } from 'mobx-react-lite';

var FormContext =
/*#__PURE__*/
createContext({});

var Form = function Form(_ref) {
  var fields = _ref.fields,
      _ref$initialValues = _ref.initialValues,
      initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      children = _ref.children;
  var form = new Form$1(fields, initialValues, options);
  var value = {
    form: form
  };
  return React.createElement(FormContext.Provider, {
    value: value
  }, children);
};

function Field(_ref) {
  var name = _ref.name,
      children = _ref.children;

  var _useContext = useContext(FormContext),
      form = _useContext.form;

  if (!(name in form.fields)) {
    throw Error("There is no field named " + name);
  }

  var field = form.fields[name];
  var placeholder = field.placeholder,
      value = field.value,
      isFocused = field.isFocused,
      _field$label = field.label,
      label = _field$label === void 0 ? '' : _field$label,
      errors = field.errors,
      isTouched = field.isTouched,
      fieldHasErrors = field.hasErrors;

  function change(e) {
    field.value = e.currentTarget.value;
  }

  var input = {
    name: name,
    placeholder: placeholder,
    value: value,
    id: name,
    key: name + "-" + isFocused,
    autoFocus: isFocused,
    onChange: change
  };
  var hasErrors = isTouched && fieldHasErrors;
  return children({
    input: input,
    errors: errors,
    hasErrors: hasErrors,
    label: label
  });
}

var ObservedField =
/*#__PURE__*/
observer(Field);

function useForm() {
  var _useContext = useContext(FormContext),
      form = _useContext.form;

  return form;
}
function useField(fieldName) {
  var _useContext2 = useContext(FormContext),
      form = _useContext2.form;

  if (!(fieldName in form.fields)) {
    throw Error("There is no field named " + fieldName);
  }

  return form.fields[fieldName];
}

export { ObservedField as Field, Form, useField, useForm };
//# sourceMappingURL=tiny-mobx-form-react.esm.js.map
