import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const clearEditingState = function(notes) {
	notes.forEach((note, index) => {
		note.isEditing = false;
	});
}

export default new Vuex.Store({
	state: {
		notes: [],
		currentNote: null
	},
	mutations: {
		add(state) {
			clearEditingState(state.notes);
			let newNote = {
				text: 'This is a new note.',
				isStared: false,
				isEditing: true
			};
			state.currentNote = newNote;
			state.notes.push(newNote);
		},
		del(state) {

		},
		select(state, note) {
			clearEditingState(state.notes);
			note.isEditing = true;
			state.currentNote = note;
		}
	}
});