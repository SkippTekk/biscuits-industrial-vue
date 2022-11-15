<template>
  <html>
    <head>
        <Head />
      <title> <Title /> </title>
    </head>
    <body>
        <Biscuits />
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Navbar />
      </nav>
        <Announcment />
      <section class='container-fluid'>
        <div class='row'>
          <div class='col order-1'>
            <LeftBar />
          </div>
          <div class='col order-2'>
            <MiddleSection />
          </div>
          <div class='col order-3'>
            <RightSection />
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
import Head from '@/templates/Head.vue'
import Title from '@/templates/Title.vue'
import Biscuits from '@/templates/Biscuits.vue'
import Navbar from '@/templates/Navbar.vue'
import Announcment from '@/content/Announcement.vue'
import LeftBar from '@/templates/LeftBar.vue'
import MiddleSection from '@/templates/MiddleSection.vue'
import RightSection from '@/templates/RightSection.vue'
import Footer from '@/content/Footer.vue'

export default {
  name: 'Home',
  components: {
    Biscuits,
    Head,
    Title,
    Navbar,
    Announcment,
    LeftBar,
    MiddleSection,
    RightSection,
    Footer
  }
}
</script>
