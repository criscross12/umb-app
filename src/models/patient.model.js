import { Schema, model, } from "mongoose";

 const PatientSchema  = new Schema(
  {
    nombre: {
        type: String,
        required : true,
    },
    ap_paterno: {
        type : String,
        required : true,
    },
    ap_materno:{
        type: String,
        required : true,
    },
    FechaNacimiento: {
        type: Date,
        required: true,
    },
    edad:{
        type: Number,
        required: true,
    },
    e_mail:{
        type: String,
        required: true,
    },
    ocupacion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    Motivo: {
        type: String,
        required: true,
    },
    estatus: {
        type: Boolean,
        required: true,
        default: true
    },
  },
  {
      timestamps: true,
  }

)

export default model("Patient",PatientSchema);
