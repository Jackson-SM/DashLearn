import { ApexOptions } from 'apexcharts';
import { DefaultTheme } from 'styled-components';

export type OptionsChartProps = {
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
};

export function getConfigCharts(theme: DefaultTheme, options?: OptionsChartProps['series']): OptionsChartProps {
  const optionsChart: OptionsChartProps = {
    options: {
      chart: {
        id: 'basic-bar',
        background: theme.colors.backgroundLight,
      },
      dataLabels: {
        enabled: false,
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
        enabled: true,
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: false,
        },
        marker: {
          fillColors: [theme.colors.secundaryLight],
        },
      },
      theme: {
        mode: 'dark',
      },
    },
    series: [
      {
        name: 'Friends',
        data: [0, 4, 6, 10, 9, 1, 8, 4],
      },
    ],
    ...options,
  };

  return optionsChart;
}
