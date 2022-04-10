<template>
	<div>
		<h2>hello</h2>
	</div>
</template>

<script>
import axios from "axios";
export default {
	created() {
		const response = axios.post("/api/test/verifications", {
			userId: localStorage.getItem("othersecret"),
		});
		if (response.data == "yes") {
			this.$router.push("/compte");
		} else if (response.data == "no") {
			this.$router.push("home");
		} else {
			this.$router.push("/");
		}
	},
};
</script>

<style></style>
