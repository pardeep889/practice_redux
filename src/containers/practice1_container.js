import React, {Component} from 'react';
import { connect } from 'react-redux';
import { practiceActionOne } from "../actions/index";
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class PracticeoneContainer extends Component{

    componentWillMount(){
      this.props.dispatch(practiceActionOne());
    }

    render(){
        let labelTitle = [];
        let itemPrice  = [];
        let data = null;
        let options = null;
        this.props.data ? 
        // console.log(this.props.data.cryptoAssets)
        this.props.data.cryptoAssets.map((item,i) => {

            item.currentMarketcap =  Math.abs(Number(item.currentMarketcap)) / 1.0e+9;    
            item.currentMarketcap = item.currentMarketcap .toFixed(2)+"B";
            console.log(item.currentMarketcap);

            if(i>5 && i<13){
                labelTitle.push(item.name)
                item.price = item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                itemPrice.push(item.price)
            }          
            
             data = {
                labels: labelTitle,
                datasets: [{
                    label: 'Price in $',
                    data: itemPrice,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
            options = {
                annotation: {
                     annotations: [{
                         drawTime: 'afterDatasetsDraw',
                         borderColor: 'red',
                         borderDash: [2, 2],
                         borderWidth: 2,
                         mode: 'vertical',
                         type: 'line',
                         value: 10,
                         scaleID: 'x-axis-0',
                   }]
                },
                maintainAspectRation: false
            };
            return 0;
        })
        : null;
        // console.log(labelTitle);
      
        return(
            <div>
               <div style={{'textAlign':'center'}}>
                   Current Crypto Currency Market
               </div>
                { this.props.data ? 
                      <Bar
                      data={data}
                      width={100}
                      height={50}
                      options={options}
                   />
                    : ''}
              
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.artists.praconedata
    }
}


export default connect(mapStateToProps)(PracticeoneContainer);

// data[i].price = "$"+data[i].price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// data[i].percentageChange24Hr = data[i].percentageChange24Hr.toFixed(2)+"%";
// let marketCap =  Math.abs(Number(data[i].currentMarketcap)) / 1.0e+9;    
// data[i].currentMarketcap = marketCap.toFixed(2)+"B";
// data[i].slug =  data[i].name;