<template>
	<div class="containers">
		<h2 class="h_title">Garez-vous !</h2>
		<div class="sub_contains">
			<h4>Quelles sont les places disponible?</h4>

			<div class="div_place">
				<form v-on:submit.prevent>
					<input
						class="recherche"
						@click="getAll()"
						type="submit"
						value="Cliquez d'abord ici pour rechercher"
					/>
				</form>
				<select v-model="selected" name="choose" id="" value="choisissez">
					<option value="">--Les places disponible--</option>
					<option :key="index" v-for="(place, index) in place" :value="place">
						{{ place.nom_de_place }}
					</option>
				</select>
				<p>
					Place sélectionné : <span>{{ selected.nom_de_place }}</span>
				</p>
				<form v-on:submit.prevent>
					<input
						@click="getThisSpot()"
						type="submit"
						class="validate"
						value="Se garer à cette place"
					/>
				</form>
			</div>
			<div id="sub"></div>
			<div class="div_etage">
				<form v-on:submit.prevent id="par_etage">
					<form class="form_radio">
						<label for="radio_1">1</label>
						<input
							v-model="floor_picked"
							type="radio"
							id="radio_1"
							value="1"
						/><br />
						<label for="radio_2">2</label>
						<input
							v-model="floor_picked"
							type="radio"
							id="radio_2"
							value="2"
						/><br />
						<label for="radio_3">3</label>
						<input
							v-model="floor_picked"
							type="radio"
							id="radio_3"
							value="3"
						/><br />
					</form>
					<input
						@click="getByfloor()"
						class="recherche"
						type="submit"
						value="Par étage"
					/>
				</form>

				<select v-model="select_2" name="choix" id="floor">
					<option value="">--Places par étage--</option>
					<option :key="ind" v-for="(place_par_etage, ind) in place_par_etage">
						{{ place_par_etage.nom_de_place }}
					</option>
				</select>

				<p>
					Etage sélectionné : <span>{{ floor_picked }}</span>
				</p>
				<p>
					Place sélectionné : <span id="floor_value">{{ select_2 }}</span>
				</p>
				<form v-on:submit.prevent>
					<input
						@click="getThisSpot_by_floor()"
						type="submit"
						class="validate"
						value="Se garer à cette place"
					/>
				</form>
			</div>
			<footer>© Copyright 2022 Jm.Lator. All rights reserved.</footer>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	beforeMount() {
		document.querySelector(".burger").style.display = "block";
		setTimeout(
			() => (document.querySelector(".h_title").style.display = "none"),
			2000
		);
		const today = new Date();
		var options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const date = document.createElement("div");
		date.style.textAlign = "center";
		date.style.padding = "10px";
		date.innerHTML = `<div id="date_pos">${today.toLocaleString(
			"fr-Fr",
			options
		)}</div>`;
		const net = document.getElementById("sub");
		net.appendChild(date);
	},
	name: "HelloWorld",
	data() {
		return {
			place: null,
			selected: "",
			select_2: "",
			floor_picked: null,
			place_par_etage: null,
		};
	},
	computed: {
		floorValue: function () {
			return (
				(this.floor_picked = this.floor_picked),
				(this.selected = this.selected),
				(this.select_2 = this.select_2)
			);
		},
	},
	methods: {
		async getAll() {
			const response = await axios.get("api/test/");
				this.place = response.data
			
		},
		async getByfloor() {
			
			const response = await axios.post("api/test/emp_floor", {
				etage: this.floor_picked,
			});
			console.log(response.data)
				this.place_par_etage = response.data;
				
		},
		async getThisSpot() {
			const response = await axios.put("api/test/spot", {
				place: this.selected.nom_de_place,
				userId: localStorage.getItem("othersecret"),
			});
			if (response.data == "erreur") {
				alert("vous devez d'abord cliquer et rechercher les places disponible");
			} else {
				console.log(response);
				this.$store.dispatch("incstate");
				this.$router.push("/compte");
				if (response.data == "place non disponible") {
					alert("cette place de parking n'est pas disponible");
				}
			}
		},
		async getThisSpot_by_floor() {
			const response = await axios.put("api/test/spot", {
				place: this.select_2,
				userId: localStorage.getItem("othersecret"),
			});
			if (response.data == "erreur") {
				alert("vous devez d'abord cliquer et rechercher les places disponible");
			} else {
				console.log(response);
				this.$store.dispatch("incstate");
				this.$router.push("/compte");
				if (response.data == "place non disponible") {
					alert("cette place de parking n'est pas disponible");
				}
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h_title {
	background-color: #2568fb;
	margin: auto;
	transition: 200ms ease-out;
	color: #fecd45;
}
.sub_contains {
	background-color: #fecd45;
	padding: 15px;
	z-index: 0;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

select option {
	text-align: center;
	background-color: #2568fb;
	color: #f3f3f3;
}
select {
	margin: 20px;
	padding: 5px;
}
.recherche {
	margin: 30px;
	padding: 20px;
	border: none;
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
	transition: 200ms ease-in;
}
.recherche:hover {
	color: #f3f3f3;
	background-color: #2568fb;
	transform: scale(1.1);
	border: #2568fb solid 2px;
}
.div_place {
	border: 1px #2568fb solid;
	margin-bottom: 20px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.div_etage {
	border: 1px #2568fb solid;
	padding: 5px;
}
.div_etage .form_radio input {
	margin: 2px 5px;
}
form#par_etage {
	display: flex;
	justify-content: center;
	align-items: center;
}
form#par_etage .recherche {
	margin-left: 10px;
}
.validate {
	padding: 10px;
	margin: 15px;
	border-radius: 10px;
	border: none;
	color: #f3f3f3;
	background: linear-gradient(
		56deg,
		rgba(34, 193, 195, 1) 0%,
		rgba(37, 104, 251, 1) 100%
	);
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
	transition: 200ms ease-in;
}
.validate:hover {
	transform: scale(1.1);
}
footer {
	padding: 10px;
}
/*****************************/
@media all and (min-width:426px)  {
	.containers {
	width: 400px;
	margin: auto;
}
.sub_contains {
	background-color: #fecd45;
	border-radius: 20px;
	padding: 15px;
	z-index: 0;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
}
</style>
