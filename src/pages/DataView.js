import {Component} from 'react'

import './DataView.css'

import {CanvasJSChart} from 'canvasjs-react-charts'
import { parse } from 'uuid'

export default class DataView extends Component {
  precentages = {
    veryNegative: [],
    slightlyNegative: [],
    neutral: [],
    slightlyPositive: [],
    veryPositive: []
  }
  
  
  

  
  render() {
		const titles = []
		this.props.data.forEach(feed => titles.push(feed.title))
    const parsedData = this.props.data.reduce((acc, val) => {
			for (let key in val.chartData) {
			
				let title = val.chartData.title
				delete val.chartData.title
				acc[key].push({label: title, y: val.chartData[key] })
			}
			return acc
		}, this.precentages)
   

		for (let key in parsedData) {
			for (let i = 0; i < parsedData[key].length; i++) {
				parsedData[key][i].label = titles[i]
			}
		}

		console.log(parsedData)

		const options = {
			animationEnabled: true,
			title: {
				text: "RSS Feed Items Sentiment Polarity",
			},
			toolTip: {
				shared: true
			},
			legend: {
				verticalAlign: "top"
			},
			axisY: {
				interval: 10,
				suffix: "%"
			},
			axisX : { 
				labelMaxWidth: 240,
				labelAutoFit: true,
				labelWrap: true,
				labelTextAlign: 'center'
         },
			data: [{
				type: "stackedBar100",
				color: "#F7CB15",
				name: "Very Positive",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.veryPositive.reverse()
			},{
				type: "stackedBar100",
				color: "#9bbb59",
				name: "Slightly Positive",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.slightlyPositive.reverse()
			},{
				type: "stackedBar100",
				color: "#7f7f7f",
				name: "Neutral",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.neutral.reverse()
			},{
				type: "stackedBar100",
				color: "#76BED0",
				name: "Slightly Negative",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.slightlyNegative.reverse()
			},{
				type: "stackedBar100",
				color: "black",
				name: "Very Negative",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.veryNegative.reverse()
			}
		]
		}
		return (
		<div>
			<CanvasJSChart options = {options}/>
			<span className="watermark-cover"></span>

		</div>
		);
	}
}