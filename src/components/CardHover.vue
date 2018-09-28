<template>
	<div class="card-hover" @mouseover="showCardMessage = true" @mouseout="showCardMessage = false">
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
.card-front, .card-back {
	max-width: 300px;
}

.card-hover img {
	max-height: 100%;
  max-width: 100%;
}
</style>
