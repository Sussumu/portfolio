<template>
  <div id="app">
    <section id="landing-section">
			<button @click="scrollToSection()"></button>
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
		scrollToSection() {
			this.$refs.intro.scrollIntoView({ behavior: "smooth" });
		}
	}
};
</script>


<style lang="scss" scoped>
#app {
	width: 100%;
	height: 100%;
}

#landing-section {
	background-color: #5ad1ad;
	width: 100%;
	height: 100%;
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
