<template>
  <div class="md-layout" @click="isActive=!isActive">
    <div :class="isActive ? 'is-active' : ''"
          class="flight-status-list__item md-elevation-1">
      <h2>Flight number: {{flightStatus.flightNumber}}</h2>
      <h2>From: {{flightStatus.route[0]}} To: {{flightStatus.route[1]}}</h2>
      <h2>Airline Code: {{flightStatus.airline.code}}</h2>
      <div
        :class="isDelayed
          ? 'flight-status-list__item-is-delayed' : ''
          || isOntime
          ? 'flight-status-list__item-is-ontime' : ''">
        <h3>Status: {{flightStatus.flightStatusPublic}}</h3>
      </div>
    </div>
    <div :class="isActive ? 'shown' : 'hidden'"
          class="flight-status-list__item-description md-layout-item md-elevation-1"
          v-for="(flightLeg, index) in flightStatus.flightLegs" :key="index">
      <span class="title-big">Aircraft: {{flightLeg.aircraft.typeName}}</span>
      <div class="flex-colum">
        <span class="title title-underlined">Departure</span>
        <span class="subtitle">From: {{flightLeg.departureInformation.airport.city.name}}</span>
        <span class="subtitle">Scheduled time: {{flightLeg.departureInformation.times.scheduled}}</span>
      </div>
      <div class="flex-colum">
        <span class="title title-underlined">Arrival</span>
        <span class="subtitle">To: {{flightLeg.arrivalInformation.airport.city.name}}</span>
        <span class="subtitle">Estimated time: {{flightLeg.arrivalInformation.times.estimated.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flightStatus: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOntime: false,
      isDelayed: false,
      isActive: false
    }
  },
  mounted() {
    this.checkPublicFlightStatus();
  },
  updated() {
    this.checkPublicFlightStatus();
  },
  methods: {
    checkPublicFlightStatus() {
      this.isOntime = this.flightStatus.flightStatusPublic === 'ON_TIME' ||
                      this.flightStatus.flightStatusPublic === 'DEPARTED' ||
                      this.flightStatus.flightStatusPublic === 'IS_ARRIVED' ?
                      true : false;
      this.isDelayed = this.flightStatus.flightStatusPublic === 'DELAYED_DEPARTURE' ||
                      this.flightStatus.flightStatusPublic === 'CANCELLED' ?
                      true : false;
    }
  }
}
</script>
