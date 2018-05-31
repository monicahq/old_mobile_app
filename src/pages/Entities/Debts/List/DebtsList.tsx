import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import {EmptyActivity, Navbar} from '@components';
import {I18n} from '@i18n';
import {IDebt} from '@models';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles} from '@theme';
import {styles} from './DebtsList.styles';

interface IDebtsListProps {
  pop: IPopAction;
  getDebtsByContact: () => void;
  debts: IDebt[];
  isFetching: boolean;
}

export class DebtsList extends PureComponent<IDebtsListProps, {}> {
  public componentWillMount() {
    this.props.getDebtsByContact();
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

  public renderItem = ({index}) => {
    const {debts} = this.props;
    const debt = debts[index];

    return (
      <View style={styles.debtContainer}>
        <View style={styles.headerContainer}>
          <View
            style={[
              styles.badge,
              debt.in_debt === 'no' ? styles.badgeSuccess : styles.badgeError,
            ]}
          >
            {debt.in_debt === 'yes' && (
              <Text style={styles.badgeText}>{I18n.t('debts:youOwe')}</Text>
            )}
            {debt.in_debt === 'no' && (
              <Text style={styles.badgeText}>
                {I18n.t('debts:owesYou', {name: debt.contact.first_name})}
              </Text>
            )}
          </View>

          <Text style={styles.amountText}>${debt.amount}</Text>
        </View>
        <Text style={styles.reasonText}>{debt.reason}</Text>
      </View>
    );
  };

  public render() {
    const {pop, debts, getDebtsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title={I18n.t('debts:debts')} onBack={pop} />
        {isFetching || debts.length ? (
          <FlatList
            data={debts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ListFooterComponent={this.renderFooter}
            onEndReached={getDebtsByContact}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <EmptyActivity
            image={require('./assets/empty-debts.png')}
            title={I18n.t('debts:emptyTitle')}
            subtitle={I18n.t('debts:emptySubtitle')}
          />
        )}
      </View>
    );
  }
}
