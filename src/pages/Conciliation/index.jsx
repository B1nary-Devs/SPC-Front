import React, { useCallback, useState, useEffect } from 'react';
import Menu from '../../components/SideBarMenu';
import './conciliation.css';
import AccordionConcliation from '../../components/Accordion';
import { useDropzone } from 'react-dropzone';
import api from '../../api/api';
import Loader from '../../components/Loader';

export default function Conliation() {
    const [loader, setLoader] = useState(false);
    const [mesPrevisto, setMesPrevisto] = useState(null); // Estado para armazenar os dados da API

    useEffect(() =>{
        loadConciliations()
    }, [])

    // ENVIAR O CSV ASYNC
    async function uploadCSV(file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoader(true);
            const response = await api.post('/information/create_with_csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Resposta do servidor:', response.data);
            setMesPrevisto(response.data); // Armazena o dado retornado da API no estado
            setLoader(false);
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error.response?.data || error.message);
            setLoader(false);
        }
    }

    // ENVIAR O CSV ASYNC
    async function loadConciliations() {
        try {
            setLoader(true);
            const response = await api.get('/information/previsions');

            console.log('Resposta do servidor:', response.data);
            setMesPrevisto(response.data); // Armazena o dado retornado da API no estado
            setLoader(false);
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error.response?.data || error.message);
            setLoader(false);
        }
    }

    // FUNÇÃO DE COLETAR CSV
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            console.log('Arquivo recebido:', acceptedFiles[0]);
            uploadCSV(acceptedFiles[0]); // Chama a função de upload para enviar o arquivo ao backend
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.csv', // Apenas arquivos CSV
    });

    return (
        <>
            {loader && <Loader />}
            <Menu />
            <div className="content-page">
                <div className="conciliation-header">
                    <h1>Conciliação Mensal</h1>
                    <h3>Histórico e Previsão</h3>
                </div>
                <main className="conciliation-body">
                    <div
                        {...getRootProps()}
                        className={`drag-drop-zone ${isDragActive ? 'active' : ''}`}
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Solte o arquivo aqui...</p>
                        ) : (
                            <p>Arraste e solte um arquivo CSV aqui, ou clique para selecionar.</p>
                        )}
                    </div>
                    {/* Accordion */}
                    {mesPrevisto ? (
                        <AccordionConcliation data={mesPrevisto} /> // Passa o dado como propriedade para o Accordion
                    ) : (
                        <p></p>
                    )}
                </main>
            </div>
        </>
    );
}