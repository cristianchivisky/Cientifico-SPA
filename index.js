import router from './src/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


window.addEventListener('load', router);
window.addEventListener('hashchange', router);

/**
 * When a user accesses the application, the browser loads the index.html file.
 * The Bootstrap CSS is applied to the HTML structure for styling.
 * JavaScript in index.js sets up event listeners for 'load' and 'hashchange'.
 * When the user changes the URL or reloads the page, the 'hashchange' event triggers the router function.
 * The router function uses utilities like getHash and resolveRoutes to determine the current route.
 * It looks up the route in the routes object to find the appropriate component (e.g., Home, Character, or Error404) and updates the view.
 * If the URL doesn't match any defined routes, the error page (Error404) is displayed.
 * The Header component is used to generate the page header content.
 * getData.js fetches character data from the API when needed.
 * Bootstrap styles are applied to the HTML elements for the application's visual appearance.
 *
 * In summary, the application uses JavaScript for client-side routing and dynamically loads components based on the current URL. 
 * Utilities in utils manage routes and fetch data. Bootstrap provides the application's visual styling.
 */