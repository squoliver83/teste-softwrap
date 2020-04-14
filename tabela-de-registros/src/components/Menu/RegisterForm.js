import React, { useState } from 'react'
import SelectEstados from './SelectEstados';
import SelectEstadoCivil from './SelectEstadoCivil';
import Button from '@material-ui/core/Button';
import { StyledForm, StyledFormFields, StyledTextInput, StyledButtonsDiv, StyledButtonLink } from './RegisterFormStyles';

function RegisterForm(props) {

    const [register, setRegister] = useState(props.register || {
        nome: '',
        idade: '',
        estadoCivil: '',
        cpf: '',
        cidade: '',
        estado: ''
    })

    const onChangeField = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit(register)
    }

    return (
        <StyledForm>
            <h3>Preencha os dados no formulário abaixo:</h3>
            <h6>(* campo obrigatório)</h6>
            <StyledFormFields onSubmit={handleSubmit}>
                <StyledTextInput
                    name='nome'
                    label='Nome'
                    required
                    placeholder="Digite o nome"
                    value={register.nome}
                    onChange={onChangeField}
                />
                <StyledTextInput                    
                    name='idade'
                    label='Idade'
                    required
                    type='number'
                    placeholder="Digite a idade"
                    value={register.idade}
                    onChange={onChangeField}
                />

                <SelectEstadoCivil
                    estadoCivil={register.estadoCivil}
                    setEstadoCivil={onChangeField}
                />

                <StyledTextInput                    
                    name='cpf'
                    label='CPF'
                    required
                    inputProps={{ maxLength: '11' }}
                    placeholder="Digite o CPF (somente números)"
                    value={register.cpf}
                    onChange={onChangeField}
                />

                <StyledTextInput                    
                    name='cidade'
                    label='Cidade'
                    required
                    placeholder="Digite o nome da cidade"
                    value={register.cidade}
                    onChange={onChangeField}
                />

                <SelectEstados
                    estado={register.estado}
                    setEstado={onChangeField}
                />

                <StyledButtonsDiv>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'>
                        Salvar
                    </Button>
                    <StyledButtonLink to={`${props.rota}`}>
                        <Button
                            variant='contained'
                            color='primary'
                        >
                            Cancelar
                        </Button>
                    </StyledButtonLink>
                </StyledButtonsDiv>
            </StyledFormFields>
        </StyledForm>
    )
}

export default RegisterForm