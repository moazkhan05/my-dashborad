import React, { Component } from 'react';

//importing dependencies
import { Col, Row, Container } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//importing stylesheet
import '../Styles/dashboard.css';

//components
import WidgetText from './Widgets/WidgetText'; 
import WidgetBar from './Widgets/WidgetBar';
import WidgetDoughnut from './Widgets/WidgetDoughnut';
//components end

//api credentials
//excel import
const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;


class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            dropdownOptions: [],
            trendStore: [],
            selectedValue: null,
            organicSource: null,
            directSource: null,
        };
    }

    getData = arg =>{
        const arr = this.state.items;
        const arrLength = arr.length;
        let organicSource = 0;
        let directSource = 0;
        let selectedValue = null;

        for (let i = 0; i < arrLength; i++) {
            if( arg == arr[i].month){
                organicSource = arr[i].organic_source;
                directSource = arr[i].direct_source;
            }             
        }
        selectedValue = arg;

        // changing states
        this.setState({
            organicSource : organicSource,
            directSource : directSource,
        },
            ()=>{console.log(this.state.organicSource);}
        )
    };

    updateDashboard = event =>{
        this.getData(event.value);
        this.setState({
            selectedValue : event.value
        },
            ()=>{ console.log(this.state.organicSource); }
        );
    }

    componentDidMount() {

         fetch(url)
            .then(response => response.json())
            .then(data => {

                let batchRowValues = data.valueRanges[0].values;

                const rows = [];

                for (let i = 1; i < batchRowValues.length; i++) {
                    let rowObject = {};
                    for (let j = 0; j < batchRowValues[i].length; j++) {
                        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                    }
                    rows.push(rowObject);
                }
                 // dropdown options
                let dropdownOptions = [];

                for (let i = 0; i < rows.length; i++) {
                    dropdownOptions.push(rows[i].month);
                }

                dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
                this.setState({
                        items: rows,
                        dropdownOptions: dropdownOptions,
                        selectedValue: "Jan 2018"
                    },
                    () => this.getData("Jan 2018")
                );
            });      

    }
    

    render() {

        return (
            <div>
                  <Dropdown options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} placeholder="Select Month" />
            </div>
        )
    }
}

export default Dashboard;