<template>
	<div class="pagination">
		<div class="pagination__button-group">
			<button @click="decrementPageNumber">Previous</button>
			<span>{{currentPageNr}}</span>
			<button @click="incrementPageNumber">Next</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		currentPageNr: {
			type: Number,
			default: 0
		}
	},
	methods: {
		incrementPageNumber() {
			this.$parent.$emit('incrementPageNumber')
		},
		decrementPageNumber() {
			this.$parent.$emit('decrementPageNumber')
		}
	}
}
</script>
