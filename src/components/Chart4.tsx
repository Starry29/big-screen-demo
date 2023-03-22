import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/createEchartsOptions';
// @ts-ignore
import china from '../geo/china.json';

export const Chart4 = () => {
  const divRef = useRef(null);
  const colors = { '广西壮族自治区': '#BB31F7'};
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            { name: '广西壮族自治区', value: 14 },
          ],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['广西壮族自治区'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#5470C6',
            },
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="图表4">
      <div ref={divRef} className="chart" />
      <div className="notes">此地图仅显示了中国的部分区域</div>
    </div>
  );
};
