import React from 'react'
import Chart from 'react-apexcharts'
import './index.css'

class SafetyScore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -180,
            endAngle: 180,
            hollow: {
              margin: 0,
              size: '65%',
              background: '#fff',
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return (parseInt(val / 25) + '/5');
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          colors: this.colorPicker(19)
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Route Safety'],
      },
      series: [19],
    }
  }

  colorPicker(data) {
    console.log('setting color')
    if (data < 20) {
      return '#b00005'
    } else if (data > 20 && data < 40) {
      return '#e7e800'
    } else if (data > 40 && data < 60) {
      return '#f78b00'
    } else if (data > 60 && data < 80) {
      return '#24b000'
    } else if (data > 80 && data < 100) {
      return '#2263b0'
    }
  }

  render() {

    return (
      <div id="card">
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar"/>
        </div>
      </div>
    );
  }
}

export default SafetyScore;