const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    topTitulo: {
        type: String
    },
    topSubTitulo: {
        type: String
    },
    topTxtBtn: {
        type: String
    },
    topLnkBtn: {
        type: String
    },

    ptfTitulo: {
        type: String
    },
    ptfSubTitulo: {
        type: String
    },
    ptfIcnServUm: {
        type: String
    },
    ptfServUmTitulo: {
        type: String
    },
    ptfServUmSubTitulo: {
        type: String
    },
    ptfIcnServDois: {
        type: String
    },
    ptfServDoisTitulo: {
        type: String
    },
    ptfServDoisSubTitulo: {
        type: String
    },
    ptfIcnServTres: {
        type: String
    },
    ptfServTresTitulo: {
        type: String
    },
    ptfServTresSubTitulo: {
        type: String
    },
}, {
    timestamps: true,
});

mongoose.model('Home', home);