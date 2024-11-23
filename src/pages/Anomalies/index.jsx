import Menu from '../../components/SideBarMenu';
import AccordionAnomalies from '../../components/AccordionAnomalies';
import api from '../../api/api';
import { useState, useEffect } from 'react';

export default function Anomalies() {
    const [cessionarias, setCessionarias] = useState(null); 

    useEffect(() => {
        loadCessionarias();
    }, []);

    async function loadCessionarias() {
        try {
            const response = await api.get('/assignee/fraudulent_assignees');
            setCessionarias(response.data);
        } catch (e) {
            console.error("Erro ao carregar os dados", e);
        }
    }

    return (
        <>
            <Menu />
            <div className="content-page">
                <div className="conciliation-header">
                    <h1>Detecção de Anomalias</h1>
                </div>
                <main className="conciliation-body">
                    {cessionarias && cessionarias.length > 0 ? (
                        cessionarias.map((cessionaria, index) => (
                            <AccordionAnomalies key={index} cnpj={cessionaria.cessionaria_cnpj}/>
                        ))
                    ) : (
                        <span>Carregando...</span> // Exibição caso não haja dados ainda
                    )}
                </main>
            </div>
        </>
    );
}
