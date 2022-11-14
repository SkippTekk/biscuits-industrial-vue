<template>
  <html>
    <head>
        <Head />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      <title> <Title /> </title>
    </head>
    <body>
        <Biscuits />
      <nav class='navbar navbar-expand-lg bg-light'>
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
  name: 'HomeView',
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
