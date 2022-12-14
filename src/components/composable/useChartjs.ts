import { reactive, toRefs } from "vue";
export default () => {
  const labels = [
    "NUMBER#1-ORANGE",
    "NUMBER#2-CORAL",
    "NUMBER#3-SALMON",
    "NUMBER#4-WHEAT",
  ];
  const backgroundColor = ["#FFA500", "#FF7F50", "#E18B6B", "#F5DEB3"];

  const state = reactive({
    chartData: {
      labels,
      datasets: [
        {
          backgroundColor,
          data: [40, 20, 80, 10],
        },
      ],
    },
    charOption: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  const changeChartDataSize = () => {
    //create random Data
    let newData = [];
    for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor(Math.random() * 100);
      newData.push(randomNum);
    }

    //change chart Data
    state.chartData = {
      labels,
      datasets: [
        {
          backgroundColor,
          data: newData,
        },
      ],
    };
  };

  return {
    ...toRefs(state),
    changeChartDataSize,
  };
};
