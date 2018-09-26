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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales, neque nec vulputate posuere, velit sem sagittis sapien, sit amet pellentesque elit metus nec elit. Donec vel dolor mauris. Curabitur interdum, neque ac pellentesque convallis, sapien tellus mollis erat, et consectetur velit justo nec ante. Mauris maximus euismod lorem, sed egestas urna ullamcorper in. Etiam ut purus elementum, dictum elit ut, eleifend nisi. Fusce euismod neque pretium, dictum nibh at, iaculis urna. Phasellus sagittis lectus ac ex ultricies hendrerit. Duis consequat ligula ac enim malesuada laoreet. Proin et arcu convallis, vehicula nibh nec, pharetra dui. In augue justo, feugiat non aliquet sit amet, bibendum sed tellus.
			</div>
		</section>
		<section id="competencies" class="fill-screen"></section>
		<section id="photos" class="fill-screen"></section>
		<section id="contact-form" class="fill-screen"></section>
  </div>
</template>

<script>
export default {
	methods: {
		scrollToSection(section) {
			this.$refs[section].scrollIntoView({ behavior: "smooth", block: "start" });
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

#competencies {
	background-image: linear-gradient(to right top, #9ef2c2, #21e8ea, #00d5ff, #77b4ff, #de84f0);
}

#photos {
	background-color: #d15a96;
}

#contact-form {
	background-color: #d1cf5a;
}

// general
.fill-screen {
	width: 100vw;
	height: 100vh;
}

.fill-half-screen {
	width: 100vw;
	height: 50vh;
}
</style>
