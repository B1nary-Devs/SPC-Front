import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordionanomalies.css';
import api from '../../api/api';
import AnomaliesDialog from '../AnomaliesDialog'
import { useState, useEffect } from 'react';

export default function AccordionAnomalies({ cnpj }) {
  const [cessionaria, setCessionaria] = useState(null);
  const [sacadoAlerts, setSacadoAlerts] = useState({});

  useEffect(() => {
    loadCessionaria();
  }, []);

  async function loadCessionaria() {
    try {
      const response = await api.get(`/assignee/${cnpj}/fraudulent_sacados`);
      const data = response.data || null;
      if (data) {
        setCessionaria(data);
        console.log(data);
        
        calculateAlerts(data.cessionaria_sacado);
      }
    } catch (e) {
      console.error("Erro ao carregar os dados", e);
    }
  }

  function calculateAlerts(sacados) {
    // Contabiliza a ocorrência de cada sacado pelo nome
    const counts = {};
    sacados.forEach((sacado) => {
      const name = sacado.cessionaria_sacado_nome;
      counts[name] = (counts[name] || 0) + 1;
    });
    setSacadoAlerts(counts);
  }

  return (
    <div>
      {cessionaria ? (
        <Accordion className='accordion-item'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {cessionaria.cessionaria_nome} ({cessionaria.cessionaria_cnpj})
          </AccordionSummary>
          <AccordionDetails>
            <div className="AccordionDetails">
              <table className="alerts-table">
                <thead>
                  <tr>
                    <th>Nome do Sacado</th>
                    <th>Alertas</th>
                  </tr>
                </thead>
                <tbody>
                  {cessionaria.cessionaria_sacado.map((sacado, idx) => (
                    <tr key={idx}>
                      <td>{sacado.cessionaria_sacado_nome}</td>
                      <td>{sacadoAlerts[sacado.cessionaria_sacado_nome] || 0}</td>
                      <td>ola</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              
            </div>
          </AccordionDetails>
        </Accordion>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
