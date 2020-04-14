const functions = require('firebase-functions');
const firebase = require('firebase-admin');
firebase.initializeApp();

exports.saveRegister = functions.https.onCall(async (data) => {    
    try {
        await firebase.firestore().collection('registros').add(data)
        return "Registro criado com sucesso."
    }
    catch(e) {
        return ({mensagem: "Erro ao criar registro:", erro: e})
    }
})

exports.updateRegister = functions.https.onCall(async (data) => {
    try {
        await firebase.firestore().collection('registros').doc(`${data.id}`)
            .set(data.register)
        return "Registro atualizado com sucesso."
    }
    catch(e) {
        return ({mensagem: "Erro ao atualizar registro:", erro: e})
    }
})

exports.deleteRegister = functions.https.onCall(async (data) => {
    try {
        await firebase.firestore().collection('registros').doc(`${data}`)
            .delete()
        return "Registro excluído com sucesso."
    }
    catch(e) {
        return ({mensagem: "Erro ao excluir registro:", erro: e})
    }
})