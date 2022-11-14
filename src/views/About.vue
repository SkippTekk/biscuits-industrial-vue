<template>
  <Biscuits />
  Hosted website uptime is:  uptime <p></p>
  Average server load:  load <p></p>
  Server Operating system is: type <p></p>
  Server memory left:  memoryLeft  /  memoryTotal 
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