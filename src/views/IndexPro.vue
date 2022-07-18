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

      <Side-Bar @closeAllBar="ToggleBar()" ref="toggleElement3" />
    </div>

    <!--advert section-->
    <div class="grid-container">
      <div class="col-sm-5">
        <div class="ads-h4">Start chatting with customers, anytime, anywhere with Apex</div>
        <div class="ads-p">Great software that allows you to chat from any place at any time without any interruption.
        </div>
        <Custom-Button btnProp="btn-orange btn-56 smaller-pd" icon="icon" title="Start Chatting Now" class="my-4" />
        <Custom-Img />
      </div>
      <div class="col-sm-7">
        <div class="reading-text">
          <img src="@/assets/appexpng.png" alt="">
        </div>
      </div>
    </div>

    <!-- features -->
    <section class="features">
      <div class="features-header">Features for a better experience</div>
      <div class="row">
        <div class="col-sm-4 smaller-screen-center">
          <Feature-Item image="danger" title="Video messaging"/>
        </div>
        <div class="col-sm-4 smaller-screen-center">
          <Feature-Item image="success" title="Save your time"/>
        </div>
        <div class="col-sm-4 smaller-screen-center">
          <Feature-Item image="orange" title="Keep safe & private"/>
        </div>
      </div>
    </section>
  </div>

  <!-- live chat -->
  <section class="live-chat">
    <Live-Chat />
  </section>

  <!-- start selling -->
  <section class="live-chat">
    <Start-Selling />
  </section>

  <!-- Get Direct Order -->
  <section class="live-chat">
    <Get-Direct-Order />
  </section>

  <!-- Client quotes -->
  <section class="live-chat">
    <Client-Qutes />
  </section>

  <!-- Client quotes -->
  <section class="live-chat">
    <Gen-Footer />
  </section>
</template>

<script>
import CustomButton from "@/components/primary/Button.vue";
import CustomImg from "@/components/secondary/CustomImg.vue";
import SideBar from "@/layout/Layout.vue";
import FeatureItem from "@/components/secondary/FeaturesItem.vue";
import LiveChat from "@/components/secondary/LiveChat.vue";
import StartSelling from "@/components/secondary/StartSelling.vue";
import GetDirectOrder from "@/components/secondary/GetDirectOrder.vue"
import ClientQutes from "@/components/secondary/ClientQuote.vue"
import GenFooter from "@/components/secondary/GenFooter.vue"
export default {
  name: "LandingPage",
  components: {
    CustomButton,
    SideBar,
    CustomImg,
    FeatureItem,
    LiveChat,
    StartSelling,
    GetDirectOrder,
    ClientQutes,
    GenFooter
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
    margin: 38px -15px 0px -15px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

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

  .features {
    margin: 80px 0 65px 0;
    .features-header {
      font-family: 'U8';
      font-style: normal;
      font-weight: 700 !important;
      font-size: 36px;
      line-height: 56px;
      text-align: center;
      color: #1B1C20;
      margin-bottom: 46px;
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
  }

  ul, .smaller-screen {
      z-index: 4;
      animation-duration: 1.5s;
      animation-name: fadein;
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
  .grid-container {
      margin: 8px 0 !important;
  }
  .ads-h4 {
    margin: 54.94px 0 15px 0 !important;
  }
  .ads-p {
    margin: 0 0 25px 0 !important;
  }
  .reading-text {
    padding: 0 0 0 0em !important;

    img {
      width: 100%;
    }
  }
}

@media (max-width: 851px) {
  .features-header {
      font-size: 32px;
      line-height: 40px;
  }
}

@media (max-width: 627px) {
  .smaller-screen-center {
    display: flex;
    justify-content: center !important;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 3;
  }
}
</style>