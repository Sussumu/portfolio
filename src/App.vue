<template>
	<div id="app">
		<section id="landing-section" class="fill-screen">
			<router-view></router-view>	
		</section>	
	</div>
</template>

<style lang="scss">
@import "./styles/main.scss";

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
</style>