import React from 'react'
import RegisterForm from '../Menu/RegisterForm'
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function AddForm() {

    const history = useHistory()

    const addRegister = (register) => {
        const saveRegister = firebase.functions().httpsCallable('saveRegister');
        saveRegister(register)
            .then(res => {
                console.log(res.data)
                history.push('/registersTable')
            })
    }

    return (
        <RegisterForm
            onSubmit={addRegister}
            rota={'/registersTable'}
        />
    )
}
export default AddForm