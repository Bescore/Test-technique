<template>
	<div class="container">
		<h1>Parkfast</h1>
		<figure>
			<div>
				<img src="@/assets/parked.svg" alt="image" />
			</div>
			<figcaption class="caption" @click="connectDisplay()" id="caption">
				Cliquez ici pour se connecter
			</figcaption>
		</figure>
		<div class="danger_infos"></div>
		<form v-on:submit.prevent class="connecter">
			<p>Se connecter</p>
			<hr />
			<input v-model="mail1" type="text" id="email" placeholder="Mail" /><br />
			<input
				v-model="password1"
				type="text"
				id="password"
				placeholder="Mot de passe"
			/><br />
			<input @click="login()" class="btn" type="submit" value="Me connecter" />
		</form>
		<form v-on:submit.prevent class="inscrire">
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
			<input @click="signup()" type="submit" value="M'inscrire" />
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
	computed: {
		isconnectedX() {
			return this.$store.state.isconnected;
		},
		incremented() {
			this.$store.getters.incremented;
		},
	},
	beforeMount(){
		var inputs=document.querySelectorAll('input[type=text]')
		console.log(inputs)
		document.querySelector('.burger').style.display='none'
		inputs[2].addEventListener("keyup",function () {
			var reg=/^[a-zA-Z- ]+$/;
			var infos=document.querySelector(".danger_infos")
			if (!reg.test(inputs[2].value) || inputs[2].value=="") {
				inputs[2].classList.remove("danger")
				inputs[2].classList.add("danger")
				inputs[2].focus()
				infos.innerText="entrée non valide"
			}else{
				inputs[2].classList.remove("danger")
				infos.innerText=""
			}
		})
		inputs[3].addEventListener("keyup",function () {
			var reg=/^[a-zA-Z- ]+$/;
			var infos=document.querySelector(".danger_infos");
			if (!reg.test(inputs[3].value) || inputs[3].value=="") {
				inputs[3].classList.remove("danger")
				inputs[3].classList.add("danger")
				infos.innerText="entrée non valide"
			}else{
				inputs[3].classList.remove("danger")
				infos.innerText=""
			}
		})
		inputs[4].addEventListener("keyup",function () {
			//mail
			var reg=/^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;
			var infos=document.querySelector(".danger_infos");
			if (!reg.test(inputs[4].value) || inputs[4].value=="") {
				inputs[4].classList.remove("danger")
				inputs[4].classList.add("danger")
				infos.innerText="entrée non valide"
			}else{
				inputs[4].classList.remove("danger")
				infos.innerText=""
			}
		})
		inputs[0].addEventListener("keyup",function () {
			//mail
			var reg=/^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/;
			var infos=document.querySelector(".danger_infos");
			if (!reg.test(inputs[0].value) || inputs[0].value=="") {
				inputs[0].classList.remove("danger")
				inputs[0].classList.add("danger")
				infos.innerText="entrée non valide"
			}else{
				inputs[0].classList.remove("danger")
				infos.innerText=""
			}
		})
		inputs[5].addEventListener("keyup",function () {
			//8 caractère, une maj, une min, un carac spéciale,, un chiffre
			var reg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
			var infos=document.querySelector(".danger_infos");
			if (!reg.test(inputs[5].value) || inputs[5].value=="") {
				inputs[5].classList.remove("danger")
				inputs[5].classList.add("danger")
				infos.innerText="entrée non valide"
			}else{
				inputs[5].classList.remove("danger")
				infos.innerText=""
			}
		})
		inputs[1].addEventListener("keyup",function () {
			//8 caractère, une maj, une min, un carac spéciale,, un chiffre
			var reg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
			var infos=document.querySelector(".danger_infos");
			if (!reg.test(inputs[1].value) || inputs[1].value=="") {
				inputs[1].classList.remove("danger")
				inputs[1].classList.add("danger")
				infos.innerText="entrée non valide"
			}else{
				inputs[1].classList.remove("danger")
				infos.innerText=""
			}
		})
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
			console.log(response.data);
			const token = response.data.token;
			const userId=response.data.userId
			localStorage.setItem("secret", token);
			localStorage.setItem("othersecret", userId);
			if (localStorage.getItem("secret") == token) {
				this.$store.dispatch("incstate");
				this.$router.push("/transition");
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
				this.$store.dispatch("incstate");
				this.$router.push("/transition");
			} else {
				alert("mauvaises données");
			}
		},
		connectDisplay() {
			document.querySelector(".connecter").classList.toggle("connecter_2");
			document.querySelector(".inscrire").classList.toggle("inscrire_2");
		},
	},
};
</script>

<style scoped>
.container {
	padding: 2px 10px;
	background-color: #fecd45;
}
figure div img {
	margin: 10px;
	width: 120px;
	height: 80px;
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
	border-radius: 2px;
	height: 30px;
	width: 80%;
	border: none;
}
.danger{
	outline: 2px red solid;
}
.danger_infos{
background-color: rgb(247, 31, 31);
width: 80%;
margin: 8px auto;
color: #f3f3f3;
transition: 300ms ease-in-out;
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
.caption{
	color: #2568fb;
	font-weight: bold;
}
.connecter {
	transition: 300ms ease;
	display: none;
}
input[type='submit']:active{
	background-color:#7e99d4 ;
}
.connecter_2 {
	transition: 300ms ease-out;
	display: block;
}
.inscrire {
	transition: 300ms ease;
	display: block;
}
.inscrire_2 {
	transition: 300ms ease-out;
	display: none;
}
footer {
	margin-top: 20px;
	text-align: center;
	color: #2568fb;
}
/*****Media queries********/

@media all and (min-width:426px)  {
	.container {
	
	width: 400px;
	margin: auto;
}
}
</style>
