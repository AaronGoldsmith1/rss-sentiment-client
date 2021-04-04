import {Component} from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts'

import './DataView.css'


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
			animationDuration: 2000,
			theme: 'dark1', //“light1″,”light2”, “dark1”, “dark2”
			title: {
				text: "RSS Feed Items Sentiment Polarity",
				fontFamily: 'Lato'
			},
			toolTip: {
				shared: true,
        fontFamily: 'Lato'
			},
			legend: {
				verticalAlign: "top",
				fontFamily: 'Lato'
			},
			axisY: {
				interval: 10,
				suffix: "%",
				labelFontFamily: 'Lato'
			},
			axisX : { 
				labelMaxWidth: 240,
				labelAutoFit: true,
				labelWrap: true,
				labelTextAlign: 'center',
				labelFontFamily: 'Lato'
         },
			data: [{
				type: "stackedBar100",
				color: "#56c03a",
				name: "Very Positive",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.veryPositive.reverse()
			},{
				type: "stackedBar100",
				color: "#beffb1",
				name: "Slightly Positive",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.slightlyPositive.reverse()
			},{
				type: "stackedBar100",
				color: "#cccccc",
				name: "Neutral",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.neutral.reverse()
			},{
				type: "stackedBar100",
				color: "#fe9998",
				name: "Slightly Negative",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: parsedData.slightlyNegative.reverse()
			},{
				type: "stackedBar100",
				color: "#df5253",
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
			<CanvasJSChart options={options}/>
			<span className="watermark-cover"></span>
		</div>
		);
	}
}