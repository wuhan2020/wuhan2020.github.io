import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
require('echarts/map/js/world')
import x from 'echarts';

const mockData = [
    {
        name: "中国",
        value: 10
    },
    {
        name: "美国",
        value: 5
    }
];

function Map(props) {
  
    const getOption = (data) => {
      return ({
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2
        },
        toolbox: {
          show: false,
          left: 'left',
          top: 'top',
          feature: {
            saveAsImage: {},
          },
        },
        series: [
          {
            name: '参赛团队',
            type: 'map',
            mapType: 'world',
            roam: false,
            zoom: 1.2,
            data: data,
            label: {
              normal: {
                show: false,
                fontFamily: 'STHeiti',
              },
              emphasis: {
                show: true
              },
              fontFamily: 'STHeiti',
            },
            itemStyle: {
              borderColor: 'darkgray',
              // borderWidth: 1,
              emphasis: {
                areaColor: 'skyblue',
                show: true
              }
            },
            tooltip: {
              formatter: function (params) {
                if (params.data === undefined) { return undefined; }
                const value = params.data.value;
                return (
                  `<b>${params.name}</b>：${value}`
                );
              },
            },
            nameMap: {
                'China' : '中国',
                'United States': '美国',
            }
          }
        ]
      });
    }
  
    return (
      <ReactEcharts
        option={getOption(mockData)}
        className='map-chart' />
    );
}

export default Map;