<template>
	<div class="post-wrapper">
		<h1 class="post-title">
			<slot name="title"></slot>
		</h1>
		<p class="post-content">
			<slot name="content"></slot>
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.post-wrapper {
	background-color: white;
	max-width: 70%;
	padding: 40px;
}

.post-title,
.post-content {
	font-family: $default-fonts;
	color: #555;
}

.post-title {
	font-size: 32px;
}

.post-content {
	font-size: 16px;
}
</style>
