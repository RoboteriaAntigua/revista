var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.render('./index');
})

router.get('/index', (req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    res.render('about.ejs');
})

router.get('/post', (req,res)=>{
    res.render('post');
})

router.get('/contact', (req,res)=>{
    res.render('contact');
})

/********************** Post interesantes ******************************************************************* */
router.get('/energia-centro-tierra', (req,res)=>{   res.render('articulos/energia-centro-tierra');})
router.get('/dinamitaypaz', (req,res)=>{            res.render('articulos/dinamitaypaz');}) 
router.get('/laplacedemonio', (req,res)=>{          res.render('articulos/ellibrodelosacontecimientos');})

/********************** Fin de Post interesantes ******************************************************************* */


/********************** Varios ******************************************************************* */
router.get('/buenas-practicas-js', (req,res)=>{
    res.render('cursos/buenas-practicas-js');})
/********************** Finde varios ******************************************************************* */

/******************************** curso de mysql **************************************/
router.get('/mysql-introduccion', (req,res)=>{ res.render('cursos/mysql/mysql-introduccion');   })
router.get('/mysql-instalacion',  (req,res)=>{ res.render('cursos/mysql/mysql-instalacion');    })
router.get('/mysql-constructivas',(req,res)=>{ res.render('cursos/mysql/mysql-constructivas');  })
router.get('/mysql-seleccion',    (req,res)=>{ res.render('cursos/mysql/mysql-seleccion');      })
router.get('/mysql-destructivas', (req,res)=>{ res.render('cursos/mysql/mysql-destructivas');   })
router.get('/mysql-dba',          (req,res)=>{ res.render('cursos/mysql/mysql-dba');            })
router.get('/mysql-relacion-1a1', (req,res)=>{ res.render('cursos/mysql/mysql-relacion-1a1');   })
router.get('/mysql-relacion-1aM', (req,res)=>{ res.render('cursos/mysql/mysql-relacion-1aM');   })
router.get('/mysql-relacion-MaM', (req,res)=>{ res.render('cursos/mysql/mysql-relacion-MaM');   })

/*******************************fin de curso de mysql **************************************/

module.exports = router;


