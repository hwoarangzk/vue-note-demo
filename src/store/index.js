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
		input(state, val) {
			state.currentNote.text = val;
		},
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
			let note = state.currentNote,
				notes = state.notes,
				index = 0;
			if (note) {
				for (let i = 0, len = notes.length; i < len; i++) {
					if (notes[i] == note) {
						index = i;
						break;
					}
				}
				notes.splice(index, 1);
				note = state.currentNote = null;
			}
		},
		select(state, note) {
			clearEditingState(state.notes);
			note.isEditing = true;
			state.currentNote = note;
		},
		toggle(state) {
			let note = state.currentNote;
			if (note) {
				note.isStared = !note.isStared;
			}
		}
	}
});