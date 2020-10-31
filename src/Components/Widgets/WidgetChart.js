import React from "react";
import WidgetBar from './WidgetBar';
import WidgetDoughnut from './WidgetDoughnut';

function WidgetChart() {

            // Preparing the chart data
        const chartData = [
            {
                label: "Venezuela",
                value: "290"
            },
            {
                label: "Saudi",
                value: "260"
            },
            {
                label: "Canada",
                value: "180"
            },
            {
                label: "Iran",
                value: "140"
            },
            {
                label: "Russia",
                value: "115"
            }
        ];

        //Render Chart
    return ( 
        <div>
            <WidgetBar title="title" data={chartData}/> 
            <WidgetDoughnut title="title" data={chartData}/>
        </div> 
     )
}
export default WidgetChart;