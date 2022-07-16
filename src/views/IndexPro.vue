<template>
  <div class="contentner">

    <!-- apex navbar -->
    <div class="nav justify-content-between">
      <div>
        <img src="@/assets/logo.png" alt="">
      </div>

      <ul class="hideOnLargeScreen" ref="toggleElement1">
        <li class="nav-list" v-for="items in BarList" :key="items.id">{{items.title}}</li>
      </ul>

      <div class="smaller-screen hideOnLargeScreen" ref="toggleElement2">
        <Custom-Button btnProp="btn-black btn-50 smaller-pd" title="Login" class="mx-3 block" />
        <Custom-Button btnProp="btn-orange btn-50 smaller-pd" title="Get Started Free" class="block" />
      </div>

      <div class="menu" @click="ToggleSideBar()">
        <i class="fas fa-bars" ref="toggleElement4"></i>
      </div>


    </div>



  </div>
</template>

<script>

export default {
  name: "LandingPage",
  components: {

  },

  data() {
    return { 
      BarList: [
        { title: "Demo" }, 
        { title: "About" }, 
        { title: "Blog" },
        { title: "Pages" },
        { title: "Contact" }
      ]
    }
  },

  methods: {
    ToggleSideBar() {
      this.$refs.toggleElement1.classList.toggle("hideOnLargeScreen")
      this.$refs.toggleElement2.classList.toggle("hideOnLargeScreen")
      this.$refs.toggleElement3.$el.classList.toggle("d-none")
      this.$refs.toggleElement4.classList.toggle("d-none")
    },

    ToggleBar() {
      this.$refs.toggleElement1.classList.toggle("hideOnLargeScreen")
      this.$refs.toggleElement2.classList.toggle("hideOnLargeScreen")
      this.$refs.toggleElement3.$el.classList.toggle("d-none")
      this.$refs.toggleElement4.classList.toggle("d-none")
    }
  }
};
</script>

<style lang="scss" scoped>


@font-face {
  font-family: 'U8';
  src: url('@/assets/U8-Regular.ttf') format('truetype');
  /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

.mx-3 {
  margin: 0 0.5em;
}

.d-none {
  display: none !important;
}

.my-4 {
  margin: 0 0 114px 0; 
}

.contentner {

  .nav-list {
    font-style: normal;
    font-weight: 500 !important;
    font-size: 16px;
    line-height: 24px;
    color: #1B1C20;
  }
  
  .menu {
    display: none ;
  }
  .nav {
    display: flex;
  }
  ul {
    display: flex;
  }

  ul>li {
    margin: 0 20px;
    list-style-type: none;
    cursor: pointer;
  }

  ul>li:hover {
    color: #FB8E0B;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .justify-content-around {
    justify-content: space-around;
  }

  .grid-container {
    margin: 38px -15px 80px -15px;

    .ads-h4 {
      width: 509px;
      height: 180px;
      font-family: 'U8' !important;
      font-style: normal;
      font-weight: 700 !important;
      font-size: 50px;
      line-height: 60px;
      color: #1B1C20;
      margin: 88.56px 0 0 0;
    }

    .ads-p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #383A47;      
      mix-blend-mode: normal;
      opacity: 0.8;
      width: 440px;
      height: 64px;
      margin: 29px 0;
    }

    .reading-text{
      padding: 0 0 0 5em;
    }
  } 
}

@media (max-width: 1129px) {
  .ads-h4 {
      width: 509px;
      height: 120px;
      font-weight: 700 !important;
      font-size: 45px !important;
    }

    .contentner {
      margin-right: 10px !important;
    }
}

@media (max-width: 1043px) {
  .mx-3 {
    margin: 0 !important;
  }
}

@media (max-width: 952px) {
  .my-4 {
      margin: 0 0 36.5px 0 !important;
    }
    .contentner {
      margin-left: 6% !important;
    }
  
  .ads-h4 {
    width: 343px !important;
    height: 147px !important;
    font-size: 34px !important;
    line-height: 49px !important;
  }

  .ads-p {
    width: 318px !important;
    height: 96px !important;
    margin: 29px 0;
  }

  ul, .smaller-screen {
      z-index: 4;      
  }

  .smaller-screen {
    position: absolute;
    right: 128px;
    top: 40%;
  }

  .smaller-screen, .block {
    display: block;
  }

  .smaller-screen, .mx-3 {
    margin: 0 0 15px 0 !important;
  }

  li {
      height: 36px;
  }

  ul {
    display: block !important;
    position: absolute;
    right: 190px;
    top: 8%;
  }

    .hideOnLargeScreen {
      display: none !important;
    }

  .menu {
      cursor: pointer;
      display: block !important;
  }
}

@media (max-width: 627px) {

  .ads-h4 {
    margin: 50px 0 !important;
  }
}

@media (max-width: 575px) {
  .reading-text {
        padding: 0 0 0 0em !important;
    img {
      width: 100%;
    }
  }
}

</style>