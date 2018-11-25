import App from '../App';
import TimelinePost from '../Component/TimelinePost';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';

const indexRoutes = [
    {path: '/login', component: Login},
    {path: '/register', component: SignUp},
    {path: '/', component: TimelinePost}
];

export default indexRoutes;