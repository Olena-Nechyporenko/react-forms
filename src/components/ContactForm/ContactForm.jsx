import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { name: '', number: '' };
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.number().required(),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    const { value, name } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    return this.props.onSubmit(this.state);
  };
  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            Name
            <Field
              onInput={this.handleInputChange}
              type="text"
              name="name"
              required
            />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label htmlFor="number">
            Number
            <Field
              onInput={this.handleInputChange}
              type="tel"
              name="number"
              placeholder="+380"
              required
            />
            <span>
              <ErrorMessage name="number" />
            </span>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
