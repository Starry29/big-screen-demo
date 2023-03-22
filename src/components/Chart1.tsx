import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/createEchartsOptions';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '逻西乡', value: 20 },
    { name: '新化镇', value: 20 },
    { name: '甘田镇', value: 36 },
    { name: '同乐镇', value: 41 },
    { name: '雅长乡', value: 15 },
    { name: '花坪镇', value: 26 },
    { name: '逻沙乡', value: 37 },
    { name: '幼平乡', value: 18 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '逻西乡', value: 20 + Math.random() * (50 - 20) },
        { name: '新化镇', value: 20 + Math.random() * (50 - 20) },
        { name: '甘田镇', value: 20 + Math.random() * (50 - 20) },
        { name: '同乐镇', value: 20 + Math.random() * (50 - 20) },
        { name: '雅长乡', value: 20 + Math.random() * (50 - 20) },
        { name: '花坪镇', value: 20 + Math.random() * (50 - 20) },
        { name: '逻沙乡', value: 20 + Math.random() * (50 - 20) },
        { name: '幼平乡', value: 20 + Math.random() * (50 - 20) },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      grid: {
        x: px(5),
        x2: px(5),
        y: px(20),
        y2: px(5),
        containLabel: true
      },
      xAxis: {
        data: ['逻西乡', '新化镇', '甘田镇', '同乐镇', '雅长乡', '花坪镇', '逻沙乡', '幼平乡'],
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
        name: '销量(单位：万吨)',
        nameTextStyle: {
          align: 'left',
        },
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
    <div className="bordered 图表1">
      <div className="title">乡镇农产品年销量统计</div>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
