import moment from 'moment';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {EmptyActivity, Navbar, Touchable} from '@components';
import {I18n} from '@i18n';
import {INote} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles, primaryColor} from '@theme';
import {styles} from './NotesList.styles';

interface INotesListProps {
  pop: IPopAction;
  getNotesByContact: () => void;
  navigateToAddNote: () => void;
  navigateToNote: (noteId) => any;
  notes: INote[];
  isFetching: boolean;
}

export class NotesList extends PureComponent<INotesListProps, {}> {
  public componentWillMount() {
    this.props.getNotesByContact();
  }

  public keyExtractor = (item, index) => String(item.id);

  public renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  public renderItem = ({item, index}) => {
    const {notes, navigateToNote} = this.props;
    const note = notes[index];

    return (
      <Touchable onPress={navigateToNote(note.id)} style={styles.noteContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.date}>
            {moment(note.created_at).format('LL')}
          </Text>
          {note.is_favorited && (
            <Icon
              name="star"
              size={18}
              style={styles.favorite}
              color={primaryColor}
            />
          )}
        </View>
        <Text>{note.body}</Text>
      </Touchable>
    );
  };

  public render() {
    const {
      pop,
      notes,
      getNotesByContact,
      isFetching,
      navigateToAddNote,
    } = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar
          title={I18n.t('notes:notes')}
          onBack={pop}
          rightAction={navigateToAddNote}
          rightIcon="add"
          rightTitle={I18n.t('common:add')}
        />
        {isFetching || notes.length ? (
          <FlatList
            data={notes}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListFooterComponent={this.renderFooter}
            onEndReached={getNotesByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-notes.png')}
            title={I18n.t('notes:emptyTitle')}
            subtitle={I18n.t('notes:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
