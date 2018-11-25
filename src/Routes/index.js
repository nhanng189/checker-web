import App from '../App';
import TimelinePost from '../Component/TimelinePost';
import Login from '../Component/Login';

const indexRoutes = [
    {path: '/login', component: Login},
    {path: '/', component: TimelinePost}
];

export default indexRoutes;