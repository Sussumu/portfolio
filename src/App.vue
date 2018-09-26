<template>
  <div id="app">
    <section id="landing-section">
			<div id="title">GABRIEL KATO</div>
			<div @click="scrollToSection('intro')">
				<img class="snap-scroll" src="./assets/down-arrow.png" alt="Myself giving a talk about GraphQL">
			</div>
		</section>
		<section id="intro" ref="intro"></section>
		<section id="competencies"></section>
		<section id="photos"></section>
		<section id="contact-form"></section>
  </div>
</template>

<script>
export default {
	methods: {
		scrollToSection(section) {
			this.$refs[section].scrollIntoView({ behavior: "smooth" });
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

.snap-scroll {
	margin: 0 auto;
	position: absolute;
	bottom: 0;
	left: 50%;
}

#landing-section {
	background: url("./assets/landing-image.jpg") no-repeat center center fixed;
	background-size: cover;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#intro {
	background-color: #5aafd1;
	width: 100vw;
	height: 100vh;
}

#competencies {
	background-color: #625ad1;
	width: 100vw;
	height: 100vh;
}

#photos {
	background-color: #d15a96;
	width: 100vw;
	height: 100vh;
}

#contact-form {
	background-color: #d1cf5a;
	width: 100vw;
	height: 100vh;
}
</style>
