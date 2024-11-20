import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css'

export default function AccordionConcliation() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Setemrbo 2025
        </AccordionSummary>
        <AccordionDetails>
          <div className="AccordionDetails">
            <span>Previsto</span>
            <p>26588 Unidades</p>
            <span>Recebidos</span>
            <p>12321 Unidades</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
