import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '入室抢劫', value: 40 },
    { name: '当街偷盗', value: 22 },
    { name: '团伙诈骗', value: 67 },
    { name: '刑事案件', value: 19 },
    { name: '民事案件', value: 53 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '入室抢劫', value: Math.random() * 60 },
        { name: '当街偷盗', value: Math.random() * 60 },
        { name: '团伙诈骗', value: Math.random() * 60 },
        { name: '刑事案件', value: Math.random() * 60 },
        { name: '民事案件', value: Math.random() * 60 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
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
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};
