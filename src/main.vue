<template>
  <div>
    <navigation-bar></navigation-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    navigationBar: () => import('./components/navigation-bar/navigation-bar.vue')
  }
}
</script>
