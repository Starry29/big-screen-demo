import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';
import { px } from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '逻西乡', value: 0.05 },
    { name: '新化镇', value: 0.08 },
    { name: '甘田镇', value: 0.10 },
    { name: '同乐镇', value: 0.11 },
    { name: '雅长乡', value: 0.12 },
    { name: '花坪镇', value: 0.20 },
    { name: '逻沙乡', value: 0.18 },
    { name: '幼平乡', value: 0.16 },
  ];
  const colors = ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd', '#4992ff', '#7cffb2'];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '逻西乡', value: Math.random() * 0.3 },
        { name: '新化镇', value: Math.random() * 0.3 },
        { name: '甘田镇', value: Math.random() * 0.3 },
        { name: '同乐镇', value: Math.random() * 0.3 },
        { name: '雅长乡', value: Math.random() * 0.3 },
        { name: '花坪镇', value: Math.random() * 0.3 },
        { name: '逻沙乡', value: Math.random() * 0.3 },
        { name: '幼平乡', value: Math.random() * 0.3 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: colors,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        top: px(3),
        orient: 'vertical',
        left: px(3),
        itemWidth: px(8),
        itemHeight: px(6),
        itemGap: px(6),
        textStyle: {
          color: 'white',
          fontSize: px(6)
        },
      },
      series: [
        {
          name: '销售比',
          type: 'pie',
          radius: ['60%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(10) },
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: { show: false },
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: data.map(i => i)
        }
      ]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 图表5">
      <div className="title">乡镇农产品年销售占比</div>
      <div className="chart" ref={divRef} />
      <div className="text">销售比</div>
    </div>
  );
};
