<template>
	<div>
		<blog-post>
			<template v-slot:title>
				Sobre o blog
			</template>
			<template v-slot:subtitle>
				São Paulo, 15 de março de 2020
			</template>
			<template v-slot:content>
				<p>A ideia aqui é contar um pouco o porquê da existência desse site e quais as decisões eu tomei no meio do caminho. Espero que possa 
				agregar para alguns de vocês! Por enquanto nem tem como postar comentários, porque fiz tudo do zero e estou usando a solução de 
				hospedagem de site estático do <a href="https://www.netlify.com/">Netlify</a>. Sei que eles dispõem de algumas features como AWS 
				Lambda functions, mas ainda não parei para ver.</p>

				<p>Com certeza é uma escolha diferente não usar nenhum <a href="https://en.wikipedia.org/wiki/Content_management_system">CMS</a> para 
				gerenciar um blog, mas como já não mexo com Vue.js há mais de seis meses, pensei em testar meus conhecimentos e ver se conseguia 
				criar tudo do zero. Não sou nenhum doido de open source, mas também gosto de ter algumas coisas no meu controle, então Medium também 
				não era uma opção.</p>
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
