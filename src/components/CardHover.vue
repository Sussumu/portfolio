<template>
	<div class="card" @mouseover="showCardMessage = true" @mouseout="showCardMessage = false">
		<div class="card-front" v-if="!showCardMessage">
			<img :src="imgSrc" />
		</div>
		<div class="card-front" v-else>
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
	data () {
		return {
			showCardMessage: false
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	width: 150px;
	height: 250px;
}

.card .card-front {
	width: 100%;
	height: 100%;
}
</style>

