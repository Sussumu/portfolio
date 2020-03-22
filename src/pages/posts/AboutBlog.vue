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

				<p>O estranho é usar um componente para cada postagem, mas cada doido com suas doideras!</p>

				<p>Sempre quis ter um lugar para jogar uns textos sem compromisso. Quando era adolescente cheguei a criar algumas coisas no Blogger, 
				mas nunca divulguei para ninguém, então acho que não conta. Quando anunciaram os domínios .dev, a vontade voltou. Com ela, o mesmo 
				<a href="https://en.wikipedia.org/wiki/Fear_of_missing_out">FOMO</a> de não conseguir um bom email @outlook. Na época eu poderia 
				ter registrado só com o meu sobrenome Kato, mas perdi a chance! Depois de conseguir o meu domínio, ainda se passaram meses até que 
				eu resolvesse criar o site... Então por R$ 50,00 por ano eu mantenho o meu .dev. Ou como gostam de colocar, um cafezinho por mês.</p>

				<p>Falando sobre stack, o Netlify me ajudou muito nessa jornada. Poder hospedar um site estático sem custo e cheio de features é 
				muito bom. Outra solução acho que seria um Github Pages, mas da outra vez que tentei não fui muito bem sucedido. Como eles mesmo 
				anunciam, basta dizer onde está o seu repositório, configurar a ferramenta de build e só! Além disso também tem suporte a formulários 
				(sim, no site estático!), autenticação e serverless functions de graça. Caso precise escalar esses serviços, aí sim o preço começa a 
				subir, mas para um site pessoal com links e alguns textos como o meu não faz diferença.</p>

				<p>E como o site é estático, tudo é feito com Vue.js, meu preferido. De fato, não tenho muita bagagem de frameworks de frontend para 
				comparar. Entre Vue e Angular 1 não é muito difícil de escolher!</p>

				<p>Por enquanto é só isso pra falar!</p>
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
