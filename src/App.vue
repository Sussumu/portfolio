<template>
  <div id="app">
    <section id="landing-section" class="fill-screen">
			<div id="title">GABRIEL KATO</div>
			<div @click="scrollToSection('intro')">
				<img class="snap-scroll" src="./assets/down-arrow.png" alt="myself giving a talk about GraphQL" />
			</div>
		</section>
		<section id="intro" class="fill-half-screen" ref="intro">
			<div id="my-photo">
				<img src="./assets/myself.jpg" alt="a photo showing my face" />
			</div>
			<div id="about-me">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales, neque nec vulputate posuere, velit sem sagittis sapien, sit amet pellentesque elit metus nec elit. Donec vel dolor mauris. Curabitur interdum, neque ac pellentesque convallis, sapien tellus mollis erat, et consectetur velit justo nec ante. Mauris maximus euismod lorem, sed egestas urna ullamcorper in. Etiam ut purus elementum, dictum elit ut, eleifend nisi. Fusce euismod neque pretium, dictum nibh at, iaculis urna. Phasellus sagittis lectus ac ex ultricies hendrerit. Duis consequat ligula ac enim malesuada laoreet.
			</div>
		</section>
		<section id="competencies">
			<card-hover :img-src="vueImage" message="Vue.JS" />
			<card-hover :img-src="dotNetCoreImage" message=".NET Core" />		
		</section>
		<section id="photos" class="fill-screen"></section>
		<section id="contact-form" class="fill-screen"></section>
  </div>
</template>

<script>
import CardHover from "./components/CardHover.vue";
import VueImage from "./assets/vue-card-image.jpg";
import DotNetCoreImage from "./assets/net-core-card-image.png";

export default {
	data() {
		return {
			vueImage: VueImage,
			dotNetCoreImage: DotNetCoreImage
		};
	},
	components: {
		CardHover
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

.snap-scroll {
	margin: 0 auto;
	position: absolute;
	bottom: 0;
	left: 50%;
}

#landing-section {
	background: url("./assets/landing-image.jpg") no-repeat center center fixed;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}

#intro {
	display: flex;
	justify-content: space-around;
}

#intro div {
	margin: auto;
	padding: 40px;
}

#intro #my-photo img {
	max-width: 30vw;
	max-height: 30vh;
	border-radius: 130px;
}

#intro #about-me {
	font-family: $default-fonts;
}

#competencies {
	background-image: linear-gradient(
		to right top,
		#9ef2c2,
		#21e8ea,
		#00d5ff,
		#77b4ff,
		#de84f0
	);
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}

.card-hover {
	border: 1px solid #000;
	flex: 0 1 auto;
	margin: 40px;
}

#photos {
	background-color: #d15a96;
}

#contact-form {
	background-color: #d1cf5a;
}

// general
.fill-screen {
	width: 100%;
	height: 100vh;
}

.fill-half-screen {
	width: 100%;
	height: 50vh;
}
</style>
