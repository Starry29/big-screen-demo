import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import { baseEchartOptions } from '../shared/baseEchartOptions';
import { createEchartsOptions } from '../shared/createEchartsOptions';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '逻西乡', 2022: 12.58, 2021: 9.38 },
    { name: '新化镇', 2022: 1.25, 2021: 1.42 },
    { name: '甘田镇', 2022: 9.80, 2021: 7.11 },
    { name: '同乐镇', 2022: 6.50, 2021: 4.29 },
    { name: '雅长乡', 2022: 4.20, 2021: 3.17 },
    { name: '花坪镇', 2022: 5.68, 2021: 3.23 },
    { name: '逻沙乡', 2022: 9.60, 2021: 8.45 },
    { name: '幼平乡', 2022: 5.74, 2021: 4.38 }, 
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '逻西乡', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '新化镇', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '甘田镇', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '同乐镇', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '雅长乡', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '花坪镇', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '逻沙乡', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
        { name: '幼平乡', 2022: Math.random() * 15.00, 2021: Math.random() * 12.00 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      legend: {
        right: px(3),
        textStyle: {color: 'white'},
        itemWidth: px(8),
        itemHeight: px(6)
      },
      grid: {
        x: px(5),
        x2: px(10),
        y: px(10),
        y2: px(5),
        containLabel: true
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: true },
        axisLine: {show: true }
      },
      xAxis: {
        axisTick: { show: false },
        type: 'category',
        data: data.map(i => i.name),
      },
      series: [
        {
          name: '去年',
          type: 'bar',
          data: data.map(i => i[2021]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#91cc75'
              }, {
                offset: 1,
                color: '#91cc75'
              }]),
            }
          }
        },
        {
          name: '今年',
          type: 'bar',
          data: data.map(i => i[2022]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#fac858'
              }, {
                offset: 1,
                color: '#fac858'
              }]),
            }
          }
        }
      ]
    }));

  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 图表7">
      <div className="title">乡镇农产品年平均价格趋势</div>
      <div ref={divRef} className="chart" />
    </div>
  );
};
