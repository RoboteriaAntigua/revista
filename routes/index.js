var express = require('express');
var router = express.Router();
var zlib = require('zlib'); // Import zlib for gzip compression

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/index', (req, res) => {
    res.redirect('/');
})

router.get('/about', (req, res) => {
    res.render('about.ejs', { enconstruccion: '' });
})

router.get('/post', (req, res) => {
    res.render('post.ejs');
})

//Sitemap
router.get('/sitemap', (req, res) => {
    res.sendFile(__dirname + '/sitemap.txt');
})


/********************** Post interesantes ******************************************************************* */
router.get('/energia-centro-tierra', (req, res) => { res.render('articulos/energia-centro-tierra'); })
router.get('/dinamitaypaz', (req, res) => { res.render('articulos/dinamitaypaz'); })
router.get('/laplacedemonio', (req, res) => { res.render('articulos/ellibrodelosacontecimientos'); })
router.get('/pucaras', (req, res) => { res.render('articulos/pucara-ñandus'); })

/********************** Fin de Post interesantes ******************************************************************* */


/********************** Varios ******************************************************************* */
router.get('/buenas-practicas-js', (req, res) => {
    res.render('cursos/buenas-practicas-js');
})
/********************** Finde varios ******************************************************************* */

/******************************** curso de mysql **************************************/
router.get('/mysql-introduccion', (req, res) => { res.render('cursos/mysql/mysql-introduccion'); })
router.get('/mysql-instalacion', (req, res) => { res.render('cursos/mysql/mysql-instalacion'); })
router.get('/mysql-constructivas', (req, res) => { res.render('cursos/mysql/mysql-constructivas'); })
router.get('/mysql-seleccion', (req, res) => { res.render('cursos/mysql/mysql-seleccion'); })
router.get('/mysql-destructivas', (req, res) => { res.render('cursos/mysql/mysql-destructivas'); })
router.get('/mysql-dba', (req, res) => { res.render('cursos/mysql/mysql-dba'); })
router.get('/mysql-backup', (req, res) => { res.render('cursos/mysql/mysql-backups'); })
router.get('/mysql-views', (req, res) => { res.render('cursos/mysql/mysql-views'); })
router.get('/mysql-abm', (req, res) => { res.render('cursos/mysql/mysql-abm'); })
router.get('/mysql-relacion-1a1', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' }); })
router.get('/mysql-relacion-1aM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' }); })
router.get('/mysql-relacion-MaM', (req, res) => { res.render('about.ejs', { enconstruccion: 'Pagina en construccion' }); })

/*******************************fin de curso de mysql **************************************/

/******************************** curso de kubernetes **************************************/
router.get('/kubernetes-introduccion', (req, res) => { res.render('cursos/kubernetes/kub-introduccion.ejs'); });
router.get('/kubernetes-conceptos', (req, res) => { res.render('cursos/kubernetes/kub-conceptos.ejs'); });
router.get('/kubernetes-minikube', (req, res) => { res.render('cursos/kubernetes/kub-minikube.ejs'); });
router.get('/kubernetes-services', (req, res) => { res.render('cursos/kubernetes/kub-services.ejs'); });
router.get('/kubernetes-exponer-app-node', (req, res) => { res.render('cursos/kubernetes/kub-deploy-node.ejs'); });
router.get('/kubernetes-solucionar-problemas', (req, res) => { res.render('cursos/kubernetes/kub-solucionar.ejs'); });
router.get('/kubernetes-labels', (req, res) => { res.render('cursos/kubernetes/kub-alias.ejs'); });
router.get('/kubernetes-multiples-instancias', (req, res) => { res.render('cursos/kubernetes/kub-multiples-instancias.ejs'); });
router.get('/kubernetes-updates-no-down', (req, res) => { res.render('cursos/kubernetes/kub-updates.ejs'); });

/******************************** fin curso de kubernetes **************************************/

/**********************************Angular ****************************************************/
router.get('/inyeccion', (req, res) => { res.render('cursos/angular/inyeccion.ejs'); });
router.get('/servicios', (req, res) => { res.render('cursos/angular/servicios.ejs'); });
router.get('/observer-patron', (req, res) => { res.render('cursos/angular/observer-patron.ejs'); });
router.get('/observables-angular', (req, res) => { res.render('cursos/angular/obs-angular.ejs'); });
router.get('/HttpClient', (req, res) => { res.render('cursos/angular/http.ejs'); });
router.get('/guards', (req, res) => { res.render('cursos/angular/guards.ejs'); });
router.get('/login-angular', (req, res) => { res.render('cursos/angular/login-angular.ejs'); });
router.get('/interceptors', (req, res) => { res.render('cursos/angular/interceptors.ejs'); });
router.get('/flux', (req, res) => { res.render('cursos/angular/flux.ejs'); });
router.get('/flux-ejemplo', (req, res) => { res.render('cursos/angular/flux-ejemplo.ejs'); });

/******************************************* fin de angular avanzado */

/**********************************Networking ****************************************************/
router.get('/iptables', (req, res) => { res.render('cursos/networking/iptables.ejs'); });
router.get('/icmp', (req, res) => { res.render('cursos/networking/icmp.ejs'); });


/**********************************Fin Networking ****************************************************/
// Apply gzip compression to text-based responses
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

module.exports = router;


