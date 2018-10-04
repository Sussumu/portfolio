<template>
	<div class="card-container">
		<div class="card-hover" @mouseover="darken = true" @mouseout="darken = false">
			<div class="transition-container">
				<transition name="darken">
					<div class="dark-layer" v-show="darken"></div>
				</transition>
				<img :src="imgSrc" />
			</div>
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
			darken: false
		};
	}
};
</script>

<style lang="scss" scoped>
.card-container,
.card-hover {
	width: 200px;
	height: 200px;
}

.card-hover,
.transition-container {
	width: 100%;
	height: 100%;
}

.transition-container img,
.dark-layer {
	position: absolute;
	width: 200px;
	height: 200px;
}

.dark-layer {
	z-index: 10;
	background-color: black;
	opacity: 0.5;
}

.darken-enter-active,
.darken-leave-active {
	transition: opacity 0.5s;
}

.darken-enter,
.darken-leave-to {
	opacity: 0;
}
</style>
