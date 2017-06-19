import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		notes: [{
			text: 'stared. this is a test. this is a test. this is a test. this is a test',
			isStared: true
		}, {
			text: 'this is a test. this is a test. this is a test. this is a test',
			isStared: false
		}],
		currentNote: null
	}
});