import React from 'react';
import * as SCharts from './styles';
import ApexCharts from 'react-apexcharts';
import { getConfigCharts } from './configCharts';
import { useTheme } from '../../../../hooks/useTheme';

export const Charts = () => {
  const { theme } = useTheme();

  const optionsCharts = getConfigCharts(theme);

  return (
    <SCharts.StyledCharts>
      <ApexCharts options={optionsCharts.options} series={optionsCharts.series} type="area" height="400" />
      <ApexCharts options={optionsCharts.options} series={optionsCharts.series} type="bar" height="400" />
    </SCharts.StyledCharts>
  );
};
