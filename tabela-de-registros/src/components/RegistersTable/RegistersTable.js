import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { StyledPaper, StyledTableContainer, StyledLink, StyledButtonsDiv, StyledButton } from './RegisterTableStyles';
import { columns } from './Columns';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { useHistory } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

function RegistersTable() {

    const history = useHistory();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([])

    useEffect(() => {
        return firebase.firestore().collection('registros').orderBy('nome', 'asc')
            .onSnapshot((snapshot) => {
                const newRows = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                setRows(newRows)
            })
    }, [])    

    const deleteRegister = (registerId) => {
        if (window.confirm('Deseja mesmo excluir esse registro?')) {
            const deleteRegister = firebase.functions().httpsCallable('deleteRegister');
            deleteRegister(registerId)
                .then(res => {
                    console.log(res.data)
                })
            history.push('/registersTable')
        }
    }

    const editRegister = (registerId) => {
        history.push(`/editRegister/${registerId}`)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <h3>Tabela de Registros</h3>
            <StyledPaper>
                <StyledTableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell
                                    key={'acao'}
                                    align='center'
                                >
                                    Opções
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.cpf}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell key={'acao'} align='center'>
                                            <Tooltip title='Editar' placement='left' arrow>
                                                <EditRoundedIcon
                                                    color='primary'
                                                    onClick={() => editRegister(row.id)}
                                                    cursor='pointer'
                                                />
                                            </Tooltip>
                                            <Tooltip title='Excluir' placement='right' arrow>
                                                <DeleteForeverRoundedIcon
                                                    color='secondary'
                                                    onClick={() => deleteRegister(row.id)}
                                                    cursor='pointer'
                                                />
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </StyledPaper>

            <StyledButtonsDiv>
                <StyledLink to={'/addRegister'}>
                    <StyledButton variant='contained' color='primary'>
                        Adicionar
                    </StyledButton>
                </StyledLink>
                <StyledLink to={'/'}>
                    <StyledButton variant='contained' color='primary'>
                        Voltar
                    </StyledButton>
                </StyledLink>
            </StyledButtonsDiv>
        </div>
    );
}

export default RegistersTable;