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
			<router-link to="/home">Home</router-link>
			<router-link to="/compte">Compte</router-link>
			<router-link to="/">Login/Register</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		phoneMenu() {
			const burg = document.querySelector("nav");
			burg.classList.toggle("navigo");
		},
	},
};
</script>

<style>
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
	border-radius: 20px;
	background-color: #2568fb;
	justify-content: space-around;
	flex-direction: column;
	width: 30%;
	height: 20vh;
	margin: auto;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	transform: scale(0);
	transition: 300ms ease-in;
}
.navigo {
	padding: 25px;
	display: flex;
	align-items: flex-start;
	border-radius: 20px;
	background-color: #2568fb;
	border: solid 1px black;
	justify-content: space-around;
	flex-direction: column;
	width: 35%;
	height: 20vh;
	margin: auto;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	transform: scale(1);
	transition: 300ms ease-in;
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
