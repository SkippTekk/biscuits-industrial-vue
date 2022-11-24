<template>
  <html lang="en">
    <Title />
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<link href="css/bootstrap.css" rel="stylesheet">

   <body>
    <Biscuits />
    <Announcement />
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Navbar />
      </nav>
        <Announcment />
      <section class='container-fluid'>
        <div class='row'>
          <div class='col order-1'>
            <Leftbar />
          </div>
          <div class='col order-2'>
            <Middlebar />
          </div>
          <div class='col order-3'>
            <Rightbar />
          </div>
        </div>
          <div>
            <Footer />
          </div>
        </section>
 </body>
     </html>
</template>
<script>
// @ is an alias to /src
import Biscuits from '@/templates/Biscuits.vue'
import Title from '@/templates/Title.vue'
import Announcement from '@/content/Announcement.vue'
import Navbar from '@/Ships/Navbar.vue'
import Footer from '@/content/Footer.vue'
import Leftbar from '@/Ships/Leftbar.vue'
import Middlebar from '@/Ships/Middlebar.vue'
import Rightbar from '@/Ships/Rightbar.vue'

export default {
  name: 'Ships',
  components: {
    Title,
    Biscuits,
    Navbar,
    Footer,
    Leftbar,
    Middlebar,
    Rightbar,
    Announcement
}
}
</script>