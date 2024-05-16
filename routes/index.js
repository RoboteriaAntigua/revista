var express = require('express');
var router = express.Router();
var zlib = require('zlib'); // Import zlib for gzip compression

router.get('/', (req, res) => {
    res.render('index', { lazyload: 'ok' });      //lazyload es para lazy load
})

router.get('/index', (req, res) => {
    res.redirect('/');
})

router.get('/about', (req, res) => {
    res.render('about.ejs', { enconstruccion: '', lazyload: 'ok' });
})

router.get('/post', (req, res) => {
    res.render('post.ejs', { lazyload: 'ok' });
})

//Sitemap
router.get('/sitemap', (req, res) => {
    res.sendFile(__dirname + '/sitemap.txt');
})

router.get('/contact', (req, res) => {
    res.render('contact', { lazyload: 'ok' });      //currentPage es para lazy load
})

/********************** Post interesantes ******************************************************************* */
router.get('/energia-centro-tierra', (req, res) => { res.render('articulos/energia-centro-tierra', { lazyload: 'ok' }); })
router.get('/dinamitaypaz', (req, res) => { res.render('articulos/dinamitaypaz',{ lazyload: 'ok' }); })
router.get('/laplacedemonio', (req, res) => { res.render('articulos/ellibrodelosacontecimientos', { lazyload: 'ok' }); })
router.get('/pucaras', (req, res) => { res.render('articulos/pucara-ñandus', { lazyload: 'ok' }); })

/********************** Fin de Post interesantes ******************************************************************* */


/********************** Varios ******************************************************************* */
router.get('/buenas-practicas-js', (req, res) => {
    res.render('cursos/buenas-practicas-js',{ lazyload: 'ok' });
})
/********************** Finde varios ******************************************************************* */

/******************************** curso de mysql **************************************/
router.get('/mysql-introduccion', (req, res) => { res.render('cursos/mysql/mysql-introduccion',{ lazyload: 'ok' }); })
router.get('/mysql-instalacion', (req, res) => { res.render('cursos/mysql/mysql-instalacion',{ lazyload: 'ok' }); })
router.get('/mysql-constructivas', (req, res) => { res.render('cursos/mysql/mysql-constructivas',{ lazyload: 'ok' }); })
router.get('/mysql-seleccion', (req, res) => { res.render('cursos/mysql/mysql-seleccion',{ lazyload: 'ok' }); })
router.get('/mysql-destructivas', (req, res) => { res.render('cursos/mysql/mysql-destructivas',{ lazyload: 'ok' }); })
router.get('/mysql-dba', (req, res) => { res.render('cursos/mysql/mysql-dba',{ lazyload: 'ok' }); })
router.get('/mysql-backup', (req, res) => { res.render('cursos/mysql/mysql-backups',{ lazyload: 'ok' }); })
router.get('/mysql-views', (req, res) => { res.render('cursos/mysql/mysql-views',{ lazyload: 'ok' }); })
router.get('/mysql-abm', (req, res) => { res.render('cursos/mysql/mysql-abm',{ lazyload: 'ok' }); })
router.get('/mysql-relacion-1a1', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok'}); })
router.get('/mysql-relacion-1aM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok'}); })
router.get('/mysql-relacion-MaM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' ,lazyload: 'ok'}); })

/*******************************fin de curso de mysql **************************************/

/******************************** curso de kubernetes **************************************/
router.get('/kubernetes-introduccion', (req, res) => { res.render('cursos/kubernetes/kub-introduccion.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-conceptos', (req, res) => { res.render('cursos/kubernetes/kub-conceptos.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-minikube', (req, res) => { res.render('cursos/kubernetes/kub-minikube.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-services', (req, res) => { res.render('cursos/kubernetes/kub-services.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-exponer-app-node', (req, res) => { res.render('cursos/kubernetes/kub-deploy-node.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-solucionar-problemas', (req, res) => { res.render('cursos/kubernetes/kub-solucionar.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-labels', (req, res) => { res.render('cursos/kubernetes/kub-alias.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-multiples-instancias', (req, res) => { res.render('cursos/kubernetes/kub-multiples-instancias.ejs',{ lazyload: 'ok' }); });
router.get('/kubernetes-updates-no-down', (req, res) => { res.render('cursos/kubernetes/kub-updates.ejs',{ lazyload: 'ok' }); });

/******************************** fin curso de kubernetes **************************************/

/**********************************Angular ****************************************************/
router.get('/inyeccion', (req, res) => { res.render('cursos/angular/inyeccion.ejs',{ lazyload: 'ok' }); });
router.get('/servicios', (req, res) => { res.render('cursos/angular/servicios.ejs',{ lazyload: 'ok' }); });
router.get('/observer-patron', (req, res) => { res.render('cursos/angular/observer-patron.ejs',{ lazyload: 'ok' }); });
router.get('/observables-angular', (req, res) => { res.render('cursos/angular/obs-angular.ejs',{ lazyload: 'ok' }); });
router.get('/HttpClient', (req, res) => { res.render('cursos/angular/http.ejs',{ lazyload: 'ok' }); });
router.get('/guards', (req, res) => { res.render('cursos/angular/guards.ejs',{ lazyload: 'ok' }); });
router.get('/login-angular', (req, res) => { res.render('cursos/angular/login-angular.ejs',{ lazyload: 'ok' }); });
router.get('/interceptors', (req, res) => { res.render('cursos/angular/interceptors.ejs',{ lazyload: 'ok' }); });
router.get('/flux', (req, res) => { res.render('cursos/angular/flux.ejs',{ lazyload: 'ok' }); });
router.get('/flux-ejemplo', (req, res) => { res.render('cursos/angular/flux-ejemplo.ejs',{ lazyload: 'ok' }); });

/******************************************* fin de angular avanzado */

/**********************************Networking ****************************************************/
router.get('/iptables', (req, res) => { res.render('cursos/networking/iptables.ejs',{ lazyload: 'ok' }); });
router.get('/icmp', (req, res) => { res.render('cursos/networking/icmp.ejs',{ lazyload: 'ok' }); });


/**********************************Fin Networking ****************************************************/
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


