import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
const data = [
  { name: '2009', qiang: 0.10, zui: 0.09, dao: 0.05, sha: 0.05, shang: 0.03},
  { name: '2010', qiang: 0.09, zui: 0.02, dao: 0.03, sha: 0.02, shang: 0.06},
  { name: '2011', qiang: 0.03, zui: 0.09, dao: 0.04, sha: 0.13, shang: 0.05},
  { name: '2012', qiang: 0.11, zui: 0.03, dao: 0.03, sha: 0.04, shang: 0.06},
  { name: '2013', qiang: 0.09, zui: 0.09, dao: 0.05, sha: 0.05, shang: 0.07},
  { name: '2014', qiang: 0.04, zui: 0.06, dao: 0.06, sha: 0.06, shang: 0.02},
  { name: '2015', qiang: 0.10, zui: 0.04, dao: 0.02, sha: 0.07, shang: 0.05},
  { name: '2016', qiang: 0.07, zui: 0.07, dao: 0.06, sha: 0.03, shang: 0.07},
  { name: '2017', qiang: 0.03, zui: 0.03, dao: 0.04, sha: 0.09, shang: 0.06},
];

export const Chart3 = () => {
  const myChart = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '2009', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2010', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2011', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2012', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2013', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2014', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2015', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2016', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
        { name: '2017', qiang: Math.random() * 0.10, zui: Math.random() * 0.10, dao: Math.random() * 0.10, sha: Math.random() * 0.10, shang: Math.random() * 0.10 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
          name: '抢劫',
          type: 'line',
          data: data.map(i => i.qiang)
        },
        {
          name: '醉驾',
          type: 'line',
          data: data.map(i => i.zui)
        },
        {
          name: '盗窃',
          type: 'line',
          data: data.map(i => i.dao)
        },
        {
          name: '故意杀人',
          type: 'line',
          data: data.map(i => i.sha)
        },
        {
          name: '故意伤人',
          type: 'line',
          data: data.map(i => i.shang)
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
