<template>
    <span>
        <span id="form-title">{{title}}</span>
        <form id="netlify-form" name="contact" data-netlify="true">
            <p>
                <label>Nome: <input type="text" name="name"/></label>
            </p>
            <p>
                <label>Email: <input type="text" name="email"/></label>
            </p>
            <p>
                <label>Assunto: <input type="text" name="subject"/></label>
            </p>
            <p>
                <label>Mensagem: <textarea name="message" rows=10></textarea></label>
            </p>

            <p><button type="submit">Enviar!</button></p>
        </form>
    </span>
</template>

<script>
export default {
    props: {
        title: {
            default: "Contato",
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

#form-title,
form {
    font-family: $default-fonts;
}

#form-title {
    font-size: 46px;
    text-align: center;
}

#netlify-form {
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

#netlify-form p {
    width: 30vw;
}

#netlify-form label,
#netlify-form input,
#netlify-form textarea {
    display: block;
    width: 100%;
}
</style>
