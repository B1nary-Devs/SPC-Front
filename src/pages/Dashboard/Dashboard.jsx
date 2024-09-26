import './dashboard.css'
import { data } from './data';
import CardDashboardSample from "../../components/CardDashboardSample/CardDashboardSample"

//MATERIAL UI
import TaskIcon from '@mui/icons-material/Task';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import Barchart from '../../components/Charts/Barchart'
import Linechart from '../../components/Charts/Linechart'
import DoughnutChart from '../../components/Charts/DoughnutChart'

const dataChart = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
        {
            label: 'Vendas de 2024',
            data: [1500, 2300, 1800, 2600, 3100, 4200],
            backgroundColor: '#1168ab',
        },
    ],
};

// Configuração do gráfico de linhas
const dataLineChart = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
        {
            label: 'Crescimento de vendas',
            data: [1200, 1400, 1800, 2000, 2400, 2800],
            borderWidth: 2,
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Preenchimento abaixo da linha
            tension: 0.4, // Curvatura da linha
            fill: true, // Preencher a área abaixo da linha
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Cor de fundo dos pontos
            pointBorderColor: 'rgba(255, 159, 64, 1)', // Cor da borda dos pontos
            pointBorderWidth: 3, // Largura da borda dos pontos
            pointRadius: 5, // Tamanho dos pontos
            pointHoverRadius: 7,
        },
    ],
};

// Configuração do gráfico de rosca (Doughnut)
const dataDoughnutChart = {
    labels: ['Eletrônicos', 'Roupas', 'Alimentos', 'Serviços'],
    datasets: [
        {
            label: 'Distribuição de Vendas',
            data: [3000, 5000, 2000, 4000],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverOffset: 4,
        },
    ],
};

export default function Dashboard() {
    return (
        <div className="container">
            <div className="cardTotal">
                <CardDashboardSample dataCard={data.kinds_counts_Sum}>
                    <ShoppingCartIcon className="icon-card-sample" fontSize="large" />
                </CardDashboardSample>
            </div>
            <div className="cardSucces">
                <CardDashboardSample dataCard={data.active_counts_sum}>
                    <TaskIcon className="icon-card-sample" fontSize="large" />
                </CardDashboardSample>
            </div>
            <div className="cardFail">
                <CardDashboardSample dataCard={data.cancelados_counts_sum}>
                    <NewReleasesIcon className="icon-card-sample" fontSize="large" />
                </CardDashboardSample>
            </div>
            <div className="servicesEstado">
                <Linechart chartData={data.active_counts} />
            </div>
            <div className="kindEstado">
                <Linechart chartData={data.cancelados_counts} />
            </div>
            <div className="mais-TransacoesServicesGoods">
                <Linechart chartData={dataLineChart} />
            </div>
            <div className="EstadoCampeaoServices">
                <Barchart chartData={dataChart} />
            </div>
            <div className="EstadoCampeaoGoods">
                <Barchart chartData={dataChart} />
            </div>
        </div>
    )
}