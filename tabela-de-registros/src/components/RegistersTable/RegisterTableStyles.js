import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const StyledPaper = styled(Paper)`
    margin: 30px auto;
    width: 80%;
`
export const StyledTableContainer = styled(TableContainer)`
    max-height: 600px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const StyledButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin: 0 auto;
`

export const StyledButton = styled(Button)`
    width: 100px;
`