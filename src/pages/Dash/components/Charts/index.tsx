import React from 'react';
import * as SCharts from './styles';
import ApexCharts from 'react-apexcharts';
import { OptionsChartProps, getConfigCharts } from './configCharts';
import { useTheme } from '../../../../hooks/useTheme';

export const Charts = () => {
  const { theme } = useTheme();
  const serieTasks: OptionsChartProps['series'] = [
    {
      name: 'Tasks',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ];
  const serieFriends: OptionsChartProps['series'] = [
    {
      name: 'Friends',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ];
  const serieCollections: OptionsChartProps['series'] = [
    {
      name: 'Collections',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ];

  const tasksPropsCharts = getConfigCharts(theme, serieTasks);
  const friendsPropsCharts = getConfigCharts(theme, serieFriends);
  const collectionsPropsCharts = getConfigCharts(theme, serieCollections);

  return (
    <SCharts.StyledCharts>
      <ApexCharts options={tasksPropsCharts.options} series={tasksPropsCharts.series} type="area" height="400" />
      <ApexCharts options={friendsPropsCharts.options} series={friendsPropsCharts.series} type="bar" height="400" />
      <ApexCharts options={collectionsPropsCharts.options} series={collectionsPropsCharts.series} type="bar" height="400" />
    </SCharts.StyledCharts>
  );
};
