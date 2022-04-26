<template>
    <div>
<h2>Paiement</h2>
<table>
<thead>
    <tr>
        <th>Places occupé</th>
        <th>Temps</th>
        <th>Dû</th>
    </tr>
</thead>
<tbody>
    <tr  v-for="place_occupe in place_occupe" :key="place_occupe.id"> 
        <td> {{ place_occupe}}</td>
        <td></td>
    </tr>
</tbody>
</table>
    </div>
</template>

<script>
import  axios  from "axios";
    export default {
       data(){
           return {
            temps:null,
            place_occupe:null,
            dû:null ,  
           }
       } ,
       async mounted(){
           const response= await axios.post("/api/test/time",{
               userId:localStorage.getItem('othersecret')
           })
           console.log(response.data)

    },
    }
</script>

<style  scoped>
table{
    border-collapse: collapse;
    margin: 20px auto;
}
table, thead,th,tr,td{
    border: solid 1px black;
    padding: 15px;
}
</style>