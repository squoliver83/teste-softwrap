import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export const StyledForm = styled.div`    
    width: 400px;
    margin: 100px auto;    
`

export const StyledFormFields = styled.form`    
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: .5fr;
    grid-gap: 15px;
    text-align: center;    
`

export const StyledTextInput = styled(TextField)`    
    min-width: 400px;    
    margin: 10px;
`

export const StyledButtonsDiv = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-gap: 20px;
    text-align: center;    
    margin: 30px auto;
`

export const StyledButtonLink = styled(Link)`
    text-decoration: none;
`