import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`    
    min-width: 100%;
`

function SelectEstadoCivil(props) {    

    return (
        <StyledFormControl>
            <InputLabel>Estado Civil *</InputLabel>
            <Select
                native
                required
                name='estadoCivil'
                value={props.estadoCivil}
                onChange={props.setEstadoCivil}
                align='left'
            >
                <option disabled hidden></option>
                <option value={'Solteiro(a)'}>Solteiro(a)</option>
                <option value={'Casado(a)'}>Casado(a)</option>
                <option value={'Divorciado(a)'}>Divorciado(a)</option>
                <option value={'Viúvo(a)'}>Viúvo(a)</option>
                <option value={'Outro'}>Outro(s)</option>
            </Select>
        </StyledFormControl>
    )
}

export default SelectEstadoCivil
