import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
import './countryMapItem.scss';
require('echarts/map/js/world');

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
        visualMap: {
            type: 'piecewise',
            show: false,
            min: 0,
            max: 10000,
            maxOpen: true,
            left: 'left',
            realtime: true,
            calculable: true,
            inRange: {
              color: ['#F8D199', '#FFD20A', '#EA3300', '#8B0000'],
              symbol: 'circle',
            },
            pieces: [
              {gte: 10000},
              {gte: 1000, lte: 9999},
              {gte: 500, lte: 999},
              {gte: 100, lte: 499},
              {gte: 1, lte: 99},
            ],
        },
        series: [
          {
            name: '参赛团队',
            type: 'map',
            mapType: 'world',
            roam: false,
            zoom: 1.2,
            // aspectRatio: 0.2,
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
        <div className="map-wrapper">
            <div className="content-title">
                <div className="content-title-text">{'xx个国家全球协作'}</div>
            </div>
            <div className="content">
                <div className="content-text">{'中国'}</div>
                <div className="content-text">{'美国'}</div>
            </div>
            <ReactEcharts
                option={getOption(mockData)}
                style={{height: '200px', width: '100%'}}
                className='map-chart' />
        </div>
    );
}

export default Map;