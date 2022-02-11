import patient from "../models/patient.model";
import { GetAge } from "../helpers/Patient.helper";

export const renderPatientForm = (req, res) => {
  res.render("patients/index");
};

export const savePatient = async (req, res) => {
  const edad = GetAge(req.body.FN);
  const {
    name,
    AP,
    AM,
    FN,
    email,
    ocupacion,
    Phone,
    motivo,
  } = req.body;
  console.log(req.body);

  const newPatient = new patient({
    nombre:name,
    ap_paterno:AP,
    ap_materno:AM,
    FechaNacimiento:FN,
    edad:edad,
    e_mail:email,
    ocupacion,
    telefono:Phone,
    Motivo:motivo,
  });
  console.log(newPatient);
  await newPatient.save();
  req.flash("success_msg", "Note Added Successfully");
  res.redirect("index");
};

export const renderPatients = async(req,res)=>{
  const patients = await patient.find().lean();
  res.render("patients/patientsTable",{patients})
}