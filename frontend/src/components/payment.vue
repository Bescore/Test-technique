<template>
	<div>
		<h2>Paiement</h2>
		<table>
			<thead>
				<tr>
					<th>Places occupées</th>
					<th>Temps</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="place_occupe in place_occupe" :key="place_occupe.id">
					<td>{{ place_occupe.spot}}</td>
					<td>{{ place_occupe.durée}}</td>
				</tr>
				<tr>
				</tr>
			</tbody>
		</table>
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
		const response = await axios.get("api/test/time", {
			params:{
			userId: localStorage.getItem("othersecret"),
			}
		});
				this.place_occupe=response.data
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
	padding: 15px;
}
</style>
