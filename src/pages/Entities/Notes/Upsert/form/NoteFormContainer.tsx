import {IContact} from '@models';
import {Formik, FormikProps} from 'formik';
import React, {RefObject} from 'react';
import {NoteForm} from './NoteForm';
import {IProps, IValues} from './NoteForm.model';

const validate = ({body, contact}) => {
  const errors: any = {};
  if (!body) {
    errors.body = 'common:form.required';
  }
  if (!contact) {
    errors.contact = 'common:form.required';
  }
  return errors;
};

const renderForm = (contact: IContact) => (formikBag: FormikProps<IValues>) => {
  return <NoteForm {...formikBag} contact={contact} />;
};

export const NoteFormContainer = React.forwardRef<{}, IProps>(
  ({note, onSuccess, contact}: IProps, ref: RefObject<any>) => {
    const initialValues = note
      ? {
          body: note.body,
          is_favorited: note.is_favorited,
          contact,
        }
      : {
          body: '',
          is_favorited: false,
          contact,
        };

    return (
      <Formik
        ref={ref}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSuccess}
        render={renderForm(contact)}
      />
    );
  }
);
