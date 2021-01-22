<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-xs="12"
      vs-sm="12"
    >
      <vs-card>
        <div slot="header">
          <h3>
            {{ title }}
          </h3>
        </div>

        <div>
          <canvas :id="id"></canvas>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "ChartElement",
  props: ["title", "tabledata", "id", "type"],
  data: () => ({}),
  mounted: function() {
    new Chart(document.getElementById(this.id), {
      type: this.type,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "2018 Sales",
            backgroundColor: "rgba(255, 0, 0, 0.33)",
            data: [300, 700, 450, 750, 450]
          },
          {
            label: "2019 Sales",
            backgroundColor: "rgba(0, 255, 0, 0.33)",
            data: [400, 800, 550, 400, 50]
          },
          {
            label: "2020 Sales",
            backgroundColor: "rgba(0, 0, 255, 0.33)",
            data: [800, 500, 150, 800, 900]
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
        //    tooltips: {
        //       enabled: false
        //    },
        //    scales: {
        //       xAxes: [{
        //          gridLines: {
        //             display: false
        //          },
        //          ticks: {
        //           display: false
        //       }
        //       }],
        //       yAxes: [{
        //          gridLines: {
        //             display: false
        //          },
        //           ticks: {
        //           display: false
        //       }
        //       }]
        //  }
      }
    });
  }
};
</script>
