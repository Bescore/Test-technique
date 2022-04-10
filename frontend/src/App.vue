<template>
	<div id="app">
		<nav>
			<router-link to="/home">Home</router-link> |
			<router-link to="/compte">Compte</router-link> |
			<router-link to="/">Login/Register</router-link> |
			<router-link to="/transition">transit</router-link>
		</nav>
		<router-view />
	</div>
</template>

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
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #2568fb;
}
</style>
