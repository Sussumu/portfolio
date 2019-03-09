<template>
  <div id="app">
    <section id="landing-section" class="fill-screen">
		<div id="my-photo">
			<img src="./assets/myself.jpg" alt="a photo showing my face" />
		</div>
		<div id="title">GABRIEL KATO</div>		
		<div @click="scrollToSection('contact-form')">
			<img class="snap-scroll" src="./assets/down-arrow.png" />
		</div>	
	</section>		
	<section id="contact-form" class="fill-screen" ref="contact-form"></section>
  </div>
</template>

<script>
export default {
	methods: {
		scrollToSection(section) {
			this.$refs[section].scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import "./styles/main.scss";

#app {
	width: 100%;
	height: 100%;
}

.grid {
	display: grid;
}

#title {
	font-family: $default-fonts;
	font-size: 60px;
	color: white;
}

#landing-section #my-photo img {
	max-width: 30vw;
	max-height: 30vh;
	border-radius: 140px;
	display: block;
	margin: auto;
}

#landing-section {
	background: url("./assets/landing-image.jpg") no-repeat center center fixed;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}

#landing-section {
	display: flex;
	justify-content: space-around;
	// fl	ex-wrap: wrap;
}

#landing-section div {
	margin: auto;
	padding: 40px;
	width: 50%;
}

.snap-scroll {
	margin: 0 auto;
	position: absolute;
	bottom: 0;
	left: 50%;
}

#intro #my-photo img {
	max-width: 30vw;
	max-height: 30vh;
	border-radius: 140px;
	display: block;
	margin: auto;
}

#contact-form {
	background-color: #d1cf5a;
}
</style>
