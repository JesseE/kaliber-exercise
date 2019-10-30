<template>
  <div class="flight-status-list-item md-layout-item " @click="isActive=!isActive">
    <div :class="isActive ? 'is-active' : ''" class="md-small-size-100 md-medium-size-45">
      <h3>
        Flight number: {{flightStatus.flightNumber}}
        From: {{flightStatus.route[0]}}
        To: {{flightStatus.route[1]}}
        Status: {{flightStatus.flightStatusPublic}}</h3>
    </div>
    <div :class="isActive ? 'shown' : 'hidden'" class="md-layout-item md-small-size-100 md-medium-size-40"
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
