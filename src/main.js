import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes/routes.js";

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

Vue.use(VueRouter);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
