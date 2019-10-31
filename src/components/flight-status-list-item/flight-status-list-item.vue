<template>
  <div class="md-layout-item md-layout" @click="isActive=!isActive">
    <div :class="isActive ? 'is-active' : ''"
          class="flight-status-list__item md-elevation-1">
      <h3>
        Flight number: {{flightStatus.flightNumber}}
        From: {{flightStatus.route[0]}}
        To: {{flightStatus.route[1]}}
        Status: {{flightStatus.flightStatusPublic}}
        Airline code: {{flightStatus.airline.code}}
      </h3>
    </div>
    <div :class="isActive ? 'shown' : 'hidden'"
          class="flight-status-list__item-description  md-elevation-1"
          v-for="(flightLeg, index) in flightStatus.flightLegs" :key="index">
      <h4>aircraft: {{flightLeg.aircraft.typeName}}</h4>
      <div>
        <h3>departure</h3>
        <h4></h4>
      </div>
      <div>
        <h3>arrival</h3>
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
      isActive: false
    }
  },
}
</script>
