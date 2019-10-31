<template>
	<form class="flight-search" @submit.prevent="searchOnFlightNumber()">
		<div class="flight-search__centerd">
			<div class="flight-search__label-container">
				<label class="flight-search__label">
					<span>Search on flight number:</span>
					<input type="number" placeholder="Search flight number for example 1943" v-model.number="flightNumber" required>
				</label>
				<label class="flight-search__label">
					<span>Airline Code:</span>
					<input type="text" placeholder="Airline code for example 'KL'" v-model="airlineCode" required>
				</label>
			</div>
			<div class="flight-search__button-group">
				<button type="submit">Search</button>
				<button @click="resetResults">Reset results</button>
			</div>
		</div>
	</form>
</template>

<script>
import getFlightStatus from "../../lib/getFlightStatus";

export default {
	data() {
		return {
			flightNumber: null,
			airlineCode: '',
		}
	},
	methods: {
		searchOnFlightNumber() {
			 getFlightStatus(this.flightNumber, this.airlineCode.toUpperCase()).then(res => {
				const response = res.data
				this.$parent.$emit("renderResults", response.operationalFlights)
			}).catch()
		},
		resetResults() {
			this.$parent.$emit("resetResults")
		}
	}
}

</script>
