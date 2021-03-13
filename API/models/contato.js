const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contato = new Schema({
    txtNome: {
        type: String
    },
    txtEmail: {
        type: String
    },
    txtTel: {
        type: String
    },
    txtProj: {
        type: String
    }
}, {
    timestamps: true,
});

mongoose.model('Contato', contato);