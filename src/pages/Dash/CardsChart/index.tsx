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
} from 'chart.js';
import { Chart, Doughnut, Pie } from 'react-chartjs-2';
import { DoughnutOptions, LineOptions } from './chartOptions';
import { transparentize } from 'polished';
import { dark } from '../../../styles/themes/dark';
import { StyledGraphics, StyledOneGraphic, TitleGraphic } from './styles';
import { useTheme } from '../../../hooks/useTheme';

export const CardsChart = () => {
  const { theme } = useTheme();

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement);

  const labelCreate = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dataCreate = {
    madeTasks: [10, 3, 1, 5, 2, 6, 3],
    deletedTasks: [3, 1, 0, 3, 1, 1, 2],
  };

  const data = {
    labels: labelCreate,
    datasets: [
      {
        label: 'Made Tasks',
        data: dataCreate.madeTasks,
        borderColor: `${theme.colors.primary}`,
        backgroundColor: `${transparentize(0.5, theme.colors.primary)}`,
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Deleted Tasks',
        data: dataCreate.deletedTasks,
        borderColor: `${theme.colors.tertiary}`,
        backgroundColor: `${transparentize(0.5, theme.colors.tertiary)}`,
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <StyledGraphics>
      <StyledOneGraphic>
        <TitleGraphic>Tasks</TitleGraphic>
        <div className="chart" style={{ width: '400px' }}>
          <Chart type="line" options={LineOptions} data={data} style={{ width: '100%' }} />
        </div>
      </StyledOneGraphic>
      <StyledOneGraphic>
        <TitleGraphic>Made Tasks</TitleGraphic>
        <div className="chart" style={{ width: '200px' }}>
          <Doughnut options={DoughnutOptions} data={data} />
        </div>
      </StyledOneGraphic>
    </StyledGraphics>
  );
};
