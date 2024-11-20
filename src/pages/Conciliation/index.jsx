import Menu from '../../components/SideBarMenu';
import './conciliation.css'
import AccordionConcliation from '../../components/Accordion';

export default function Conliation() {
    return (
        <>
            <Menu />
            <div className="content-page">
                <div className="conciliation-header">
                    <h1>Conciliação Mensal</h1>
                    <h3>Histórico e Previsão</h3>
                </div>
                <main className="conciliation-body">
                    <AccordionConcliation/>
                </main>
            </div>
        </>
    )
}