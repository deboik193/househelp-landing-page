<template>
  <div class="footer">
    <div class="contentner">
      <div class="nav justify-content-center text-center">
        <div class="footer-header">Ready to grow your business? Start with Apex, become faster every second</div>
      </div>

      <div class="text-center">
        <Custom-Button btnProp="btn-orange btn-56 smaller-pd" title="Start Chatting Now" class="my-4" />
      </div>

      <div class="nav justify-content-between">
        <div>
          <img src="@/assets/logo.png" alt="">
        </div>
        <ul>
          <li class="nav-list" v-for="items in BarList" :key="items.id">{{items.title}}</li>
        </ul>
        <div class="nav">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>

      <div class="horizontal-rule"></div>
      <div class="copy-right-logo justify-content-between nav">
        <div class="copy-right">© Copyright 2022, All Rights Reserved</div>
        <div class="copy-right">Privacy Policy Terms & Conditions</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/primary/Button.vue";
export default {
  name: "GenFooter",
  components: {
    CustomButton
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
}
</script>
<style lang="scss" scoped>


.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 36px;
  margin-bottom: 131px;
}

.footer {
  width: 1600px;
  background: #F8F8FA;
  padding-top: 105px;
  .footer-header {
    width: 739px;
    font-family: 'U8';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #1B1C20;
  }

  .nav {
    display: flex;
  }

  .nav-list {
    font-style: normal;
    font-weight: 500 !important;
    font-size: 17px;
    line-height: 30px;
    color: #1B1C20;
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

  .fab {
    color: #FD6003;
    align-self: center;
    margin-right: 34.39px;
    font-size: 16px;
    cursor: pointer;
  }

  .horizontal-rule { 
      width: 1296px;
      border: 1px solid #D4D4D8;
  }

  .copy-right-logo {
    margin-top: 33px;
    margin-bottom: 40px;
  }

  .copy-right {
    width: 280px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #797B89;
  }

} 
</style>