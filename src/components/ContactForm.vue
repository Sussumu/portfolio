<template>
	<form name="contact" data-netlify="true">
		<p>
			<label>Name: <input type="text" name="name"/></label>
		</p>
		<p>
			<label>Email: <input type="text" name="email"/></label>
		</p>
		<p>
			<label>Subject: <input type="text" name="subject"/></label>
		</p>
		<p>
			<label>Message: <textarea name="message"></textarea></label>
		</p>

		<p><button type="submit">Send</button></p>
	</form>
</template>

<script>
export default {};
</script>

<style></style>
