<template>
	<div id="app">
		<nav>
			<router-link to="/home">Home</router-link> 
			<router-link to="/compte">Compte</router-link> 
			<router-link to="/">Login/Register</router-link> 
		</nav>
		<router-view />
		<div class="burger"><hr><hr><hr></div>
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
	border: 2px blue solid;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 30%;
	height: 10vh;
	position: relative;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #2568fb;
}
.burger{
position: fixed;
top:5px;
left: 5px;
background-color: red;
width: 5vh;
}
</style>
