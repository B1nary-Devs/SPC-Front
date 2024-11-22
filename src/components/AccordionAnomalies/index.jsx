import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordionanomalies.css'
import api from '../../api/api';
import { useState, useEffect } from 'react';

export default function AccordionAnomalies({ cessionaria }) {

  console.log(cessionaria);
  

  const [cessionarias, setCessionarias] = useState(null); // Inicializado como null

  useEffect(() => {
    loadCessionarias();
  }, []);

  async function loadCessionarias() {
    try {
      const response = await api.get('/assignee/56724594553/fraudulent_sacados');
      setCessionarias(response.data);
    } catch (e) {
      console.error("Erro ao carregar os dados", e);
    }
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          wallace
        </AccordionSummary>
        <AccordionDetails>
          <div className="AccordionDetails">
            <table className="alerts-table">
              <thead>
                <tr>
                  <th>Sacado</th>
                  <th>Alertas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cessionaria.cessionaria_sacado.map((cessionariaValue, index) => (
                  <tr key={index}>
                    <td>{cessionariaValue.cessionaria_sacado_nome}</td>
                    <td>{cessionariaValue.cessionaria_sacado_contato}</td>
                    <td>{cessionariaValue.cessionaria_sacado_duplicata_status}</td>
                    <td>{cessionariaValue.cessionaria_sacado_score}</td>
                    <td>
                      <button
                        className="see-more-button"
                        onClick={() => handleSeeMore(cessionaria)}
                      >
                        Ver mais
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
