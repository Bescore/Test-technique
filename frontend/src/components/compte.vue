<template>
	<div class="cont_compt">
		<h2>Mon compte</h2>
		<div class="spot_display">
			<span class="sous_titre"> Où suis-je garé? </span>
			<div class="spot_box">
				<span class="sous_titre_font">{{ place }}</span>
			</div>
			<br />
			<div>Etage : {{ etage }}</div>
		</div>
		<h3>Mes informations</h3>
		<div>
			<div>Nom : {{ nom }}</div>
			<br />
			<div>Prenom : {{ prenom }}</div>
			<br />
			<div>Email : {{ email }}</div>
			<br />
		</div>
		<router-link  to="/home">Se garer</router-link> <!-- cacher quand le compte détient une place--> 
	</div>
</template>

<script>
import axios from "axios";
export default {
	async created() {
		if (!localStorage.getItem("othersecret")) {
			alert("je ne vous reconnaît pas ! reconnectez vous");
			this.$router.push("/");
		} else {
			const response = await axios.post("api/auth/myAccount", {
				userId: localStorage.getItem("othersecret"),
			});
			this.nom = response.data[0].nom;
			this.prenom = response.data[0].prenom;
			this.email = response.data[0].mail;
		}
	},
	async mounted() {
		const response = await axios.post("api/auth/myPlace", {
			userId: localStorage.getItem("othersecret"),
		})
		console.log(response.data[0])
		this.place=response.data[0].nom_de_place;
		this.etage=response.data[0].etage
	},
	data() {
		return {
			place: null,
			etage: null,
			nom: null,
			prenom: null,
			email: null,
		};
	},
};
</script>

<style scoped>
h2 {
	margin-top: 0;
}
.cont_compt {
	background-color: #fecd45;
	height: 92.5vh;
}
.spot_box {
	height: 30vh;
	border: 1px solid black;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
		rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	border-radius: 20px;
	margin: 5px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sous_titre_font {
	font-size: 3rem;
}
</style>
