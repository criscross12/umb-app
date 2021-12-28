const { Schema, model } = require("mongoose");
const PatientSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    ap_paterno: {
      type: String,
      requeried: false,
    },
    ap_materno: {
      type: String,
      required: true,
    },
    matricula: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      requeried: true,
    },
    semestre: {
      type: String,
      requiered: true,
    },
    carrera: {
      type: String,
      requiered: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Patient", PatientSchema);
