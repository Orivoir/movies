import Home from './pages/Home/Home';
import Result from './pages/Movies/Results/Results';
import Favorites from './pages/Movies/Favorites/Favorites';

const routes = [
    {
        id: 0
        ,exact: true
        ,path: '/'
        ,name: 'home'
        ,component: Home
    }, 
    {
        id: 1
        ,exact: false
        ,path: '/results'
        ,name: 'results'
        ,component: Result
    } ,  
    {
        id: 2
        ,exact: false
        ,path: '/favorites'
        ,name: 'favorites'
        ,component: Favorites
    } ,  
] ;

export default routes;