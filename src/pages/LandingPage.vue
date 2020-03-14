<template>
	<div>
		<div id="my-photo">
			<img src="../assets/myself.jpg" alt="a photo showing my face" />
		</div>
		<div id="title">GABRIEL KATO</div>
		<div id="social-profiles">
			<social-profiles />
		</div>
		<div id="page-links">
			<page-links> </page-links>
		</div>
	</div>
</template>

<script>
import SocialProfiles from "../components/SocialProfiles.vue";
import PageLinks from "../components/PageLinks.vue";

export default {
	components: {
		"social-profiles": SocialProfiles,
		"page-links": PageLinks
	}
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

#app {
	width: 100%;
	height: 100%;
}

.grid {
	display: grid;
}

#title {
	font-family: $default-fonts;
	font-size: 60px;
	color: white;
}

#my-photo img {
	max-width: 20vw;
	max-height: 20vh;
	border-radius: 140px;
	display: block;
	margin: auto;
}

#title {
	text-align: center;
	font-size: 46px;
}

#social-profiles,
#page-links {
	text-align: center;
}

#page-links {
	margin-top: 40px;
}
</style>
