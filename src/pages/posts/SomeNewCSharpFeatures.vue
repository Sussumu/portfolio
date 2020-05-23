<template>
	<div>
		<blog-post>
			<template v-slot:title>
				C# never stops
			</template>
			<template v-slot:subtitle>
				São Paulo, 23 de maio de 2020
			</template>
			<template v-slot:content>
				<p>
					With the announcement of the latest C# version 9.0 I started thinking about how much content 
					I've been missing in the last years. The last big thing I heard about was tuples and that span 
					thing. But to be honest, I never tried those! As we all hopefully know by now, it's impossible 
					to keep up with everything that is going on. That being said, it's good to know most language 
					features to be able to solve a problem in a better way.
				</p>

				<p> 
					
				</p>
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
