// import React from 'react';
import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


 class Chart extends Component {
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
               data:[200,
                     150,
                     50,
                     100],

               backgroundColor:['rgba(54, 162, 235, 0.6)'], 
            }
        ]

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
          )
      }
  }

//   ReactDOM.render(<Chart/>, mountNode);
  export default Chart;