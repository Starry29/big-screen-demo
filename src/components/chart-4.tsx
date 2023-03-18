import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '0', value: 0.15 },
    { name: '2', value: 0.20 },
    { name: '4', value: 0.14 },
    { name: '6', value: 0.13 },
    { name: '8', value: 0.09 },
    { name: '10', value: 0.10 },
    { name: '12', value: 0.14 },
    { name: '14', value: 0.13 },
    { name: '16', value: 0.09 },
    { name: '18', value: 0.12 },
    { name: '20', value: 0.11 },
    { name: '22', value: 0.14 },
    { name: '24', value: 0.13 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '0', value: Math.random() * 0.20 },
        { name: '2', value: Math.random() * 0.20 },
        { name: '4', value: Math.random() * 0.20 },
        { name: '6', value: Math.random() * 0.20 },
        { name: '8', value: Math.random() * 0.20 },
        { name: '10', value: Math.random() * 0.20 },
        { name: '12', value: Math.random() * 0.20 },
        { name: '14', value: Math.random() * 0.20 },
        { name: '16', value: Math.random() * 0.20 },
        { name: '18', value: Math.random() * 0.20 },
        { name: '20', value: Math.random() * 0.20 },
        { name: '22', value: Math.random() * 0.20 },
        { name: '24', value: Math.random() * 0.20 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data.map(i => i.value),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: { width: px(2) },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
