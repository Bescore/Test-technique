<template>
	<div>
		<h2>Paiement</h2>
		<table>
			<thead>
				<tr>
					<th>Places occupées</th>
					<th>Temps<br>
					<span class="temps_precisions">(h/min/sec)</span></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="place_occupe in place_occupe" :key="place_occupe.id">
					<td>{{ place_occupe.spot}}</td>
					<td>{{ place_occupe.durée}}</td>
				</tr>
			</tbody>
		</table>
		<div>
			<span class="tarif">Tarif : 0.10 centimes la minute</span>
		</div>
		<h2>Dû : {{dû}} €</h2>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			duree: null,
			place_occupe: null,
			dû: null,
		};
		
	},
	async mounted() {
		var tab=[]
		var total=0
		const response = await axios.get("api/test/time", {
			params:{
			userId: localStorage.getItem("othersecret"),
			}
		});
		//calcule le coût total du//
				this.place_occupe=response.data
				response.data.forEach(element => {
					var h_in_sec=parseInt(element.durée.split(":")[0]*3600);
					var min_in_sec=parseInt(element.durée.split(":")[1]*60);
					var sec_in_sec=element.durée.split(":")[2];
					 total=(h_in_sec+min_in_sec+sec_in_sec)*0.01;
				});
				
				this.dû=total

	},
	methods: {
		du(){
			
		}
	},
};
</script>

<style scoped>
table {
	border-collapse: collapse;
	margin: 20px auto;
}
table,
thead,
th,
tr,
td {
	border: solid 1px black;
	color:#f3f3f3;
	padding: 15px;
	background: #2568fb;
}
.temps_precisions{
	font-size: 0.7rem;
}
.tarif{
	font-size: 0.8rem;
}

</style>
