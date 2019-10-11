import Home from './pages/Home/Home';
import Result from './pages/Movies/Results/Results';

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
    } 
] ;

export default routes;