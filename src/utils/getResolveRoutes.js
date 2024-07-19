// Function to resolve routes based on the current path
const resolveRoutes = (route) => {
    // Check if the route length is 3 or less
    if (route.length <= 3) {
        // If the route is '/', return it directly; otherwise, return '/:id' for dynamic routes
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;

    }
    // For longer routes, return them as is, prefixed with '/'
    return `/${route}`;
};

export default resolveRoutes;