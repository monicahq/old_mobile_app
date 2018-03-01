import {StyleSheet} from 'react-native';

const chartHeight = 60;
const topInset = 5;
const bottomInset = 30;

export const yAxisSvg = {fill: 'grey', fontSize: 10};
export const yAxisContentInset = {top: topInset, bottom: bottomInset};
export const xAxisSvg = {fontSize: 10};
export const xAxisContentInset = {left: 10, right: 10};

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  yAxis: {
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    paddingTop: topInset,
  },
  stackedBarChart: {
    height: chartHeight,
    flex: 1,
  },
  xAxis: {
    height: 30,
    paddingTop: 7,
  },
});
