import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

import './Chart.styles.scss';

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            '2012'
          ],
        },
        colors:['#DE3618', '#1096DE', '#10A11A', '#ff7700'],
      },

      series: [
      ],
    };
  }

  componentDidMount() {
    const fetchingMainData = async () => {
      const { data } = await axios.get(
        "https://api-covid19.rnbo.gov.ua/charts/main-data?mode=ukraine"
      );
      const { dates, confirmed, recovered, existing, deaths } = data;
      this.setState(
        {
          series: [
            ...this.state.series,
            { name: "Померло", data: Object.values(deaths) },
            { name: "Підтверджених випадків", data: Object.values(confirmed) },
            { name: "Одужало", data: Object.values(recovered) },
            { name: "Хворіє", data: Object.values(existing) },
          ],
          options: {
              xaxis: {
                  categories: [
                      ...dates
                  ]
              }
          }
        },
      );
    };
    fetchingMainData();
  }

  render() {
    return (
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="450px"
              width="100%"
            />
          </div>
    );
  }
}

export default ChartComponent;
