import VueRouter from 'vue-router';
import App from '../views/App.vue';
import Navigation from '../views/Navigation.vue';
import About from '../views/About.vue';

const routes = [
	{
		path: '/',
		components: {
			default: App,
			nav: Navigation
		}
	},
	{
		path: '/about',
		components: {
			default: About,
			nav: Navigation
		}
	}
];

export default new VueRouter({
	routes,
	linkActiveClass: 'is-active',
	mode: 'history'
});
