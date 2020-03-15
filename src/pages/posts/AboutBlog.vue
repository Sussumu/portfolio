<template>
	<div>
		<blog-post>
			<template v-slot:title>
				Sobre o blog
			</template>
			<template v-slot:content>
				Teste!
			</template>
		</blog-post>
	</div>
</template>

<script>
import BlogPost from "../../components/BlogPost.vue";

export default {
	components: {
		"blog-post": BlogPost
	}
};
</script>
