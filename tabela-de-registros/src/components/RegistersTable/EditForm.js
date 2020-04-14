import React, { useState, useEffect } from 'react'
import RegisterForm from '../Menu/RegisterForm'
import { useParams, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

function EditForm() {

    const history = useHistory()
    const {id} = useParams()
    const [register, setRegister] = useState(undefined)    

    useEffect(()=> {
        firebase.firestore().collection('registros').doc(`/${id}`).get()
        .then((doc)=>{
            const data = {
                nome: doc.data().nome,
                idade: doc.data().idade,
                estadoCivil: doc.data().estadoCivil,
                cpf: doc.data().cpf,
                cidade: doc.data().cidade,
                estado: doc.data().estado
            }
            setRegister(data)
        })
        .catch(e => {
            console.log('error:', e)
        })
    }, [id])

    const editRegister = (registerToUpdate) => {
        const updateRegister = firebase.functions().httpsCallable('updateRegister');
        updateRegister({register: registerToUpdate, id})
            .then(res => {
                console.log(res.data)
                history.push('/registersTable')
            })
    }

    return (
        register ? 
            <RegisterForm 
                onSubmit={editRegister} 
                register={register} 
                rota={'/registersTable'}
            />
            :
            <div>Carregando…</div>
    )
}

export default EditForm