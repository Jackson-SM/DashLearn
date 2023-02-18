export const LineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom' as const,
      labels: {
        font: {
          family: 'Albert Sans',
          size: 10,
        },
      },
    },
  },
  scales: {
    y: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      ticks: {
        display: false,
        font: {
          family: 'Albert Sans',
        },
      },
    },
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      ticks: {
        display: false,
        font: {
          family: 'Albert Sans',
        },
      },
    },
  },
  layout: {
    autoPadding: true,
  },
};

export const DoughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom' as const,
      labels: {
        font: {
          family: 'Noto Sans',
          size: 10,
        },
      },
    },
  },
  scale: {
    y: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      ticks: {
        display: false,
        font: {
          family: 'Noto Sans',
        },
      },
    },
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
        border: false,
      },
      ticks: {
        display: false,
        font: {
          family: 'Noto Sans',
        },
      },
    },
  },
  layout: {
    autoPadding: true,
  },
};
