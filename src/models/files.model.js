const { Schema, model } = require('mongoose');

const FilesSchema = new Schema({
    id_user: {
        type: String,
        required: true
    },
    nombre_archivo: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('T_Archivos', FilesSchema, 'T_Archivos');