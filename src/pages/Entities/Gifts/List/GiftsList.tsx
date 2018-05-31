import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, Navbar} from '@components';
import {I18n} from '@i18n';
import {IGift} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {getLabel} from '@utils/gifts';
import {styles} from './GiftsList.styles';

interface IGiftsListProps {
  pop: IPopAction;
  getGiftsByContact: () => void;
  gifts: IGift[];
  isFetching: boolean;
}

export class GiftsList extends PureComponent<IGiftsListProps, {}> {
  public componentWillMount() {
    this.props.getGiftsByContact();
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
    const {gifts} = this.props;
    const gift = gifts[index];

    return (
      <View style={styles.giftContainer}>
        <Text>{gift.name}</Text>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{getLabel(gift)}</Text>
          </View>
        </View>
        {gift.description && (
          <Text style={styles.descriptionText}>{gift.description}</Text>
        )}
      </View>
    );
  };

  public render() {
    const {pop, gifts, getGiftsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('gifts:gifts')} onBack={pop} />
        {isFetching || gifts.length ? (
          <FlatList
            data={gifts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListFooterComponent={this.renderFooter}
            onEndReached={getGiftsByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-gifts.png')}
            title={I18n.t('gifts:emptyTitle')}
            subtitle={I18n.t('gifts:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
