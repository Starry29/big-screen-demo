import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/createEchartsOptions';
import {px} from '../shared/px';
const data = [
  { name: '逻西乡', 2022: 0.23, 2021: 0.18 },
  { name: '新化镇', 2022: 0.19, 2021: 0.12 },
  { name: '甘田镇', 2022: 0.21, 2021: 0.11 },
  { name: '同乐镇', 2022: 0.16, 2021: 0.19 },
  { name: '雅长乡', 2022: 0.09, 2021: 0.11 },
  { name: '花坪镇', 2022: 0.18, 2021: 0.12 },
  { name: '逻沙乡', 2022: 0.11, 2021: 0.15 },
  { name: '幼平乡', 2022: 0.22, 2021: 0.18 },
];

export const Chart8 = () => {
  const myChart = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '逻西乡', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '新化镇', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '甘田镇', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '同乐镇', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '雅长乡', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '花坪镇', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '逻沙乡', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
        { name: '幼平乡', 2022: 0.15 + Math.random() * (0.50-0.15), 2021: 0.12 + Math.random() * (0.25-0.12) },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(3),
        textStyle: {color: 'white'},
        itemWidth: px(8),
        itemHeight: px(6)
      },
      grid: {
        x: px(5),
        x2: px(10),
        y: px(5),
        y2: px(20),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['逻西乡', '新化镇', '甘田镇', '同乐镇', '雅长乡', '花坪镇', '逻沙乡', '幼平乡'],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '今年',
          type: 'line',
          data: data.map(i => i[2022])
        },
        {
          name: '去年',
          type: 'line',
          data: data.map(i => i[2021])
        },
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(6),
        lineStyle: {width: px(2)}
      }))
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 图表8">
      <div className="title">乡镇农产品销量占比趋势分析</div>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
