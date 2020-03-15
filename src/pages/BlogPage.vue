<template>
	<div>
		<div id="page-links">
			<page-links> </page-links>
		</div>
		<div id="posts">
			<AboutBlogPost></AboutBlogPost>
		</div>
	</div>
</template>

<script>
import PageLinks from "../components/PageLinks.vue";

import AboutBlogPost from "./posts/AboutBlog.vue";

export default {
	components: {
		"page-links": PageLinks,
		AboutBlogPost
	}
};
</script>

<style lang="scss" scoped>
#page-links {
	text-align: center;
}
</style>
