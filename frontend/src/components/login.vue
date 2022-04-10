<template>
	<div class="container">
		<h1>Parkfast</h1>
		<figure>
			<div>
				<img src="@/assets/parked.svg" alt="image" />
			</div>
			<figcaption>Garez-vous dans la minute !</figcaption>
		</figure>
		<form v-on:submit.prevent>
			<p>Se connecter</p>
			<hr />
			<input v-model="mail1" type="text" id="email" placeholder="Mail" /><br />
			<input
				v-model="password1"
				type="text"
				id="password"
				placeholder="Mot de passe"
			/><br />
			<input @click="login()" class="btn" type="submit" />
		</form>
		<form v-on:submit.prevent>
			<p>S'inscrire</p>
			<hr />
			<input v-model="nom" type="text" id="name_ins" placeholder="Nom" /><br />
			<input
				v-model="prenom"
				type="text"
				id="firstname_ins"
				placeholder="Prenom"
			/><br />
			<input
				v-model="mail2"
				type="text"
				id="email_ins"
				placeholder="Mail"
			/><br />
			<input
				v-model="password2"
				type="text"
				id="password_ins"
				placeholder="Mot de passe"
			/><br />
			<input @click="signup()" type="submit" value="C'est partie !" />
		</form>
		<footer>© Copyright 2022 Jm.Lator. All rights reserved.</footer>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "login",
	props: {
		hell: String,
	},
	data() {
		return {
			mail1: "",
			password1: "",
			nom: "",
			prenom: "",
			mail2: "",
			password2: "",
		};
	},
	methods: {
		async signup() {
			const response = await axios.post("api/auth/signup", {
				nom: this.nom,
				prenom: this.prenom,
				email: this.mail2,
				password: this.password2,
			});
			const token = response.data.token;
			localStorage.setItem("secret", token);
			if (localStorage.getItem("secret") === token) {
				this.$router.push("/home");
			} else {
				alert("mauvaises données");
			}
			console.log("la requête de création de compte et de token");
		},
		async login() {
			const response = await axios.post("api/auth/login", {
				email: this.mail1,
				password: this.password1,
			});
			localStorage.setItem("secret", response.data.token);
			localStorage.setItem("othersecret", response.data.userId);
			if (
				localStorage.getItem("secret") == response.data.token &&
				localStorage.getItem("othersecret") == response.data.userId
			) {
				this.$router.push("/");
			} else {
				alert("mauvaises données");
			}
			console.log(response.data);
		},
	},
};
</script>

<style scoped>
.container {
	padding: 2px 10px;
	background-color: #fecd45;
	border-radius: 20px;
}
figure div img {
	margin: 10px;
	width: 120px;
	height: 120px;
}

form {
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
		rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	border-radius: 20px;
	padding: 20px;
	margin: 13px;
	background-color: #2568fb;
}
form input {
	margin: 1vh;
	outline: 0;
	border-radius: 5px;
	height: 1.8vh;
	border: none;
}
form input::placeholder {
	padding: 10px;
}
p {
	color: #f3f3f3;
}
hr {
	width: 0px;
	transition: ease-in 300ms;
	border: 1px solid #2568fb;
}
form:hover > hr {
	display: block;
	width: 100px;
	border: 3px solid #f3f3f3;
}
</style>
