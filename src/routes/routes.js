import LandingPage from '../pages/LandingPage.vue';
import Blog from '../pages/Blog.vue';

const routes = [
    { path: '/home', component: LandingPage },
    { path: '/blog', component: Blog },
    { path: '*', component: LandingPage }
];

export default routes;