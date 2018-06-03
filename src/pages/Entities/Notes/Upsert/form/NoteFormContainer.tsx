import {Formik, FormikProps} from 'formik';
import React, {RefObject} from 'react';
import {NoteForm} from './NoteForm';
import {IProps, IValues} from './NoteForm.model';

const validate = ({body}) => {
  const errors: any = {};
  if (!body) {
    errors.body = 'common:form.required';
  }
  return errors;
};

const renderForm = (formikBag: FormikProps<IValues>) => (
  <NoteForm {...formikBag} />
);

export const NoteFormContainer = React.forwardRef<{}, IProps>(
  ({note, onSuccess}: IProps, ref: RefObject<any>) => {
    return (
      <Formik
        ref={ref}
        initialValues={{body: note.body, is_favorited: note.is_favorited}}
        validate={validate}
        onSubmit={onSuccess}
        render={renderForm}
      />
    );
  }
);
