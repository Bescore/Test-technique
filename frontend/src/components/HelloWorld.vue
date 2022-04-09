<template>
	<div class="containers">
		<h1>Garez-vous !</h1>
		<div class="sub_contains">
			<span>Quelles sont les places disponible?</span>

			<div class="div_place">
				<form v-on:submit.prevent>
					<input
						class="recherche"
						@click="getAll()"
						type="submit"
						value="Cliquez pour rechercher"
					/>
				</form>
				<select v-model="selected" name="choose" id="" value="choisissez">
					<option value="">--Les places disponible--</option>
					<option :key="index" v-for="(place, index) in place" :value="place">
						{{ place }}
					</option>
				</select>
				<p>
					Place sélectionné : <span>{{ selected }}</span>
				</p>
				<form v-on:submit.prevent>
					<input type="submit" class="validate" value="Valider" />
				</form>
			</div>
			<div class="div_etage">
				<form v-on:submit.prevent id="par_etage">
					<input class="recherche" type="submit" value="Par étage" />
				</form>
				<select v-model="select_etage" name="choix" id="floor">
					<option value="">Par étages</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<p>
					Etage sélectionné : <span>{{ select_etage }}</span>
				</p>
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	created() {
		setTimeout(
			() => (document.querySelector("h1").style.display = "none"),
			4000
		);
	},
	name: "HelloWorld",
	data() {
		return {
			place: null,
			selected: "",
			select_etage: "",
		};
	},
	methods: {
		async getAll() {
			const plac = [];
			const response = await axios.get("api/test/");
			response.data.map((element) => {
				console.log(element);
				plac.push(element.nom_de_place);
				this.place = plac;
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
	margin-top: -0px;
}
.sub_contains {
	background-color: #fecd45;
	border-radius: 20px;
	padding: 20px;
	z-index: 0;
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
	margin: 50px;
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

.validate {
	padding: 10px;
	margin: 15px;
	border-radius: 10px;
    border: none;
	background: linear-gradient(
		196deg,
		rgba(34, 193, 195, 1) 0%,
		rgba(253, 252, 45, 1) 100%
	);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: 200ms ease-in;
	
}
.validate:hover{
  transform: scale(1.1);
    border: rgba(34, 193, 195, 1) solid 2px;  
}
</style>
