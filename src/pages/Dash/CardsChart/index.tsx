import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  RadialLinearScale,
  BarElement,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { LineOptions } from './chartOptions';
import { transparentize } from 'polished';
import { StyledGraphics, StyledOneGraphic, AmountGraphic } from './styles';
import { useTheme } from '../../../hooks/useTheme';

export const CardsChart = () => {
  const { theme } = useTheme();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
    RadialLinearScale,
    BarElement,
    LineController,
    BarController,
  );

  const labelCreate = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dataCreate = {
    madeTasks: [0, 10, 2, 4, 1, 2, 4, 10, 8, 9, 6, 0],
    deletedTasks: [0, 10, 15, 13, 11, 7, 10, 4, 7, 6, 5, 0],
  };

  const data = {
    labels: labelCreate,
    datasets: [
      {
        label: 'Made Tasks',
        data: dataCreate.madeTasks,
        borderColor: `${theme.colors.primary}`,
        backgroundColor: `${transparentize(0.4, theme.colors.primary)}`,
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Deleted Tasks',
        data: dataCreate.deletedTasks,
        borderColor: `${theme.colors.secundary}`,
        backgroundColor: `${transparentize(0.4, theme.colors.secundary)}`,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <StyledGraphics>
      <StyledOneGraphic>
        <AmountGraphic>59.93%</AmountGraphic>
        <div className="chart" style={{ width: '400px' }}>
          <Chart type="line" options={LineOptions} data={data} style={{ width: '100%' }} />
        </div>
      </StyledOneGraphic>
      <StyledOneGraphic>
        <AmountGraphic>+23</AmountGraphic>
        <div className="chart" style={{ width: '100%' }}>
          <Chart type="bar" options={LineOptions} data={data} style={{ width: '100%' }} />
        </div>
      </StyledOneGraphic>
    </StyledGraphics>
  );
};
