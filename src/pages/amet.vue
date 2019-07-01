<template>
  <div>
    <page-header></page-header>
    <text-block></text-block>
  </div>
</template>

<script>
export default {
  components: {
    pageHeader: () => import('../components/page-header/page-header.vue'),
    textBlock: () => import('../components/text-block/text-block.vue')
  }
}
</script>
