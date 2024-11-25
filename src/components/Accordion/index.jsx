import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css';

const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

export default function AccordionConcliation({ data }) {
  if (!data || !data.previsao || data.previsao.length === 0) {
    return <p>Sem dados para exibir.</p>;
  }

  const dadosMensais = data.previsao[0].dados; // Assume que queremos trabalhar com o primeiro elemento da previsão (ano atual)

  return (
    <div>
      {dadosMensais.map((mesData) => {
        const monthName = monthNames[mesData.mes - 1]; // Nome do mês
        const previsto = mesData.previsto || 0; // Previsto para o mês
        const recebido = mesData.recebido || 0; // Recebido para o mês

        return (
          <Accordion key={mesData.mes}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${mesData.mes}-content`}
              id={`panel${mesData.mes}-header`}
            >
              {monthName} {data.previsao[0].ano} {/* Exibe o ano dinamicamente */}
            </AccordionSummary>
            <AccordionDetails>
              <div className="AccordionDetails">
                <span>Previsto:</span>
                <p>{previsto === 0 ? '-' : `${previsto} Unidades`}</p>
                <span>Recebido:</span>
                <p>{recebido} Unidades</p>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
