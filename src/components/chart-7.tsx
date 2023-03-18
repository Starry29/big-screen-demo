import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { value: 0.2, name: '女' },
    { value: 0.8, name: '男' },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { value: Math.random() * 1, name: '女' },
        { value: Math.random() * 1, name: '男' },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#8D70F8', '#33A4FA'],
      xAxis: { show: false },
      yAxis: { show: false },
      legend: { show: false },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(20) },
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: { show: false },
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: data.map(i => i.value)
        }
      ]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male" />男
        <span className="female" />女
      </div>
    </div>
  );
};
