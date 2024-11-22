import Menu from '../../components/SideBarMenu';
import AccordionAnomalies from '../../components/AccordionAnomalies';
import api from '../../api/api';
import { useState, useEffect } from 'react';

export default function Anomalies() {
    const [cessionarias, setCessionarias] = useState(null); // Inicializado como null

    useEffect(() => {
        loadCessionarias();
    }, []);

    async function loadCessionarias() {
        try {
            const response = await api.get('/assignee/56724594553/fraudulent_sacados');
            setCessionarias(response.data); // Armazenando a resposta corretamente
        } catch (e) {
            console.error("Erro ao carregar os dados", e);
        }
    }

    console.log(cessionarias);
    

    return (
        <>
            <Menu />
            <div className="content-page">
                <div className="conciliation-header">
                    <h1>Detecção de Anomalias</h1>
                </div>
                <main className="conciliation-body">
                    
                </main>
            </div>
        </>
    );
}
