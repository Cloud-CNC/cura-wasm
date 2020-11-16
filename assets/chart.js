/**
 * @fileoverview Quickchart.io chart URL generator
 */

//Imports
const {mean} = require('lodash');
const path = require('path');
const quickchart = require('quickchart-js');

//Raw data
const data = {
  nodejs: [
    7814,
    7712,
    7725,
    7767,
    7823,
    7852
  ],
  chrome: [
    6528,
    6648,
    6576,
    6627,
    6655,
    6658
  ],
  firefox: [
    6630,
    6533,
    6580,
    6632,
    6538,
    6578
  ],
  native: [
    2333,
    1830,
    2335,
    2318,
    2315,
    2423
  ]
};

//Calculate averages
const nodejsAverage = mean(data.nodejs);
const chromeAverage = mean(data.chrome);
const firefoxAverage = mean(data.firefox);
const nativeAverage = mean(data.native);

console.log(`[Averages] NodeJS: ${nodejsAverage} Chrome: ${chromeAverage} Firefox: ${firefoxAverage} Native: ${nativeAverage}`);

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
          nodejsAverage,
          chromeAverage,
          firefoxAverage,
          nativeAverage
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
          value: nativeAverage,
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
chart.toFile(path.join(__dirname, 'chart.png'));