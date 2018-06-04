import {InjectedFormikProps} from 'formik';
import React, {PureComponent} from 'react';

import {ContactChooser, FormListItem, Switch, TextInput} from '@components';
import {I18n} from '@i18n';
import {IProps, IValues} from './NoteForm.model';
import {styles} from './NoteForm.styles';

export class NoteForm extends PureComponent<
  InjectedFormikProps<IProps, IValues>,
  {}
> {
  public setFieldValue = fieldName => value =>
    this.props.setFieldValue(fieldName, value);
  public setFieldTouched = fieldName => () =>
    this.props.setFieldTouched(fieldName);
  public setAllTouched = () =>
    this.props.setFieldTouched('body') &&
    this.props.setFieldTouched('is_favorited') &&
    this.props.setFieldTouched('contact');

  public render() {
    const {values, touched, errors, contact} = this.props;

    return [
      !contact && (
        <FormListItem key={0}>
          <ContactChooser
            id="contact"
            onValueChange={this.setFieldValue('contact')}
            value={values.contact}
            touched={touched.contact}
            error={I18n.t(errors.contact)}
          />
        </FormListItem>
      ),
      <FormListItem key={1}>
        <Switch
          id="is_favorited"
          title={I18n.t('notes:form.is_favorited')}
          onValueChange={this.setFieldValue('is_favorited')}
          value={values.is_favorited}
          touched={touched.is_favorited}
          error={I18n.t(errors.is_favorited)}
        />
      </FormListItem>,
      <FormListItem key={2} last={true}>
        <TextInput
          id="body"
          title={I18n.t('notes:form.body')}
          style={styles.field}
          multiline={true}
          onChangeText={this.setFieldValue('body')}
          onBlur={this.setFieldTouched('body')}
          value={values.body}
          touched={touched.body}
          error={I18n.t(errors.body)}
        />
      </FormListItem>,
    ];
  }
}
