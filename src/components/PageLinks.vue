<template>
	<div>
		<router-link class="link" to="home">Home</router-link>
		<router-link class="link" to="blog">Blog</router-link>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.link {
	font-family: $default-fonts;
	font-size: 26px;
	color: white;
	margin-left: 15px;
}
</style>
