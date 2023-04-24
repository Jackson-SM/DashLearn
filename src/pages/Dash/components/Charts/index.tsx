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
      data: [1, 2, 3, 4, 5, 3, 4],
    },
  ];
  const serieFriends: OptionsChartProps['series'] = [
    {
      name: 'Friends',
      data: [1, 2, 3, 4, 5, 4, 6],
    },
  ];
  const serieCollections: OptionsChartProps['series'] = [
    {
      name: 'Collections',
      data: [3, 6, 10, 5, 3, 1, 6],
    },
  ];

  const tasksPropsCharts = getConfigCharts(theme, 'tasks', serieTasks);
  const friendsPropsCharts = getConfigCharts(
    {
      ...theme,
      colors: {
        ...theme.colors,
        primary: theme.colors.secundary,
        primaryLight: theme.colors.secundaryLight,
      },
    },
    'friends',
    serieFriends,
  );
  const collectionsPropsCharts = getConfigCharts(
    { ...theme, colors: { ...theme.colors, primary: theme.colors.tertiary, primaryLight: theme.colors.tertiaryLight } },
    'collections',
    serieCollections,
  );

  return (
    <SCharts.StyledCharts>
      <ApexCharts options={tasksPropsCharts.options} series={tasksPropsCharts.series} type="area" />
      <ApexCharts options={friendsPropsCharts.options} series={friendsPropsCharts.series} type="line" />
      <ApexCharts options={collectionsPropsCharts.options} series={collectionsPropsCharts.series} type="bar" />
    </SCharts.StyledCharts>
  );
};
