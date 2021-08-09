import React, { Component } from "react";
import Chart from "react-apexcharts";

import "./Chart.styles.scss";

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["2012"],
          labels: {
            show: false,
          },
        },
        colors: ["#1096DE", "#10A11A", "#ff7700", "#DE3618"],
      },

      series: [],
    };
  }

  componentDidMount() {
    const data = this.props.coronaDataForChart;
    const { dates, confirmed, recovered, existing, deaths } = data;
    this.setState({
      series: [
        ...this.state.series,
        { name: "Підтверджених випадків", data: Object.values(confirmed) },
        { name: "Одужало", data: Object.values(recovered) },
        { name: "Хворіє", data: Object.values(existing) },
        { name: "Померло", data: Object.values(deaths) },
      ],
      options: {
        xaxis: {
          categories: [...dates],
        },
      },
    });
  }

  render() {
    return (
      <div className="mixed-chart-container">
        <span className="mixed-chart__title">Дані за весь час</span>
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default ChartComponent;
