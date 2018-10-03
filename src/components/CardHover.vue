<template>
	<div class="card-container">
		<div class="card-hover">
			<div class="card-front">
				<img :src="imgSrc" />
			</div>
			<div class="card-back">
				<img :src="imgSrc" />
				<span>{{message}}</span>
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
			showCardMessage: false
		};
	}
};
</script>

<style lang="scss" scoped>
.card-container {
	perspective: 1000px;
}

.card-container:hover {
	transform: rotateY(180deg);
}

.card-container,
.card-front,
.card-back {
	width: 200px;
	height: 200px;
}

.card-hover {
	transition: 0.5s;
	transform-style: preserve-3d;
	position: relative;
}

.card-front,
.card-back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.card-front {
	z-index: 2;
}

.card-back {
	transform: rotateY(180deg);
}

// .card-hover img {
// 	max-height: 100%;
// 	max-width: 100%;
// }
</style>
