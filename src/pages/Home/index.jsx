import React, { useEffect, useState } from 'react';
import Menu from "../../components/SideBarMenu";
import TermoModal from '../../components/TermoModal/TermoModal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLatestTerm } from '../../redux/termo/termoSlice';
import MediaCard from '../../components/cardsHome';
import './home.css'
import api from '../../api/api';
import { toast } from 'react-toastify';


export default function Home() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const [termsData, setTermsData] = useState(null);
    const [score, setScore] = useState(0);
    const [isTermModalOpen, setTermModalOpen] = useState(false);

    useEffect(() => {
        const loadTerms = async () => {
            const termsAction = await dispatch(fetchLatestTerm());

            if (fetchLatestTerm.fulfilled.match(termsAction)) {
                setTermsData(termsAction.payload);
                setTermModalOpen(true);
            } else {
                console.error('Erro ao buscar termos:', termsAction.payload);
            }
        };

        if (user && user.termo_atual && !user.termo_atual.termo_aceite) {
            loadTerms();
        }

        LoadScore()

    }, [dispatch, user]);

    async function LoadScore() {
        if (user.perfil === 'Cessionaria') {
            try {
                const response = await api.get(`/assignee/${user.cpf_cnpj}`);
                setScore(response.data);
            } catch (error) {
                toast.error('Erro ao enviar o arquivo:', error.response?.data || error.message);
            }
        }
    }

    const otherProfileCards = [

        {
            img: 'https://img.freepik.com/fotos-premium/o-grafico-de-negociacao-do-mercado-de-acoes-vermelho-significa-uma-desaceleracao-na-economia-e-possiveis-perdas-financeiras_795881-3937.jpg',
            text: 'Identifique e resolva rapidamente anomalias em duplicatas para manter sua operação financeira em ordem.',
            link: '/anomalies',
            title: 'Gestão de Anomalias'
        },
        {
            img: 'https://www.cora.com.br/blog/wp-content/uploads/elementor/thumbs/o-que-e-gestao-financeira-pqpp9q40sybkj0uv54en7h2qhb5644ngsvrm20drwg.png',
            text: 'Acompanhe a conciliação mensal de duplicatas para garantir a integridade dos registros financeiros.',
            link: '/conciliation',
            title: 'Conciliação Mensal'
        },
        {
            img: 'https://img.freepik.com/fotos-premium/grafico-de-negociacao-do-mercado-de-acoes-economia-ilustracao-3d-fundo-generativo-ai_191095-2923.jpg',
            text: 'Visualize de forma clara a distribuição das praças de pagamento e gerencie regionalmente suas duplicatas.',
            link: '/mapa',
            title: 'Praça de Pagamento'
        },
        {
            img: 'https://wallpapers.com/images/hd/stock-pictures-m5l50u36ehxkilfg.jpg',
            text: 'Tenha uma visão geral da distribuição de praças de pagamento e desempenho financeiro da gestão de duplicatas em um painel intuitivo.',
            link: '/dashboard',
            title: 'Dashboard'
        },
    ];

    const cessionariaCards = [

        {
            img: 'https://conteudo.imguol.com.br/c/noticias/29/2020/11/26/bolsa-investimentos-acoes-liquidez-small-caps-blue-ships-1606408825944_v2_900x506.jpg',
            text: 'Gerencie duplicatas que estão a vencer para evitar problemas e manter o fluxo financeiro sob controle.',
            link: '/duplicatas/duplicatesDue',
            title: 'Duplicatas a Vencer'
        },
        {
            img: 'https://images.pexels.com/videos/3945008/4k-after-effects-analysis-animation-3945008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'Identifique duplicatas vencidas e tome ações rápidas para minimizar impactos no caixa.',
            link: '/duplicatas/expiredDue',
            title: 'Duplicatas Vencidas'
        },
        {
            img: 'https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-d-rendering-of-a-glowing-digital-business-interface-showcasing-finance-innovation-image_3694007.jpg',
            text: 'Veja duplicatas já liquidadas e analise o desempenho da recuperação financeira.',
            link: '/duplicatas/completedDue',
            title: 'Duplicatas Finalizadas'
        },
        {
            img: 'https://c0.wallpaperflare.com/preview/755/191/656/agent-agreement-boss-brainstorming.jpg',
            text: 'Gerencie seus sacados, garantindo organização e eficiência na gestão de duplicatas.',
            link: '/sacados',
            title: 'Gestão de Sacados'
        }
    ];

    return (
        <div>
            <Menu />
            {termsData && (
                <TermoModal
                    open={isTermModalOpen}
                    handleClose={() => setTermModalOpen(false)}
                    termsData={termsData}
                    user={user}
                />
            )}

            <div className="content-page">
                <div className="home-page">
                    <section className="hero-section">
                        <span className="hero-text">
                            {user.perfil === 'Cessionaria' ? `Seu Score é ${score.cessionaria_score}` : `Olá, ${user.nome}`}
                        </span>
                    </section>


                    <section className='card-section'>
                        {(user.perfil === 'Cessionaria' ? cessionariaCards : otherProfileCards).map((card, index) => (
                            <MediaCard key={index} data={card} />
                        ))}
                    </section>

                </div>

            </div>

        </div>
    );
}
