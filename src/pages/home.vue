<template>
  <div class="">
    <flight-number-search/>
    <div class="md-layout md-elevation-1"
        v-for="(flightStatus, index) in this.flightStatusResponses" :key="index">
      <flight-status-list-item :flightStatus="flightStatus"/>
    </div>
    <pagination/>
  </div>
</template>

<script>
import getFlightStatus from "../lib/getFlightStatus";

export default {
  components: {
    flightStatusListItem: () => import ('../components/flight-status-list-item/flight-status-list-item.vue'),
    flightNumberSearch: () => import('../components/flight-number-search/flight-number-search.vue'),
    pagination: () => import('../components/pagination/pagination.vue')
  },
  data() {
    return {
      flightStatusResponses: null,
      page: null
    }
  },
  mounted() {
    this.getFlightStatusResponses()
  },
  methods: {
    getFlightStatusResponses() {
      getFlightStatus().then(res => {
        const response = res.data
        console.log(response.operationalFlights)
        this.flightStatusResponses = response.operationalFlights
        this.page = response.page
      }).catch()
    }
  },
}
</script>
