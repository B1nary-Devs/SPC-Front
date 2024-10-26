import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '../../components/SideBarMenu';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchInput from '../../components/SearchInput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ActionButton from '../../components/ActionButton';
import '../DuplicatesDue/duplicatesDue.css';
import AppMenu from '../../components/AppMenu/AppMenu';

import PaymentsIcon from '@mui/icons-material/Payments';

import { useState, useEffect } from 'react';

export default function DuplicatesExpired() {
    const [duplicatesDue, setDuplicatesDue] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(8);
    const [selectedMonth, setSelectedMonth] = useState('00');

    useEffect(() => {
        loadDuplicatesDue();
    }, []);

    async function loadDuplicatesDue() {
        fetch('/expiredDue.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setDuplicatesDue(jsonData);
            })
            .catch((error) => console.error('Erro ao carregar o arquivo JSON:', error));
    }

    // Filtra as duplicatas com base no mês selecionado
    const getFilteredRows = () => {
        if (selectedMonth === '00') {
            return duplicatesDue;
        }
        return duplicatesDue.filter(row => {
            const vencimentoDate = new Date(row.vencimento);
            return vencimentoDate.getMonth() + 1 === parseInt(selectedMonth); // Mês é 0-indexado
        });
    };

    // Calcular o número total de páginas
    const totalPages = Math.ceil(getFilteredRows().length / rowsPerPage);
    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    // Obter as linhas para a página atual
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = getFilteredRows().slice(startIndex, startIndex + rowsPerPage);

    const months = [
        { value: '00', label: 'Todos' },
        { value: '01', label: 'Janeiro' },
        { value: '02', label: 'Fevereiro' },
        { value: '03', label: 'Março' },
        { value: '04', label: 'Abril' },
        { value: '05', label: 'Maio' },
        { value: '06', label: 'Junho' },
        { value: '07', label: 'Julho' },
        { value: '08', label: 'Agosto' },
        { value: '09', label: 'Setembro' },
        { value: '10', label: 'Outubro' },
        { value: '11', label: 'Novembro' },
        { value: '12', label: 'Dezembro' }
    ];

    return (
        <div>
            <AppMenu />
            <div className="content">
                <h1 className='title-duplicate-due'>Duplicatas vencidas</h1>
                <span className='description-duplicate-due'>Vencidas</span>
                <div className="duplicatesDueHeader">
                    <SearchInput />
                    <TextField
                        id="outlined-select-month"
                        select
                        label="Mês"
                        value={selectedMonth} // Usando o estado para controlar o valor
                        onChange={(e) => {
                            setSelectedMonth(e.target.value);
                            setCurrentPage(1); // Resetar para a primeira página ao mudar o filtro
                        }}
                        style={{ width: '200px' }}
                    >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="tableDuplicateDue">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="center">Empresa</TableCell>
                                    <TableCell align="center">Contato</TableCell>
                                    <TableCell align="center">E-mail</TableCell>
                                    <TableCell align="center">Vencimento</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentRows.map((row) => (
                                    <TableRow
                                        key={row.nome}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="center">{row.empresa}</TableCell>
                                        <TableCell align="center">{row.contato}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.vencimento}</TableCell>
                                        <TableCell align="center">
                                            <span className='status-duplicate vencido'>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell align="center">
                                            <ActionButton text={'Registrar\npagamento'}>
                                                <PaymentsIcon />
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='duplicatePagination'>
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handleChangePage}
                            variant="outlined"
                            color="primary"
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
}
