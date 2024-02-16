import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { addContacts } from '../../redux/itemsSlice';
import { useDispatch } from 'react-redux';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSaubmit = (values, action) => {
    dispatch(addContacts(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSaubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" as="span" />
        </div>

        <div>
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
