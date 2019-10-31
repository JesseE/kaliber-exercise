<template>
  <div class="main-content">
    <flight-number-search/>
    <div class="flights"
        v-for="(flightStatus, index) in this.flightStatusResponses" :key="index">
      <flight-status-list-item :flightStatus="flightStatus"/>
    </div>
  <pagination :currentPageNr="this.page.pageNumber"/>
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
      page: 0
    }
  },
  created() {
    this.$on('renderResults', this.renderResults)
    this.$on('resetResults', this.getFlightStatusResponses)
    this.$on('incrementPageNumber', this.incrementPageNumber)
    this.$on('decrementPageNumber', this.decrementPageNumber)
  },
  mounted() {
    this.getFlightStatusResponses()
  },
  methods: {
    getFlightStatusResponses() {
      getFlightStatus().then(res => {
        const response = res.data
        this.page = response.page
        return this.flightStatusResponses = response.operationalFlights
      }).catch(err => console.error(err))
    },
    incrementPageNumber() {
      let pageNumber = this.page.pageNumber + 1
      const flightNumber = null
      const airlineCode = null

      getFlightStatus(flightNumber, airlineCode, pageNumber).then(res => {
        const response = res.data
        this.page = response.page
        window.scrollTo(0,0)
        return this.flightStatusResponses = response.operationalFlights
      }).catch(err => console.error(err))
    },
    decrementPageNumber() {
      if(this.page.pageNumber != 0) {
        let pageNumber = this.page.pageNumber - 1
        const flightNumber = null
        const airlineCode = null

        getFlightStatus(flightNumber, airlineCode, pageNumber).then(res => {
          const response = res.data
          this.page = response.page
          window.scrollTo(0,0)
          return this.flightStatusResponses = response.operationalFlights
        }).catch(err => console.error(err))
      }
    },
    renderResults(operationalFlights) {
      return this.flightStatusResponses = operationalFlights
    }
  }
}
</script>
