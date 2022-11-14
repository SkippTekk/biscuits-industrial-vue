<template>
  <html lang="en">
    <Title />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<link href="./css/bootstrap.css" rel="stylesheet">

   <body>
    <Biscuits />
<!-- script goes here from mike-->


<!-- Footsie for the footer-->

 </body>
     </html>
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