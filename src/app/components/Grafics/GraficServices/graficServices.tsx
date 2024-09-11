// pages/ChartPrice.tsx
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartServices: React.FC<any> = () => {
  const [valorMes, setValorMes] = useState<number[]>(new Array(12).fill(0));

  useEffect(() => {
    const codUser = localStorage.getItem('codUser');
    if (codUser) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/counttotalticketuser/${codUser}`)
        .then((response) => response.json())
        .then((result) => {
          setValorMes(result.data);
        })
        .catch(console.error);
    }
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 290,
      type: 'line',
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return `R$ ${val.toFixed(2)}`;
        },
      },
    },
    stroke: {
      width: [2],
    },
    fill: {
      colors: ['#1c74bc'],
    },
    title: {
      text: 'Histórico de Gastos Mensais',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
    },
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    yaxis: [
      {
        title: {
          text: 'Despesa',
        },
      },
    ],
  };

  const series: ApexAxisChartSeries = [
    {
      name: 'Despesa',
      type: 'column',
      data: [10000,5000 , 6500, 2500, 3000, 4500, 8000, 13000, 7000,1000,2000,10000],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={290}
      width={'100%'}
    />
  );
};

export default ChartServices;
