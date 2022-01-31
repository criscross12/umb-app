import { Router } from "express";
import { savePatient } from "../controllers/patient.controller";

const router = Router();
 
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/about',(req,res)=>{
    res.send("Section about");
});

export default router;