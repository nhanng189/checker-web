import App from '../App';
import TimelinePost from '../Component/TimelinePost';
import Login from '../Component/Login';
import Post from '../Component/Post';

const indexRoutes = [
    {path: '/post', component: Post},
    {path: '/login', component: Login},
    {path: '/', component: TimelinePost}
];

export default indexRoutes;