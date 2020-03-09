import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from "../views/Index";
import About from "../views/About";
import Exterior from "../views/Exterior";
import Interior from "../views/Interior";
import Inspiration from "../views/Inspiration";

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Index },
	{ path: '/interior-products', component: Interior },
	{ path: '/exterior-products', component: Exterior },
	{ path: '/inspiration', component: Inspiration },
	{ path: '/about-us', component: About },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router
