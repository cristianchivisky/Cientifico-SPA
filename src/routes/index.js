import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

// Define application routes
const routes = {
    '/': Home,              // Home page route
    '/:id': Character,      // Dynamic character page route
    '/contact': "Contact"   // Contact page route (placeholder)

};

// Router function to update the app based on the current URL
const router = async () => {
    // Get DOM elements for header, content, and footer
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');
    const footer = null ||  document.getElementById('footer');

    // Update the header with dynamic content
    header.innerHTML= await Header();

    let hash = getHash(); // Get the current hash from the URL
    let route = await resolveRoutes(hash); // Resolve the current route based on the hash
    let render = routes[route] ? routes[route] : Error404; // Determine the component to render based on the resolved route
    content.innerHTML = await render(); // Update the main content area with the selected component

    // Update the footer with dynamic content
    footer.innerHTML = await Footer();
};

export default router;

/** 
 * La función router se encarga de actualizar dinámicamente el contenido de tu aplicación 
 * en función de la ruta actual en la URL. Primero, actualiza el encabezado de la página 
 * utilizando la función Header(), luego resuelve la ruta actual, determina qué componente 
 * o función debe mostrarse y finalmente actualiza el contenido principal de la página. 
 * Esto permite que tu aplicación cambie de vista de manera suave y dinámica sin necesidad 
 * de recargar la página completa.
 */