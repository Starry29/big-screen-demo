import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '0', value: 0 },
    { name: '10', value: 0.15 },
    { name: '20', value: 0.36 },
    { name: '30', value: 0.24 },
    { name: '40', value: 0.33 },
    { name: '50', value: 0.09 },
    { name: '60', value: 0.10 },
    { name: '70', value: 0.14 },
    { name: '80', value: 0.03 }
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '0', value: Math.random() * 0.50 },
        { name: '10', value: Math.random() * 0.50 },
        { name: '20', value: Math.random() * 0.50 },
        { name: '30', value: Math.random() * 0.50 },
        { name: '40', value: Math.random() * 0.50 },
        { name: '50', value: Math.random() * 0.50 },
        { name: '60', value: Math.random() * 0.50 },
        { name: '70', value: Math.random() * 0.50 },
        { name: '80', value: Math.random() * 0.50 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80],
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
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
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
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
