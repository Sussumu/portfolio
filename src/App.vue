<template>
	<div id="app">
		<section id="landing-section" class="fill-screen">
			<div id="my-photo">
				<img src="./assets/myself.jpg" alt="a photo showing my face" />
			</div>
			<div id="title">GABRIEL KATO</div>
			<div id="social-profiles">
				<social-profiles />
			</div>
			<div id="snap-scroll-wrapper" @click="scrollToSection('contact-form')">
				<img class="snap-scroll" src="./assets/down-arrow.png" />
			</div>
		</section>
	</div>
</template>

<script>
import SocialProfiles from "./components/SocialProfiles.vue";

export default {
	components: {
		"social-profiles": SocialProfiles
	},
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

#landing-section {
	background: url("./assets/landing-image.jpg") no-repeat center center fixed;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

#landing-section div {
	margin: 10px auto;
	width: 100%;
}

#landing-section #my-photo img {
	max-width: 20vw;
	max-height: 20vh;
	border-radius: 140px;
	display: block;
	margin: auto;
}

#landing-section #title {
	text-align: center;
	font-size: 46px;
}

#landing-section #social-profiles {
	text-align: center;
}

#landing-section #snap-scroll-wrapper {
	position: absolute;
	width: 50px;
	height: 50px;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0 auto;
	cursor: pointer;
}
</style>
