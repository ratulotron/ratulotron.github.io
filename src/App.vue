<template>
  <div class="main">
    <SiteHeader />
    <section class="content">
      <LeftColumn />
      <RightColumn />
    </section>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import LeftColumn from './components/LeftColumn.vue'
import RightColumn from './components/RightColumn.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    LeftColumn,
    RightColumn
  }
}
</script>
