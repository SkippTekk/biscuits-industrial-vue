<template>
  <Title />
  <p></p>
  url is {{ $route.params.id }}
</template>
<script>
// @ is an alias to /src
import Biscuits from '@/templates/Biscuits.vue'
import Title from '@/templates/Title.vue'

export default {
  name: 'HomeView',
  components: {
    Title,
    Biscuits
  }
}
</script>