<template>
  <div>
    <page-header/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    pageHeader: () => import('./components/page-header/page-header.vue')
  }
}
</script>
