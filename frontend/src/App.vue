<template>
	<div id="app">
		<div class="phoneMenu_cont">
			<div @click="phoneMenu()" class="burger">
				<hr />
				<hr />
				<hr />
			</div>
		</div>
		<nav @click="hideNav()">
			<router-link @click.native="logOut()" to="/">se déconnecter</router-link>
			<router-link id="se_garer" to="/home">Se garer</router-link>

			<router-link id="compte" to="/compte">Compte</router-link>
			<router-link to="/payment">Paiement</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["isconnected"]),
	},
	methods: {
		phoneMenu() {
			const burg = document.querySelector("nav");
			burg.classList.toggle("navigo");
			setTimeout(() => {
				burg.classList.remove("navigo");
			}, 4000);
		},
		hideNav() {
			const burg = document.querySelector("nav");
			burg.classList.toggle("navigo");
		},
		logOut() {
			this.$store.dispatch("deccstate");
			localStorage.removeItem("secret");
			localStorage.removeItem("othersecret");
			alert("vous vous êtes deconnecté");
		},
	},
};
</script>

<style>
body {
	margin: 0 !important;
	background-color: #fecd45 !important;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
nav {
	padding: 25px;
	display: flex;
	align-items: flex-start;
	background-color: #2568fb;
	justify-content: center;
	gap: 40px;
	flex-direction: column;
	width: 40%;
	height: 100%;
	margin: auto;
	position: fixed;
	z-index: 5;
	top: 0;
	right: 0;
	transform: translateX(100%);
	transition: 200ms ease-out;
}
.navigo {
	padding: 25px;
	display: flex;
	align-items: flex-start;
	background-color: #2568fb;
	z-index: 5;
	gap: 40px;
	justify-content: center;
	flex-direction: column;
	width: 40%;
	height: 100%;
	margin: auto;
	position: fixed;
	top: 0;
	left: 0;
	transform: translateX(50%);
	transition: 200ms ease;
}

nav a {
	font-weight: bold;
	color: #fecd45;
	text-decoration: none;
}

nav a.router-link-exact-active {
	color: #edf0df;
}
.burger {
	padding: 2px;
	position: sticky;
	top: 10px;
	width: 5vh;
}
.burger hr {
	border: #2568fb 1px solid;
}
.phoneMenu_cont {
	background-color: #fecd45;
	padding: 10px;
	position: sticky;
	top: 0;
}

</style>
