<template>
  <div class="main">
    <nav-list :base='base' :list='list'></nav-list>
    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import NavList from '../../components/navList/'
  import list from '../../config/router.json'
  export default {
    data () {
      let base = /^\/desktop/.test(this.$route.fullPath) ? 'desktop' : 'mobile'
      return {
        base: '/' + base + '/assets',
        list: list[base].assets
      }
    },
    components: {
      NavList
    }
  }

</script>
