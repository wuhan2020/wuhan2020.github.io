import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
import './countryMapItem.scss';
require('echarts/map/js/world');
const countryArray = ['中国',	'厄瓜多尔',	'澳大利亚',	'马来西亚',	'俄罗斯',	'加拿大',	'印度',	'印度尼西亚',	'圣卢西亚',	'孟加拉国',	'巴西',	'巴基斯坦',	'德国',	'斯里兰卡',	'新加坡',	'新西兰',	'日本',	'法国',	'泰国',	'瑞典',	'秘鲁',	'美国',	'肯尼亚',	'荷兰',	'葡萄牙',	'阿联酋',	'阿根廷',	'韩国',	'马尔代夫',	'墨西哥',	'布基纳法索',	'古巴',	'英国']
const nameMap = {'China': '中国', 	 'Ecuador': '厄瓜多尔',	 'Australia': '澳大利亚',	 'Malaysia': '马来西亚',	 'Russia': '俄罗斯',	 'Canada': '加拿大',	 'India': '印度',	 'Indonesia': '印度尼西亚',	 'Saint Lucia': '圣卢西亚',	 'Bangladesh': '孟加拉国',	 'Brazil': '巴西',	 'Pakistan': '巴基斯坦',	 'Germany': '德国',	 'Sri Lanka': '斯里兰卡',	 'Singapore': '新加坡',	 'New Zealand': '新西兰',	 'Japan': '日本',	 'France': '法国',	 'Thailand': '泰国',	 'Sweden': '瑞典',	 'Peru': '秘鲁',	 'United States': '美国',	 'Kenya': '肯尼亚',	 'Netherlands': '荷兰',	 'Portugal': '葡萄牙',	 'United Arab Emirates': '阿联酋',	 'Argentina': '阿根廷',	 'Korea': '韩国',	 'Maldives': '马尔代夫',	 'Mexico': '墨西哥',	 'Burkina Faso': '布基纳法索',	 'Cuba': '古巴',	 'United Kingdom': '英国'};

function convertData(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    res.push({
      name: data[i],
      value: 1,
    })
  }
  return res;
}

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
              color: ['#ff6440', '#F8D199', '#FFD20A', '#EA3300', '#8B0000'],
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
              },
              emphasis: {
                show: true
              },
            },
            itemStyle: {
              borderColor: 'darkgray',
              // borderWidth: 1,
              emphasis: {
                // areaColor: 'skyblue',
                show: true
              }
            },
            tooltip: {
              show: false,
              formatter: function (params) {
                if (params.data === undefined) { return undefined; }
                const value = params.data.value;
                return (
                  `<b>${params.name}</b>：${value}`
                );
              },
            },
            nameMap: nameMap,
          }
        ]
      });
    }
  
    return (
        <div className="map-wrapper">
            <div className="content-title">
                <div className="content-title-text">{countryArray.length + '个国家全球协作'}</div>
            </div>
            <div className="content">
                {countryArray.map( (item, idx) => <div className="content-text" key={idx}>{item}</div> )}
            </div>
            <ReactEcharts
                option={getOption(convertData(countryArray))}
                style={{height: '200px', width: '100%'}}
                className='map-chart' />
        </div>
    );
}

export default Map;
