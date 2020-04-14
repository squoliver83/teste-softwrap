import React from 'react';
import Button from '@material-ui/core/Button';
import {MenuItems, StyledLink} from './MenuStyles';

function Menu() {
    return (
        <MenuItems>
            <h2>Bem vindo(a)!</h2>
            <StyledLink to={'/registersTable'}>
                <Button variant='contained' color='primary'>
                    Ver registros
                </Button>
            </StyledLink>
        </MenuItems>
    )
}
export default Menu