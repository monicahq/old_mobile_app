import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {StackedBarChart, XAxis, YAxis} from 'react-native-svg-charts';

import {
  styles,
  xAxisContentInset,
  xAxisSvg,
  yAxisContentInset,
  yAxisSvg,
} from './YearChart.styles';

const cdata = [
  {
    month: 'Jan',
    calls: 3,
  },
  {
    month: 'Feb',
    calls: 13,
  },
  {
    month: 'Mar',
    calls: 13,
  },
  {
    month: 'Apr',
    calls: 32,
  },
  {
    month: 'May',
    calls: 3,
  },
  {
    month: 'Jun',
    calls: 25,
  },
  {
    month: 'Jul',
    calls: 50,
  },
  {
    month: 'Aug',
    calls: 50,
  },
  {
    month: 'Sep',
    calls: 50,
  },

  {
    month: 'Oct',
    calls: 50,
  },

  {
    month: 'Nov',
    calls: 50,
  },

  {
    month: 'Dec',
    calls: 50,
  },
];

const colors = [
  'rgba(36, 120, 119, 0.50)',
  'rgba(36, 120, 119, 0.55)',
  'rgba(36, 120, 119, 0.6)',
  'rgba(36, 120, 119, 0.65)',
  'rgba(36, 120, 119, 0.7)',
  'rgba(36, 120, 119, 0.75)',
  'rgba(36, 120, 119, 0.8)',
  'rgba(36, 120, 119, 0.85)',
  'rgba(36, 120, 119, 0.9)',
  'rgba(36, 120, 119, 0.95)',
  'rgba(36, 120, 119, 1)',
];
const keys = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

const formatMonthLabel = (value, index) => cdata[index].month;

export class YearChart extends PureComponent {
  public getData() {
    const max = Math.max(...cdata.map(d => d.calls));
    return cdata.map(data => {
      const percentagePer10 = Math.round(data.calls / max * 10) * 10;
      return {
        [String(percentagePer10)]: data.calls,
      };
    });
  }
  public render() {
    return (
      <View style={styles.container}>
        <YAxis
          style={styles.yAxis}
          data={cdata.map(d => d.calls)}
          contentInset={yAxisContentInset}
          numberOfTicks={4}
          svg={yAxisSvg}
        />
        <View style={styles.rightContainer}>
          <StackedBarChart
            style={styles.stackedBarChart}
            keys={keys}
            colors={colors}
            data={this.getData()}
            showGrid={false}
          />
          <XAxis
            style={styles.xAxis}
            data={cdata}
            formatLabel={formatMonthLabel}
            contentInset={xAxisContentInset}
            svg={xAxisSvg}
          />
        </View>
      </View>
    );
  }
}
