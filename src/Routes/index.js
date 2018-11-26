import Homepage from '../Component/Homepage/Homepage';
import Detail from '../Component/Detail';

const indexRoutes = [
    {path: '/post/:id', component: Detail},
    {path: '/', component: Homepage}
];

export default indexRoutes;