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
    <tr  v-for="place_occupé in place_occupé" :key="place_occupé.id"> 
        <td> {{ item }}</td>
        <td></td>
    </tr>
</tbody>
</table>
    </div>
</template>

<script>
import { axios } from "axios";
    export default {
       data(){
           return {
            temps:"",
            place_ocupé:"",
            dû:"" ,  
           }
       } ,
         methods: {
        async timeLeft() {
           const response= axios.post("time",{
               userId:localStorage.getItem('othersecret')
           })

        }
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