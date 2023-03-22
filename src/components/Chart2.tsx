import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import { baseEchartOptions } from '../shared/baseEchartOptions';
import { createEchartsOptions } from '../shared/createEchartsOptions';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '逻西乡', 2022: 0.43, 2021: 0.38 },
    { name: '新化镇', 2022: 0.59, 2021: 0.42 },
    { name: '甘田镇', 2022: 0.21, 2021: 0.11 },
    { name: '同乐镇', 2022: 0.36, 2021: 0.29 },
    { name: '雅长乡', 2022: 0.49, 2021: 0.17 },
    { name: '花坪镇', 2022: 0.18, 2021: 0.23 },
    { name: '逻沙乡', 2022: 0.51, 2021: 0.45 },
    { name: '幼平乡', 2022: 0.42, 2021: 0.38 }, 
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '逻西乡', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '新化镇', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '甘田镇', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '同乐镇', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '雅长乡', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '花坪镇', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '逻沙乡', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
        { name: '幼平乡', 2022: Math.random() * 0.6, 2021: Math.random() * 0.5 },
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
                color: '#2034F9'
              }, {
                offset: 1,
                color: '#04A1FF'
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
                color: '#B92AE8'
              }, {
                offset: 1,
                color: '#6773E7'
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
    <div className="bordered 图表2">
      <div className="title">乡镇农产品年产量占比趋势</div>
      <div ref={divRef} className="chart" />
    </div>
  );
};
