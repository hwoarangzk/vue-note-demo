<template>
	<div id="list">
		<p class="title">NOTES</p>
		<div class="categorys">
			<span class="all category" :class="{selected : isAllSelected}" @click="switch2All">All Notes</span><span class="stared category" :class="{selected: !isAllSelected}" @click="switch2Stared">Stared Notes</span>
		</div>
		<div class="list">
			
		</div>
	</div>
</template>

<script type="text/javascript">

	export default {
		name: 'list',
		methods: {
			switch2All () {
				this.isAllSelected = true;
			},
			switch2Stared () {
				this.isAllSelected = false;
			}
		},
		data() {
			return {
				isAllSelected: true
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
	}

</style>