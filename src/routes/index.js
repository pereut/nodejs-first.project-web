import {Router} from 'express'

const router = Router()

router.get('/',(req,res) =>res.render('index',{title:'First Web with Node'}));

router.get('/about',(req,res) =>res.render('about',{title:'About me'}));

router.get('/contact',(req,res) =>res.render('contact',{title:'Contac me'}));

export default router;