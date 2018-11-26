import Homepage from '../Component/Homepage/Homepage';
import Detail from '../Component/Detail';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import Post from '../Component/Post';

const indexRoutes = [
    {path: '/post/:id', component: Detail},
    {path: '/post', component: Post},
    {path: '/login', component: Login},
    {path: '/register', component: SignUp},
    {path: '/', component: Homepage}
];

export default indexRoutes;