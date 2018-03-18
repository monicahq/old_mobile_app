import moment from 'moment';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, Navbar} from '@components';
import {INote} from '@models';
import {IRouterBackOperation} from '@redux/router';
import {commonStyles} from '@theme';
import {styles} from './Notes.styles';

interface INotesProps {
  back: IRouterBackOperation;
  getNotesByContact: () => void;
  notes: INote[];
  isFetching: boolean;
}

export class Notes extends PureComponent<INotesProps, {}> {
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
    const {notes} = this.props;
    const note = notes[index];

    return (
      <View style={styles.noteContainer}>
        <Text style={styles.date}>{moment(note.created_at).format('LL')}</Text>
        <Text>{note.body}</Text>
      </View>
    );
  };

  public render() {
    const {back, notes, getNotesByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Notes" onBack={back} />
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
            title="Notes are great to record precious details about your contacts."
            subtitle="Just write down what you have in mind."
          />
        )}
      </View>
    );
  }
}
