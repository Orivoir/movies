import Home from './pages/Home/Home';
import Result from './pages/Movies/Results/Results';
import Favorites from './pages/Movies/Favorites/Favorites';
import ToSee from './pages/Movies/ToSee/ToSee';

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
    {
        id: 3
        ,exact: false
        ,path: '/see'
        ,name: 'see'
        ,component: ToSee
    } ,  
] ;

export default routes;