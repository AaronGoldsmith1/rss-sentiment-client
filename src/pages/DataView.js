import {Component} from 'react'

import './DataView.css'

import {CanvasJSChart} from 'canvasjs-react-charts'

export default class DataView extends Component {

  
  render() {
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
				color: "#9bbb59",
				name: "Positive",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: 'Ars Technica',   y: 15 },
					{ label: 'TechCrunch',   y: 79 },
					{ label: "Psyhcology",   y: 77 },
					{ label: 'American Chemical Society...',   y: 68 },
					{ label: 'Reddit’s r/worldnews',   y: 63 },
					{ label: 'Entrepreneur',   y: 61 },
					{ label: 'Signal v. Noise – Medium',   y: 59 },
					{ label: 'NYT - Home Page',   y: 49 },
					{ label: 'BBC News – Home',   y: 49 },
					{ label: 'Engadget RSS Feed',   y: 18 }
				]
			},{
				type: "stackedBar100",
				color: "#7f7f7f",
				name: "Neutral",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: 'Ars Technica',   y: 80 },
					{ label: 'TechCrunch',   y: 11 },
					{ label: 'Reuters: Business News',   y: 13 },
					{ label: 'American Chemical Society...',   y: 22 },
					{ label: 'Reddit’s r/worldnews',   y: 17 },
					{ label: 'Entrepreneur',   y: 29 },
					{ label: 'Signal v. Noise – Medium',   y: 21 },
					{ label: 'NYT - Home Page',   y: 31 },
					{ label: 'BBC News – Home',   y: 11 },
					{ label: 'Engadget RSS Feed',   y: 42 }
				]
			},{
				type: "stackedBar100",
				color: "black",
				name: "Negative",
				showInLegend: true,
				indexLabel: false,
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: 'Ars Technica',   y: 0 },
					{ label: 'TechCrunch',   y: 10 },
					{ label: 'Reuters: Business News',   y: 3 },
					{ label: 'American Chemical Society...',   y: 10 },
					{ label: 'Reddit’s r/worldnews',   y: 20 },
					{ label: 'Entrepreneur',   y: 10 },
					{ label: 'Signal v. Noise – Medium',   y: 20 },
					{ label: 'NYT - Home Page',   y: 20 },
					{ label: 'BBC News – Home',   y: 40 },
					{ label: 'Engadget RSS Feed',   y: 20 }
				]
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