<template>
	<div id="actions">
		<div id="add" class="action" @click="add"><span class="add"></span></div>
		<div id="star" class="action" @click="toggle"><span :class="[isStared ? 'star-highlight' : 'star']"></span></div>
		<div id="del" class="action" @click="del"><span class="del"></span></div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name: 'actions',
		methods: {
			add() {
				this.$store.commit('add');
			},
			toggle() {
				this.$store.commit('toggle');
			},
			del() {
				this.$store.commit('del');
			}
		},
		computed: {
			isStared() {
				var result = false,
					currentNote = this.$store.state.currentNote;
				if (currentNote && currentNote.isStared) {
					result = true;
				}
				return result;
			}
		}
	}

</script>

<style type="text/css" lang="less">
	
	#actions {
		height: 100%;
		width: 80px;
		background: #30414d;
		text-align: center;
		float: left;
		padding-top: 40px;

		.action {
			cursor: pointer;
			margin-bottom: 35px;

			span {
				display: inline-block;
				width: 48px;
				height: 48px;
			}
		}
	}

	.add {
		// width: 29px;
		// height: 29px;
		background: url('../assets/add.png') no-repeat;
	}

	.star {
		// width: 29px;
		// height: 29px;
		background: url('../assets/star.png') no-repeat;
	}

	.star-highlight {
		// width: 29px;
		// height: 29px;
		background: url('../assets/star-highlight.png') no-repeat;
	}

	.del {
		// width: 29px;
		// height: 29px;
		background: url('../assets/del.png') no-repeat;
	}

</style>