<template>
	<div id="editor">
		<textarea :disabled="!isEditing" v-model="text" @input="onInput"></textarea>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'editor',
		//if put isEditing in data
		//the textarea won't get changed
		// data() {
		// 	return {
		// 		isEditing: this.$store.state.currentNote ? true : false
		// 	};
		// }
		//if put isEditing in computed
		//the textarea changes when currentNote got changed
		//why?
		methods: {
			onInput(event) {
				let val = event.target.value;
				this.$store.commit('input', val);
			}
		},
		computed: {
			isEditing() {
				return this.$store.state.currentNote ? true : false;
			},
			text() {
				var note = this.$store.state.currentNote || {},
					text = note.text || '';
				return text;
			}
		}
	}
</script>

<style type="text/css" lang="less">
	
	#editor {
		height: 100%;
		margin-left: 380px;

		textarea {
			height: 100%;
			width: 100%;
			border: none;
			font-size: 18px;
			padding: 10px;
		}

	}

</style>