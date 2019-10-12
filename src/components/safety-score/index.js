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
            startAngle: -135,
            endAngle: 225,
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
                  return (parseInt(val / 20) + '/5');
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          colors: '#9C27B0'
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Route Safety'],
      },
      series: [62],
    }
  }

  componentDidMount() {
    console.log('setting color')
    if (this.state.series < 20) {
      this.setState(({fill}) => ({fill: {
          ...fill,
          colors: '#b00005',
        }}))
    } else if (this.state.series > 20 && this.state.series < 40) {
      this.setState(({fill}) => ({fill: {
          ...fill,
          colors: '#e7e800',
        }}))
    } else if (this.state.series > 40 && this.state.series < 60) {
      this.setState(({fill}) => ({fill: {
          ...fill,
          colors: '#f78b00',
        }}))
    } else if (this.state.series > 60 && this.state.series < 80) {
      this.setState(({fill}) => ({fill: {
          ...fill,
          colors: '#24b000',
        }}))
      console.log('setting color'+this.state.series)
    } else if (this.state.series > 80 && this.state.series < 100) {
      this.setState(({fill}) => ({fill: {
          ...fill,
          colors: '#2263b0',
        }}))
      console.log('setting color'+this.state.series)
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