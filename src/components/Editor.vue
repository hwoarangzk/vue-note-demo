<template>
	<div id="editor">
		<textarea :disabled="isEditing"></textarea>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'editor',
		data() {
			return {
				isEditing: this.$store.state.currentNote ? false : true
			};
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