/**
 * @fileoverview Quickchart.io chart URL generator
 */

//Imports
const quickchart = require('quickchart-js');

//Instantiate a new quickchart
const chart = new quickchart();

//Configure the chart
chart.setConfig({
  type: 'bar',
  data: {
    labels: [
      'NodeJS',
      'Chrome',
      'Firefox',
      'Native'
    ],
    datasets: [
      {
        label: 'Slice Time (MS)',
        data: [
          6084,
          5476,
          5035,
          1945
        ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Slicing Time by Environment (Lower is better)'
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Runtime'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Slice Time (MS)'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    //Draw a horizontal line at the native value
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 1945,
          borderColor: '#000000',
          borderWidth: 1.5,
          label: {
            enabled: true,
            content: 'Native',
            position: 'center',
            xPadding: 2,
            yPadding: 2
          }
        }
      ]
    }
  }
});

chart.setWidth(1000);
chart.setHeight(600);

//Get the URL
chart.getShortUrl().then(url =>
{
  console.log(url);
});