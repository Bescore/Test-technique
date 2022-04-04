<template>
  <div class="container">
      <h1> Parkfast</h1>
     <figure>
         <div>
             <img src="@/assets/parked.svg" alt="image">
         </div>
         <figcaption>Park your car in a minute !</figcaption>
     </figure>
     <form action="">
         <input type="text" id="email" placeholder="mail"><br>
         <input type="text" id="password" placeholder="mot de passe"><br>
     </form>
     <hr>
     <form action="">
         <input type="text" id="name" placeholder="nom"><br>
         <input type="text" id="firstname" placeholder="prenom"><br>
         <input type="text" id="email" placeholder="mail"><br>
         <input type="text" id="password" placeholder="mot de passe"><br>
     </form>
  </div>
</template>

<script>
export default {
name:'login',
props:{
    hell:Number
}
}
</script>

<style>
.container{
    padding:0 10px;
}
figure div img{
    border-radius: 50%;
    margin: 10px;
    width: 100px;
    height: 100px;
}
form input{
    margin: 10px;
}
</style>