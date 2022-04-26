<template>
	<div class="cont_compt">
		<h2>Mon compte</h2>
		<div class="spot_display">
			<span class="sous_titre"> Où suis-je garé? </span>
			<div class="spot_box">
				<span v-if="maplace != 0" class="sous_titre_font">{{ place }}</span>
				<span v-else class="sous_titre_font">Vous n'êtes pas garé</span>
			</div>
			<br />
			<div class="Etage">Etage : {{ etage }}</div>
		</div>
		<h3>Mes informations</h3>
		<div class="my_infos">
			<div>Nom : {{ nom }}</div>
			<br />
			<div>Prenom : {{ prenom }}</div>
			<br />
			<div>Email : {{ email }}</div>
			<br />
		</div>
		<router-link  class="se_garer" to="/home">Se garer</router-link>
		<!-- cacher quand le compte détient une place-->
		<div @click="freeTheSpot()" class="free_the_spot">
			<p>Libérer la place et payer</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
	async mounted() {
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
	async beforeMount() {
		const response = await axios.post("api/auth/myPlace", {
			userId: localStorage.getItem("othersecret"),
		});
		if (response.data[0] == undefined) {
			this.$store.dispatch("decmaplace");
			document.querySelector(".se_garer").style.display="flex"
			document.querySelector(".free_the_spot").style.display="none"
			document.querySelector('.Etage').style.display="none"
			
		} else {
			this.$store.dispatch("getmaplace");
			document.querySelector(".se_garer").style.display="none"
			document.querySelector(".free_the_spot").style.display="flex"
			document.querySelector('.Etage').style.display="block"
			document.querySelector('#se_garer').style.display="none"
		
		console.log(response.data[0]);
		this.place = response.data[0].nom_de_place;
		this.etage = response.data[0].etage;
		}
		
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
	computed: {
		...mapState(["maplace"]),
	},
	methods:{
		async freeTheSpot(){
			const response = await axios.put("api/test/freespot",{
				userId:localStorage.getItem('othersecret'),
				spot:this.place
			})
			
			console.log(response.data)
			location.reload()
		}
	}
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
.my_infos{
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: 50%;
	margin: auto;
}
.spot_box {
	height: 30vh;
	border: 1px solid black;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
		rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	border-radius: 20px;
	margin: 20px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
}
.sous_titre_font {
	font-size: 3rem;
}

.free_the_spot,.se_garer{
	position :absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2568fb;
	width: 100%;
	color: #fecd45;
	font-weight: bold;
	margin: auto auto;
}
.se_garer{
	height: 6%;
	text-decoration: none;
	
}
</style>
