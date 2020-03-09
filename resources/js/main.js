import Vue from 'vue';
import router from './router';

// window.eventBus = new Vue();

import App from "./App";

const Main = new Vue({
	el: '#app',
	router,
	components: {
		App
	}
});