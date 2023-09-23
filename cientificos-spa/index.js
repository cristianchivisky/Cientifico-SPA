import router from './src/routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

/**Cuando un usuario accede a la aplicación, el navegador carga el index.html.
El styles.css se aplica a la estructura HTML definida en index.html para darle estilo.
El JavaScript en index.js se ejecuta y establece escuchadores de eventos para 'load' y 'hashchange'.
Cuando el usuario cambia la URL o carga la página, se dispara el evento 'hashchange', lo que activa la función router en index.js.
La función router utiliza las utilidades getHash y getResolveRoutes para determinar la ruta actual.
Luego, busca en el objeto de rutas para encontrar el componente adecuado (por ejemplo, Home, Character o Error404) y actualiza la vista.
Si la URL no coincide con ninguna ruta definida, se muestra la página de error (Error404).
El componente Header se usa para generar el contenido del encabezado de la página.
getData.js se utiliza para obtener datos de personajes desde la API cuando sea necesario.
Los estilos definidos en styles.css se aplican a los elementos HTML para darle a la aplicación su aspecto visual.

En resumen, la aplicación utiliza JavaScript para habilitar el enrutamiento del lado del cliente y para cargar 
dinámicamente diferentes componentes de acuerdo con la URL actual. Las utilidades en utils proporcionan funcionalidad
esencial para gestionar rutas y obtener datos. Los estilos definidos en styles.css dan forma al aspecto visual de la
aplicación, y Webpack se encarga de empaquetar y optimizar los activos. */