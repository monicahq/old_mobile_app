import React from 'react';
import 'react-native';
import {App} from './App';
import renderer from 'react-test-renderer';

jest.mock('./CodePush', () => ({
  codePush: Component => Component,
}));

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
