import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import moment from 'moment';

import {styles} from './Notes.styles';
import {Navbar} from 'components';
import {commonStyles} from 'theme';

export class Notes extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getNotesByContact: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getNotesByContact();
  }

  keyExtractor = (item, index) => String(item.id);

  renderFooter = () => {
    const {isFetching} = this.props;

    if (!isFetching) {
      return null;
    }

    return (
      <ActivityIndicator style={commonStyles.activityIndicator} size="large" />
    );
  };

  renderItem = ({item, index}) => {
    const {notes} = this.props;
    const note = notes[index];

    return (
      <View style={styles.noteContainer}>
        <Text style={styles.date}>{moment(note.created_at).format('LL')}</Text>
        <Text>{note.body}</Text>
      </View>
    );
  };

  render() {
    const {back, notes, getNotesByContact} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Notes" onBack={back} />
        <FlatList
          data={notes}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={this.renderFooter}
          onEndReached={getNotesByContact}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}
