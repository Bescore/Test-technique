<template>
	<div class="containers">
		<h1>Garez-vous !</h1>
		<div class="sub_contains">
			<span>Quelles sont les places disponible?</span>
			<form v-on:submit.prevent>
				<input @click="getAll()" type="submit" value="Recherche globale" />
			</form>
			<div>
				<div>Tic....tac...</div>
				<table>
					<caption>
						Résultats
					</caption>
					<thead>
						<tr>
							<th>Place</th>
							<th>Etage</th>
						</tr>
					</thead>
					<tr :key="index" v-for=" (Etage,index) in Etage">
						<td >{{place}}</td>
						<td>{{Etage}}</td>
					</tr>
				</table>
			</div>
			<div>
				<form v-on:submit.prevent id="par_etage">
					<input type="submit" value="Par étage" />
				</form>
				<select name="choix" id="floor">
					<option value="one">1</option>
					<option value="two">2</option>
					<option value="three">3</option>
				</select>
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
import axios from'axios'
export default {
	name: "HelloWorld",
  data(){
    return{
      Etage:null,
      place:null
      
    }
  },
  methods:{
    async getAll(){
		var floor=[];
		const tage=[]
      const response=await axios.get('api/test/')
	  for await (let item of response.data){
		 floor.push(item.etage);
		 this.Etage=floor
	  }
	},
	
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sub_contains {
	background-color: #fecd45;
	border-radius: 20px;
	padding: 10px;
}
table {
	border-collapse: collapse;
	margin: 10px auto;
}
thead,
th,
td,
tr,
caption {
	border: 1px black solid;
	padding: 10px;
}
</style>
