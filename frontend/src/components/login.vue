<template>
	<div class="container">
		<h1>Parkfast</h1>
		<figure>
			<div>
				<img src="@/assets/parked.svg" alt="image" />
			</div>
			<figcaption>Garez-vous dans la minute !</figcaption>
		</figure>
		<form action="">
			<p>Se connecter</p>
            <hr>
			<input type="text" id="email" placeholder="Mail" /><br />
			<input type="text" id="password" placeholder="Mot de passe" /><br />
			<input class="btn" type="submit">
		</form>
		<form action="">
			<p>S'inscrire</p>
            <hr>
			<input type="text" id="name_ins" placeholder="Nom" /><br />
			<input type="text" id="firstname_ins" placeholder="Prenom" /><br />
			<input type="text" id="email_ins" placeholder="Mail" /><br />
			<input type="text" id="password_ins" placeholder="Mot de passe" /><br />
			<input  type="submit" value="C'est partie !">
		</form>
	</div>
</template>

<script>
export default {
	name: "login",
	props: {
		hell: Number,
	},
};
</script>

<style>
.container {
	padding: 2px 10px;
    background-color: #FECD45;
    border-radius:20px ;
}
figure div img {
	margin: 10px;
	width: 120px;
	height: 120px;
}

form {
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	border-radius: 20px;
	padding: 20px;
    margin: 20px;
    background-color:#2568FB;
}
form input {
	margin: 1vh;
    outline: 0;
    border-radius: 5px;
    height: 1.8vh;
    border: none;
    
}
form input::placeholder{

padding: 10px;
}
p{
    color: #f3f3f3;
}
 hr{
    width: 0px;
    transition: ease-in 300ms  ;
    border: 1px solid #2568FB ;
}
form:hover > hr{
    display: block;
    width: 100px;
    border: 3px solid #f3f3f3;
}
</style>
