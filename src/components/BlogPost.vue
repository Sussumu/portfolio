<template>
	<div class="post-wrapper">
		<h1 class="post-title">
			<slot name="title"></slot>
		</h1>
		<div class="post-subtitle">
			<slot name="subtitle"></slot>
		</div>
		<p class="post-content">
			<slot name="content"></slot>
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.post-wrapper {
	background-color: white;
	max-width: 40%;
	padding: 40px;
}

.post-title,
.post-subtitle,
.post-content {
	font-family: $default-fonts;
	color: #555;
}

.post-title {
	font-size: 32px;
	margin-bottom: 0;
}

.post-subtitle {
	font-size: 12px;
	margin-top: 0;
	padding: 0 0 20px 0;
}

.post-content {
	font-size: 16px;
	line-height: 2;
}
</style>
