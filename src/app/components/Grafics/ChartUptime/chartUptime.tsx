// components/RadialBarChart.tsx

import React, { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarChart: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
    series: [44, 55, 67, 83],
    chart: {
      height: 200,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Uptime',
            formatter: (w: any) => {
              return `${62.25}%`;
            },
          },
        },
      },
    },
    labels: ['Fusion', 'MaxPedido', 'Infra', 'Winthor'],
  });

  const [series, setSeries] = useState([44, 55, 67, 83]);

  useEffect(() => {
    // Ajuste qualquer configuração se necessário após o componente ser montado
  }, []);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={295} />
    </div>
  );
};

export default RadialBarChart;
