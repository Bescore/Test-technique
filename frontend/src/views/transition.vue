<template>
	<div class="container_transit">
		<div class="cont_child">
			<div class="loader">
				<span>Vérifications en cours...</span>
				<img src="@/assets/car_run.gif" alt="" />
			</div>
			<p>
				<span class="mot1">Veuillez</span><span class="mot2"> patienter </span
				><span class="mot3">quelques </span>
				<span class="mot4">instants... </span>
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	async mounted() {
		const response = await axios.post("/api/test/verifs", {
			userId: localStorage.getItem("othersecret"),
		});
		setTimeout(() => {
			if (response.data == "no") {
				this.$router.push("/home");
			} else if (response.data == "yes") {
				this.$router.push("compte");
			} else {
				this.$router.push("/");
			}
		}, 4000);
	},
};
</script>

<style scoped>
body {
	margin: 0 !important;
}
.loader img {
	width: 100%;
	margin: 0 auto;
}

.loader {
	background-color: #fecd45;
}
span {
	display: inline-block;
	color: #2568fb;
}
.cont_child {
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 40%;
	background-color: #fecd45;
}

.mot1 {
	animation: gros 1.5s 1s linear infinite;
}
.mot2 {
	animation: gros 2.2s 1.5s linear infinite;
}
.mot3 {
	animation: gros 2.3s 2.5s linear infinite;
}
.mot4 {
	animation: gros 2.4s 3.5s linear infinite;
}
@keyframes gros {
	0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1.2);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0);
	}
}
.cont_child p {
	display: flex;
	justify-content: center;
	gap: 8px;
}
@media all and (min-width:426px)  {
	.container_transit{
		width: 400px;
		margin: auto;
	}
}
</style>
