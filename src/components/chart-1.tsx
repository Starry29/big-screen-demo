import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '城关区', value: 10 },
    { name: '七里河区', value: 20 },
    { name: '西固区', value: 36 },
    { name: '安宁区', value: 41 },
    { name: '红古区', value: 15 },
    { name: '永登县', value: 26 },
    { name: '皋兰县', value: 37 },
    { name: '榆中县', value: 18 },
    { name: '新区', value: 29 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '城关区', value: Math.random() * 10 },
        { name: '七里河区', value: Math.random() * 10 },
        { name: '西固区', value: Math.random() * 10 },
        { name: '安宁区', value: Math.random() * 10 },
        { name: '红古区', value: Math.random() * 10 },
        { name: '永登县', value: Math.random() * 10 },
        { name: '皋兰县', value: Math.random() * 10 },
        { name: '榆中县', value: Math.random() * 10 },
        { name: '新区', value: Math.random() * 10 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红古区', '永登县', '皋兰县', '榆中县', '新区'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#083B70' }
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#083B70' }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value)
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);


  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
