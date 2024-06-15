import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact':"Contact"
};

const router = async () => {
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');
    const footer = null ||  document.getElementById('footer');

    header.innerHTML= await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();


    footer.innerHTML = await Footer();
};

export default router;
/** la función router se encarga de actualizar dinámicamente el contenido de tu aplicación en función de la
 ruta actual en la URL. Primero, actualiza el encabezado de la página utilizando la función Header(),
 luego resuelve la ruta actual, determina qué componente o función debe mostrarse y finalmente actualiza el 
 contenido principal de la página. Esto permite que tu aplicación cambie de vista de manera suave y dinámica 
 sin necesidad de recargar la página completa. */