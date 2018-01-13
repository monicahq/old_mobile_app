import React, {Component} from 'react';
import {Animated, Easing, View, StyleSheet} from 'react-native';
import {Transitioner, addNavigationHelpers} from 'react-navigation';

export class StackNavigatorAnimation extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Transitioner
        configureTransition={this._configureTransition}
        navigation={navigation}
        render={this._render}
      />
    );
  }

  _getTransition = type => {
    return type === 'modal'
      ? {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
        }
      : {
          duration: 200,
          easing: Easing.out(Easing.ease),
        };
  };

  _getAnimation = (type, position, index) => {
    if (type === 'modal') {
      const animatedValue = position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });

      return {
        // opacity: animatedValue,
        translateY: animatedValue,
      };
    }

    const animatedValue = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0],
    });

    return {
      opacity: animatedValue,
      transform: [{scale: animatedValue}],
    };
  };

  _getTransitionType = routeName => {
    return routeName === 'AddContact' ? 'modal' : 'default';
  };

  _configureTransition = (transitionProps, prevTransitionProps) => {
    const {routeName} = transitionProps.scene.route;

    return this._getTransition(this._getTransitionType(routeName));
  };

  _render = (transitionProps, prevTransitionProps) => {
    const scenes = transitionProps.scenes.map(scene =>
      this._renderScene(transitionProps, scene),
    );
    return <View style={{flex: 1}}>{scenes}</View>;
  };

  _renderScene = (transitionProps, scene) => {
    const {navigation, router} = this.props;
    const {routes} = navigation.state;
    const {position} = transitionProps;
    const {index} = scene;
    const {routeName} = transitionProps.scene.route;

    // The prop `router` is populated when we call `createNavigator`.
    const Scene = router.getComponentForRouteName(scene.route.routeName);
    return (
      <Animated.View
        key={index}
        style={[
          styles.view,
          this._getAnimation(
            this._getTransitionType(routeName),
            position,
            index,
          ),
        ]}>
        <Scene
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
          })}
        />
      </Animated.View>
    );
  };
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
