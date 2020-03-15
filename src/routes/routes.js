import LandingPage from "../pages/LandingPage.vue";
import BlogPage from "../pages/BlogPage.vue";

const routes = [
	{ path: "/home", component: LandingPage },
	{ path: "/blog", component: BlogPage },
	{ path: "*", component: LandingPage }
];

export default routes;
