<template>
	<div>
		<div id="page-links">
			<page-links> </page-links>
		</div>
	</div>
</template>

<script>
import PageLinks from "../components/PageLinks.vue";

export default {
	components: {
		"page-links": PageLinks
    }
};
</script>

<style lang="scss" scoped>
#page-links {
	text-align: center;
}
</style>
