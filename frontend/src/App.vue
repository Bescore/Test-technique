<template>
	<div id="app">
		<div class="phoneMenu_cont">
			<div @click="phoneMenu()" class="burger">
				<hr />
				<hr />
				<hr />
			</div>
		</div>
		<nav>
			<router-link v-if="isconnected == false" to="/home"
				>Home</router-link
			>
			<router-link v-else @click.native="logOut()" to="/">se déconnecter</router-link>
			<router-link to="/compte">Compte</router-link>
			<router-link to="/">Login/Register</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
import {mapState }from 'vuex'
export default {
	data() {
		return {}
	},
	computed:{
		...mapState(['isconnected'])
	},
	methods: {
		phoneMenu() {
			const burg = document.querySelector("nav");
			burg.classList.toggle("navigo");
		},
		logOut(){
			this.$store.dispatch('deccstate')
			localStorage.removeItem('secret')
			localStorage.removeItem('othersecret')
			alert("vous vous êtes deconnecté")
		}
	},
};
</script>

<style>
body {
	margin: 0 !important;
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
	color: #dbfb25;
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
