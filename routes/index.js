var express = require('express');
var router = express.Router();
var fs = require('fs');             //para el sitemap


router.get('/', (req,res)=>{
    res.render('./index');
})

router.get('/index', (req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    res.render('about.ejs',{enconstruccion:''});
})

router.get('/post', (req,res)=>{
    res.render('post');
})

router.get('/contact', (req,res)=>{
    res.render('contact');
})

//Sitemap
router.get('/sitemap', (req,res)=>{   
        res.sendFile(__dirname + '/sitemap.txt'); 
})


/********************** Post interesantes ******************************************************************* */
router.get('/energia-centro-tierra', (req,res)=>{   res.render('articulos/energia-centro-tierra');})
router.get('/dinamitaypaz', (req,res)=>{            res.render('articulos/dinamitaypaz');}) 
router.get('/laplacedemonio', (req,res)=>{          res.render('articulos/ellibrodelosacontecimientos');})
router.get('/pucaras', (req,res)=>{            res.render('articulos/pucara-ñandus');}) 

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
router.get('/mysql-destructivas', (req,res)=>{ res.render('about.ejs',{enconstruccion:'Pagina en construccion'} );  })
router.get('/mysql-dba',          (req,res)=>{ res.render('about.ejs',{enconstruccion:'Pagina en construccion'} );  })
router.get('/mysql-relacion-1a1', (req,res)=>{ res.render('about.ejs',{enconstruccion:'Pagina en construccion'} );  })
router.get('/mysql-relacion-1aM', (req,res)=>{ res.render('about.ejs',{enconstruccion:'Pagina en construccion'} );  })
router.get('/mysql-relacion-MaM', (req,res)=>{ res.render('about.ejs',{enconstruccion:'Pagina en construccion'} );  })

/*******************************fin de curso de mysql **************************************/

/******************************** curso de kubernetes **************************************/
router.get('/kubernetes-introduccion'           , (req,res)=>{res.render('cursos/kubernetes/kub-introduccion.ejs' ); });
router.get('/kubernetes-conceptos'              , (req,res)=>{res.render('cursos/kubernetes/kub-conceptos.ejs' ); });
router.get('/kubernetes-minikube'               , (req,res)=>{res.render('cursos/kubernetes/kub-minikube.ejs' ); });
router.get('/kubernetes-services'               , (req,res)=>{res.render('cursos/kubernetes/kub-services.ejs' ); });
router.get('/kubernetes-exponer-app-node'       , (req,res)=>{res.render('cursos/kubernetes/kub-deploy-node.ejs'); });
router.get('/kubernetes-solucionar-problemas'   , (req,res)=>{res.render('cursos/kubernetes/kub-solucionar.ejs' ); });
router.get('/kubernetes-multiples-instancias'   , (req,res)=>{res.render('about.ejs',{enconstruccion:'Pagina en construccion'} ); });
router.get('/kubernetes-updates-no-down'        , (req,res)=>{res.render('about.ejs',{enconstruccion:'Pagina en construccion'} ); });
router.get('/kubernetes-deployment-pods'        , (req,res)=>{res.render('about.ejs',{enconstruccion:'Pagina en construccion'} ); });
/******************************** fin curso de kubernetes **************************************/


module.exports = router;


