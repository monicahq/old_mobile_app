import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

import {styles} from './Debts.styles';
import {Navbar, EmptyActivity} from 'components';
import {commonStyles} from 'theme';

export class Debts extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
    getDebtsByContact: PropTypes.func.isRequired,
    debts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.getDebtsByContact();
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

  renderItem = ({index}) => {
    const {debts} = this.props;
    const debt = debts[index];

    return (
      <View style={styles.debtContainer}>
        <View style={styles.headerContainer}>
          <View
            style={[
              styles.badge,
              debt.in_debt === 'no' ? styles.badgeSuccess : styles.badgeError,
            ]}>
            {debt.in_debt === 'yes' && (
              <Text style={styles.badgeText}>You owe</Text>
            )}
            {debt.in_debt === 'no' && (
              <Text style={styles.badgeText}>
                {debt.contact.first_name} owes you
              </Text>
            )}
          </View>

          <Text style={styles.amountText}>${debt.amount}</Text>
        </View>
        <Text style={styles.reasonText}>{debt.reason}</Text>
      </View>
    );
  };

  render() {
    const {back, debts, getDebtsByContact, isFetching} = this.props;

    return (
      <View style={commonStyles.flex}>
        <Navbar title="Debts" onBack={back} />
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
            title="Money doesn’t buy happiness."
            subtitle="But having no debts that you owe is a way to stay happy in your friendship."
          />
        )}
      </View>
    );
  }
}
