import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
		async fetchCurrency() {
			const res = await fetch('https://api.openrates.io/latest');
			return await res.json();
		}
	},
	modules: {
	}
})
