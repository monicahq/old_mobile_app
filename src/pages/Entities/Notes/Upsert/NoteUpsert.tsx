import {Formik} from 'formik';
import React, {PureComponent} from 'react';
import {ScrollView, View} from 'react-native';

import {Navbar} from '@components';
import {I18n} from '@i18n';
import {IContact, INote} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {NoteFormContainer} from './form/NoteFormContainer';
import {styles} from './NotesUpsert.style';

interface INotesUpsertProps {
  pop: IPopAction;
  updateNote: (note: INote) => void;
  postNote: (note: INote) => void;
  contact: IContact;
  note?: INote;
}

export class NoteUpsert extends PureComponent<INotesUpsertProps, {}> {
  private formRef = React.createRef<Formik>();

  public render() {
    const {pop, note, contact} = this.props;
    const isEditing = !!note;

    return (
      <View style={commonStyles.flex}>
        <Navbar
          title={isEditing ? I18n.t('notes:edit') : I18n.t('notes:add')}
          onBack={pop}
          rightTitle={isEditing ? I18n.t('notes:save') : I18n.t('common:add')}
          rightAction={this.handleDoneAction}
          rightIcon={isEditing ? 'done' : 'add'}
        />
        <ScrollView keyboardDismissMode="on-drag">
          <View style={styles.container}>
            <NoteFormContainer
              ref={this.formRef}
              note={note}
              onSuccess={this.onSuccess}
              contact={contact}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  private handleDoneAction = () => {
    this.formRef.current.submitForm();
    this.formRef.current.setTouched({
      body: true,
      contact: true,
      is_favorited: true,
    });
  };

  private onSuccess = (noteValue: INote) => {
    const {note, updateNote, pop, postNote} = this.props;
    if (note) {
      updateNote({
        ...note,
        ...noteValue,
      });
    } else {
      postNote(noteValue);
    }
    pop();
  };
}
