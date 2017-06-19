<template>
	<div id="list">
		<p class="title">NOTES</p>
		<div class="categorys">
			<span class="all category" :class="{selected : isAllSelected}" @click="switch2All">All Notes</span><span class="stared category" :class="{selected: !isAllSelected}" @click="switch2Stared">Stared Notes</span>
		</div>
		<div class="notes">
			<template v-for="(note, index) in notes">
				<template v-if="!isAllSelected">
					<p class="note" :class="{editing: note.isEditing}" @click="selectNote(note, index, $event)" v-if="note.isStared">
					<span>{{note.text}}</span>
				</p>	
				</template>
				<template v-else>
					<p class="note" :class="{editing: note.isEditing}" @click="selectNote(note, index, $event)">
					<span>{{note.text}}</span>
				</p>
				</template>
			</template>
			
		</div>
	</div>
</template>

<script type="text/javascript">

	export default {
		name: 'list',
		methods: {
			selectNote(note, index, event) {
				this.$store.commit('select', note);
			},
			switch2All() {
				this.isAllSelected = true;
			},
			switch2Stared() {
				this.isAllSelected = false;
			}
		},
		data() {
			return {
				isAllSelected: true,
				currentNote: this.$store.state.currentNote,
				notes: this.$store.state.notes
			};
		},
		computed: {
			staredNotes() {
				return this.$store.state.notes.filter(function(obj) {
					return obj.isStared === true;
				});
			},
			displayedNotes() {
				return this.isAllSelected ? this.notes : this.staredNotes;
			},
			currentNoteIndex() {

			}
		}
	}

</script>

<style type="text/css" lang="less">
	
	#list {
		height: 100%;
		width: 300px;
		background: #f5f5f5;
		float: left;
		text-align: center;
		padding-top: 30px;

		.title {
			font-size: 22px;
		}

		.categorys {

			height: 34px;
			margin-top: 10px;			

			.category {
				border: 1px solid #adadad;
				display: inline-block;
				vertical-align: middle;
				padding: 5px 5px;
				cursor: pointer;
				width: 125px;
				box-sizing: border-box;
				border-radius: 4px;

				&:hover {
					background: #e6e6e6;
				}

				&.selected {
					background: #d4d4d4;
				}

				&:first-child {
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				}

				&:last-child {
					border-top-left-radius: 0;
					border-bottom-left-radius: 0;
				}
			}
		}

		.notes {

			margin-top: 25px;

			.note {
				height: 40px;
				line-height: 40px;
				overflow: hidden;
				vertical-align: bottom;
				padding-left: 15px;
				padding-right: 15px;
				background: #fff;
				font-size: 14px;

				span {
					display: inline-block;
					white-space: nowrap;
					overflow: hidden;
					width: 270px;
					text-overflow: ellipsis;
				}

				&:hover {
					cursor: pointer;
					background: #f5f5f5;
				}

				&.editing {
					background: #337ab7;
					color: #fff;
				}
			}
		}
	}

</style>