import {Formik} from 'formik';
import React, {PureComponent} from 'react';
import {ScrollView, View} from 'react-native';

import {Navbar} from '@components';
import {I18n} from '@i18n';
import {INote} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {NoteFormContainer} from './form/NoteFormContainer';
import {styles} from './NotesUpsert.style';

interface INotesUpsertProps {
  pop: IPopAction;
  updateNote: (note: INote) => void;
  contactId: number;
  note?: INote;
}

export class NoteUpsert extends PureComponent<INotesUpsertProps, {}> {
  private formRef = React.createRef<Formik>();

  public render() {
    const {pop, note} = this.props;
    const isEditing = !!note;

    return (
      <View style={commonStyles.flex}>
        <Navbar
          title={isEditing ? I18n.t('notes:edit') : I18n.t('notes:create')}
          onBack={pop}
          rightTitle={I18n.t('notes:save')}
          rightAction={this.handleDoneAction}
          rightIcon="done"
        />
        <ScrollView keyboardDismissMode="on-drag">
          <View style={styles.container}>
            <NoteFormContainer
              ref={this.formRef}
              note={note}
              onSuccess={this.onSuccess}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  private handleDoneAction = () => {
    this.formRef.current.submitForm();
  };

  private onSuccess = (noteValue: INote) => {
    const {note, updateNote, pop} = this.props;
    updateNote({
      ...note,
      ...noteValue,
    });
    pop();
  };
}
