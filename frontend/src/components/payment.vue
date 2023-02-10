<template>
	<div>
		<h2>Paiement</h2>
		<table>
			<thead>
				<tr>
					<th>Places occupées</th>
					<th>
						Temps<br />
						<span class="temps_precisions">(h/min/sec)</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="place_occupe in place_occupe" :key="place_occupe.id">
					<td>{{ place_occupe.spot }}</td>
					<td>{{ place_occupe.durée }}</td>
				</tr>
			</tbody>
		</table>
		<div>
			<span class="tarif">Tarif : 0.06 centimes la minute</span>
		</div>
		<h2>Dû : {{ dû }} €</h2>
		<form action="https://www.paypal.com/donate" method="post" target="_top">
			<input type="hidden" name="hosted_button_id" value="FW6GUJPSU9Q2L" />
			<input
				type="image"
				src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif"
				border="0"
				name="submit"
				title="PayPal - The safer, easier way to pay online!"
				alt="Bouton Faites un don avec PayPal"
			/>
			<img
				alt=""
				border="0"
				src="https://www.paypal.com/fr_FR/i/scr/pixel.gif"
				width="1"
				height="1"
			/>
		</form>
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
	async beforeMount() {
		var total = 0;
		const response = await axios.get("api/test/time", {
			params: {
				userId: localStorage.getItem("othersecret"),
			},
		});
		//calcule le coût total du//
		this.place_occupe = response.data;
		response.data.forEach((element) => {
			var h_in_sec = parseInt(element.durée.split(":")[0] * 3600);
			var min_in_sec = parseInt(element.durée.split(":")[1] * 60);
			var sec_in_sec = parseInt(element.durée.split(":")[2]);
			var tot = (h_in_sec + min_in_sec + sec_in_sec) * 0.001;
			total += tot;
		});
		this.dû = total.toFixed(2);
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
	color: #f3f3f3;
	padding: 15px;
	background: #2568fb;
}
.temps_precisions {
	font-size: 0.7rem;
}
.tarif {
	font-size: 0.8rem;
}

.payer {
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2568fb;
	width: 100%;
	color: #fecd45;
	font-weight: bold;
	margin: auto auto;
	height: 6%;
}
</style>
