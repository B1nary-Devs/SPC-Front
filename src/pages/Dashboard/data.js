// data.js

export const data = {

    kinds_counts_Sum: {
      titulo: 'Total de Transações',
      valor: 181.239,
      color: '#0C4EC9',
      total: '20.000',
    },

    kinds_counts: {
      labels: ['Agosto', 'Maio', 'Junho', 'Julho', 'Abril', 'Setembro', 'Janeiro', 'Fevereiro', 'Marco', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Kinds Counts',
          data: [154355, 7806, 5274, 3144, 3047, 1883, 1379, 1327, 1238, 1117, 417, 252],
        }
      ]
    },

    service_counts_Sum: 881,
    service_counts: {
      labels: ['Agosto', 'Outubro', 'Setembro', 'Julho', 'Dezembro', 'Marco', 'Junho', 'Abril', 'Maio', 'Novembro', 'Fevereiro', 'Janeiro'],
      datasets: [
        {
          label: 'Service Counts',
          data: [237, 112, 72, 70, 62, 62, 55, 54, 54, 48, 33, 22],
        }
      ]
    },

    goods_counts: {
      labels: ['Agosto', 'Maio', 'Junho', 'Julho', 'Abril', 'Setembro', 'Janeiro', 'Fevereiro', 'Marco', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Goods Counts',
          data: [154118, 7752, 5219, 3074, 2993, 1811, 1357, 1294, 1176, 1005, 369, 190],
        }
      ]
    },

    cancelados_counts_sum: {
      titulo: 'Transações Canceladas',
      valor: 43.488,
      color: '#ef3333e8',
    },
    cancelados_counts: {
      labels: ['Agosto', 'Setembro', 'Outubro', 'Marco', 'Julho', 'Novembro', 'Abril', 'Fevereiro', 'Maio', 'Dezembro', 'Junho', 'Janeiro'],
      datasets: [
        {
          label: 'Transações Canceladas',
          data: [42627, 278, 138, 117, 89, 63, 42, 41, 30, 27, 20, 16],
          backgroundColor: '#ef3333e8',
          borderWidth: 2,
          borderColor: '#ef3333e8', // Cor da linha
          tension: 0.4, // Curvatura da linha
          fill: true, // Preencher a área abaixo da linha
          pointBackgroundColor: '#ef3333e8', // Cor de fundo dos pontos
          pointBorderWidth: 3, // Largura da borda dos pontos
          pointRadius: 5, // Tamanho dos pontos
          pointHoverRadius: 7,
        }
      ]
    },

      active_counts_sum: {
      titulo: 'Transações Concluídas',
      valor: 137.281,
      color: '#2dba26e8',
    },
    active_counts: {
      labels: ['Agosto', 'Maio', 'Junho', 'Julho', 'Abril', 'Setembro', 'Janeiro', 'Fevereiro', 'Marco', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Transações Concluídas',
          data: [111705, 7671, 5213, 3027, 2797, 1595, 1351, 1277, 1104, 971, 350, 220],
          backgroundColor: '#2dba26e8',
          borderWidth: 2,
          borderColor: '#2dba26e8', // Cor da linha
          tension: 0.4, // Curvatura da linha
          fill: true, // Preencher a área abaixo da linha
          pointBackgroundColor: '#2dba26e8', // Cor de fundo dos pontos
          pointBorderWidth: 3, // Largura da borda dos pontos
          pointRadius: 5, // Tamanho dos pontos
          pointHoverRadius: 7,
        }
      ]
    },


    finished_counts: {
      labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Marco', 'Janeiro', 'Setembro', 'Fevereiro', 'Outubro', 'Dezembro', 'Novembro'],
      datasets: [
        {
          label: 'Finished Counts',
          data: [208, 105, 41, 28, 23, 17, 12, 10, 9, 8, 5, 4],
        }
      ]
    },


    qtd_estado_goods: {
      labels: ['SP', 'CE', 'MG', 'NA', 'PE'],
      datasets: [
        {
          label: 'Qtd Estado Goods',
          data: [157111, 5602, 4000, 3881, 2817],
        }
      ]
    },


    qtd_estados_canceled_goods: {
      labels: ['SP', 'NA', 'BA', 'SC', 'PA'],
      datasets: [
        {
          label: 'Qtd Estados Canceled Goods',
          data: [42571, 662, 101, 14, 5],
        }
      ]
    },


    qtd_estados_finished_goods: {
      labels: ['SP', 'MG', 'RS', 'SC', 'RJ'],
      datasets: [
        {
          label: 'Qtd Estados Finished Goods',
          data: [230, 59, 57, 26, 16],
        }
      ]
    },


    qtd_estados_active_goods: {
      labels: ['SP', 'MG', 'RS', 'SC', 'RJ'],
      datasets: [
        {
          label: 'Qtd Estados Active Goods',
          data: [230, 59, 57, 26, 16],
        }
      ]
    },


    qtd_estado_services: {
      labels: ['SP', 'NA', 'RJ', 'PA', 'SC'],
      datasets: [
        {
          label: 'Qtd Estado Services',
          data: [510, 233, 84, 20, 16],
        }
      ]
    },


    qtd_estados_cancelados_services: {
      labels: ['NA', 'SP'],
      datasets: [
        {
          label: 'Qtd Estados Cancelados Services',
          data: [111, 17],
        }
      ]
    },


    qtd_estados_finished_services: {
      labels: ['SP', 'SC', 'NA', 'RJ', 'MG'],
      datasets: [
        {
          label: 'Qtd Estados Finished Services',
          data: [16, 15, 8, 2, 1],
        }
      ]
    },


    qtd_estados_active_services: {
      labels: ['SP', 'SC', 'NA', 'RJ', 'MG'],
      datasets: [
        {
          label: 'Qtd Estados Active Services',
          data: [16, 15, 8, 2, 1],
        }
      ]
    },
  };
  