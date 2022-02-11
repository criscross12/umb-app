import { Router } from "express";
import { renderPatientForm,savePatient } from "../controllers/patient.controller";

const router = Router();
 
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/about',renderPatientForm);

router.post("/patients/save", savePatient);


export default router;