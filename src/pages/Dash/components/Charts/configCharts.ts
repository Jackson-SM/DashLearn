import { ApexOptions } from 'apexcharts';
import { DefaultTheme } from 'styled-components';

export type OptionsChartProps = {
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
};

export function getConfigCharts(theme: DefaultTheme, id: string, options?: OptionsChartProps['series']): OptionsChartProps {
  const optionsChart: OptionsChartProps = {
    options: {
      chart: {
        id,
        background: theme.colors.backgroundLight,
      },
      dataLabels: {
        enabled: false,
      },
      colors: [theme.colors.primary, theme.colors.secundary, theme.colors.tertiary],
      xaxis: {
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
    series: options,
  };

  return optionsChart;
}
