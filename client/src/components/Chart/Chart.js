// import React from 'react';
import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import API from '../../utils/salesAPI';
var chartData1;

class Chart extends Component {

    getChartData() {
        this.setState({
            chartData:
                {
                    labels: ['week 1', 'week 2', 'week 3', 'week 4'],
                    datasets: [{
                        label: 'Sales',
                        data: [chartData1, 500, 1000, 100],
                        backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                    }]
                }
        })
    };

    componentWillMount() {
        console.log('Chart component mounting..Chart.js');
        API.getChartData({
            repRepId: localStorage.getItem('rep_id')
        })
            .then(res => {
                console.log("res..Chart.js: ", res.data);
                localStorage.setItem('chartData1', parseInt(res.data, 10));
                chartData1 = localStorage.getItem('chartData1');
                console.log('chartData1..Chart.js ', chartData1);
                this.getChartData();
            })
            .catch(err => console.log(err))
    };

    //  constructor is a function that will run when initialized
     constructor(props){
        //  props are basically properties that you can pass into components
         super(props);
         this.state = {
             chartData:{
                //  this is my "y" axis data
             labels: ['week 1', 'week 2', 'week 3', 'week 4'],
            datasets: [{
               label: 'Sales',
            //    this is my "x" axis data
               data:[chartData1, 0, 0, 0],
               backgroundColor:['rgba(54, 162, 235, 0.6)'], 
            }]
             }
         }
     }
     
      render() {
          return(
              <div className= "chart">
              <Line
              data={this.state.chartData}
              width={100}
              height={50}
              options={{
                  title: {
                      display:true,
                      text:'Weekly Sprig Rep Sales'
                  }
              }}
              />
              </div>
          )}
        }

  export default Chart;