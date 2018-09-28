<template>
	<div class="card" @mouseover="showCardMessage = true" @mouseout="showCardMessage = false">
		<div class="card-front" v-if="!showCardMessage">
			<img :src="imgSrc" />
		</div>
		<div class="card-back" v-else>
			<img :src="imgSrc" />
			<span>{{message}}</span>
		</div>
	</div>	
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String,
			default: ""
		},
		message: {
			type: String,
			default: "default message :("
		}
	},
	data() {
		return {
			showCardMessage: false
		};
	}
};
</script>

<style lang="scss" scoped>
.card {
	max-width: 150px;
	max-height: 250px;
}

.card .card-front,
.card .card-back {
	width: 100%;
	height: 100%;
}
</style>
