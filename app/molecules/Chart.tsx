import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ChartVariant = 'pie' | 'bar' | 'line' | 'doughnut';

interface ChartProps {
    data: ChartData<any>;
    options?: ChartOptions<any>;
    chartWapperStyle?: string;
    variant: ChartVariant;
}

const Chart: React.FC<ChartProps> = ({
    data,
    options,
    chartWapperStyle,
    variant,
}) => {
    return (
        <div className={`${chartWapperStyle}`}>
            {variant === 'pie' && <Pie data={data} options={options} />}
            {variant === 'bar' && <Bar options={options} data={data} />}
            {variant === 'line' && <Line options={options} data={data} />}
            {variant === 'doughnut' && <Doughnut options={options} data={data} />}
        </div>
    );
};

export default Chart;
