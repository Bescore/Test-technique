<template>
	<div>
		<h2>hello</h2>
	</div>
</template>

<script>
import axios from "axios";
export default {
	async created() {
		const response = await axios.post("/api/test/verifs", {
			userId: localStorage.getItem("othersecret"),
		});
		if (response.data == "no") {
			this.$router.push("/home");
		} else if (response.data == "yes") {
			this.$router.push("compte");
		} else {
			this.$router.push("/");
		}
	},
};
</script>

<style></style>
