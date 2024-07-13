var express = require('express');
var router = express.Router();
var zlib = require('zlib'); // Import zlib for gzip compression

router.get('/', (req, res) => {
    res.render('index', { lazyload: 'ok', lang: "es"  });      //lazyload es para lazy load
})

router.get('/index', (req, res) => {
    res.redirect('/');
})

router.get('/about', (req, res) => {
    res.render('about.ejs', { enconstruccion: '', lazyload: 'ok', lang: "es"  });
})

router.get('/post', (req, res) => {
    res.render('post.ejs', { lazyload: 'ok', lang: "es"  });
})

//Sitemap
router.get('/sitemap', (req, res) => {
    res.sendFile(__dirname + '/sitemap.txt');
})

router.get('/contact', (req, res) => {
    res.render('contact', { lazyload: 'ok', lang: "es"  });      //currentPage es para lazy load
})

/********************** Post interesantes ******************************************************************* */
router.get('/energia-centro-tierra', (req, res) => { res.render('articulos/energia-centro-tierra', { lazyload: 'ok', lang: "es"  }); })
router.get('/dinamitaypaz', (req, res) => { res.render('articulos/dinamitaypaz',{ lazyload: 'ok', lang: "es" , lang: "es" }); })
router.get('/laplacedemonio', (req, res) => { res.render('articulos/ellibrodelosacontecimientos', { lazyload: 'ok', lang: "es"  }); })
router.get('/pucaras', (req, res) => { res.render('articulos/pucara-ñandus', { lazyload: 'ok', lang: "es"  }); })

/********************** Fin de Post interesantes ******************************************************************* */
/****** Prueba desba ******************** */
router.get('/desbaTest', (req,res) => { res.render('cursos/prueba-desba', {lazyload: 'ok' , lang: "es"}); } );

/********************** Varios ******************************************************************* */
router.get('/buenas-practicas-js', (req, res) => { res.render('cursos/buenas-practicas-js', { lazyload: 'ok', lang: "es"  }); } );

/********************** Finde varios ******************************************************************* */

/******************************** curso de mysql **************************************/
router.get('/mysql-introduccion', (req, res) => { res.render('cursos/mysql/mysql-introduccion',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-instalacion', (req, res) => { res.render('cursos/mysql/mysql-instalacion',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-constructivas', (req, res) => { res.render('cursos/mysql/mysql-constructivas',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-seleccion', (req, res) => { res.render('cursos/mysql/mysql-seleccion',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-destructivas', (req, res) => { res.render('cursos/mysql/mysql-destructivas',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-dba', (req, res) => { res.render('cursos/mysql/mysql-dba',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-backup', (req, res) => { res.render('cursos/mysql/mysql-backups',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-views', (req, res) => { res.render('cursos/mysql/mysql-views',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-abm', (req, res) => { res.render('cursos/mysql/mysql-abm',{ lazyload: 'ok', lang: "es"  }); })
router.get('/mysql-relacion-1a1', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok', lang: "es" }); })
router.get('/mysql-relacion-1aM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok', lang: "es" }); })
router.get('/mysql-relacion-MaM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok', lang: "es" }); })

/*******************************fin de curso de mysql **************************************/

/******************************** curso de kubernetes **************************************/
router.get('/kubernetes-introduccion', (req, res) => { res.render('cursos/kubernetes/kub-introduccion.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-conceptos', (req, res) => { res.render('cursos/kubernetes/kub-conceptos.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-minikube', (req, res) => { res.render('cursos/kubernetes/kub-minikube.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-services', (req, res) => { res.render('cursos/kubernetes/kub-services.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-exponer-app-node', (req, res) => { res.render('cursos/kubernetes/kub-deploy-node.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-solucionar-problemas', (req, res) => { res.render('cursos/kubernetes/kub-solucionar.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-labels', (req, res) => { res.render('cursos/kubernetes/kub-alias.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-multiples-instancias', (req, res) => { res.render('cursos/kubernetes/kub-multiples-instancias.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/kubernetes-updates-no-down', (req, res) => { res.render('cursos/kubernetes/kub-updates.ejs',{ lazyload: 'ok', lang: "es"  }); });

/* English kub */
router.get('/kubernetes-introduction', (req, res) => { res.render('cursos/kubernetes/en/kub-introduction.ejs',{ lazyload: 'ok', lang: "en"  }); });
router.get('/kubernetes-concepts', (req, res) => { res.render('cursos/kubernetes/en/kub-concepts.ejs',{ lazyload: 'ok', lang: "en"  }); });
router.get('/kubernetes-minikube-en', (req, res) => { res.render('cursos/kubernetes/en/kub-minikube-en.ejs',{ lazyload: 'ok', lang: "en"  }); });
router.get('/kubernetes-services-en', (req, res) => { res.render('cursos/kubernetes/en/kub-services-en.ejs',{ lazyload: 'ok', lang: "en"  }); });


/******************************** fin curso de kubernetes **************************************/

/**********************************Angular ****************************************************/
router.get('/inyeccion', (req, res) => { res.render('cursos/angular/inyeccion.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/servicios', (req, res) => { res.render('cursos/angular/servicios.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/observer-patron', (req, res) => { res.render('cursos/angular/observer-patron.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/observables-angular', (req, res) => { res.render('cursos/angular/obs-angular.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/HttpClient', (req, res) => { res.render('cursos/angular/http.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/guards', (req, res) => { res.render('cursos/angular/guards.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/login-angular', (req, res) => { res.render('cursos/angular/login-angular.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/interceptors', (req, res) => { res.render('cursos/angular/interceptors.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/flux', (req, res) => { res.render('cursos/angular/flux.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/flux-ejemplo', (req, res) => { res.render('cursos/angular/flux-ejemplo.ejs',{ lazyload: 'ok', lang: "es"  }); });

/******************************************* fin de angular avanzado */

/**********************************Networking ****************************************************/
router.get('/iptables', (req, res) => { res.render('cursos/networking/iptables.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/icmp', (req, res) => { res.render('cursos/networking/icmp.ejs',{ lazyload: 'ok', lang: "es"  }); });


/**********************************Fin Networking ****************************************************/


/**********************************Vue avanzado ****************************************************/
router.get('/redox-vue', (req, res) => { res.render('cursos/vue/es/redox-vue.ejs',{ lazyload: 'ok', lang: "es"  }); });
router.get('/redox-ejemplo-vue', (req, res) => { res.render('cursos/vue/es/redox-ejemplo-vue.ejs',{ lazyload: 'ok', lang: "es"  }); });

router.get('/en/redox-vue', (req, res) => { res.render('cursos/vue/en/redox.ejs',{ lazyload: 'ok', lang: "en"  }); });
router.get('/en/redox-example-vue', (req, res) => { res.render('cursos/vue/en/redox-example-vue.ejs',{ lazyload: 'ok', lang: "en"  }); });

/**********************************Fin de vue avanzado ****************************************************/





// Apply gzip compression to text-based responses
/*
router.use((req, res, next) => {
    // Check if the response is text-based
    const contentType = res.get('Content-Type');
    if (contentType && contentType.startsWith('text')) {
        const gzip = zlib.createGzip();
        res.set('Content-Encoding', 'gzip'); // Set Content-Encoding header to gzip
        res.removeHeader('Content-Length'); // Remove Content-Length header
        res.on('finish', () => {
            // Pipe response through gzip stream
            res.body = res.body.pipe(gzip);
        });
    }
    next();
});
*/
module.exports = router;


