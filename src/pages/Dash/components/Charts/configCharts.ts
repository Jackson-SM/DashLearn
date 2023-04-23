import { ApexOptions } from 'apexcharts';
import { DefaultTheme } from 'styled-components';

type OptionsChartProps = {
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
};

export function getConfigCharts(theme: DefaultTheme): OptionsChartProps {
  const optionsChart: OptionsChartProps = {
    options: {
      chart: {
        id: 'basic-bar',
        background: theme.colors.backgroundLight,
      },
      colors: [theme.colors.primary, theme.colors.secundary, theme.colors.tertiary],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [theme.colors.primaryLight],
          shadeIntensity: 1,
          type: 'vertical',
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        width: 3,
      },
      tooltip: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return optionsChart;
}
