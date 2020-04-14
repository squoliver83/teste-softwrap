import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItems = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-gap: 20px;
    text-align: center;
    margin-top: 35vh;
`

export const StyledLink = styled(Link)`
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-gap: 20px;
    width: 200px;
    margin: auto;
    text-align: center;
    text-decoration: none;
`