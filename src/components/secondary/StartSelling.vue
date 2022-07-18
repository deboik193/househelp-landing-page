<template>
  <div class="live-chat">
    <div class="contentner">
      <div class="row flex-wrap live-height ">
        <div class="col-sm-6 live-chat-content">
          <div class=" padding-left">
            <div class="live-header">Start selling directly inside conversations</div>
            <div class="live-p-2">There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered all injected humour or randomised words which don't look even slightly believable. </div>
          </div>
          <Custom-Button btnProp="btn-orange btn-56 smaller-pd" title="Start Chatting Now" class="my-4" />
        </div>
        <div class="col-sm-6 live-chat-content">
          <img src="@/assets/startselling.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/primary/Button.vue";

export default {
  name: "StartSelling",
  components: {
      CustomButton
  }
}
</script>

<style lang="scss" scoped>
.my-4 {
  margin-top: 40px;
}

.live-chat {
  background: #fff;

  // .col-sm-6 {
  //   -ms-flex: 0 0 50%;
  //   flex: 0 0 50%;
  //   max-width: 50%;
  // }

  .live-height {
    height: 639px;
  }

  img {
    width: 100;
  }

  .live-header {
    font-family: 'U8';
    font-style: normal !important;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #1B1C20;
    width: 518px;
  }

  .live-p-2 {
    margin-top: 26px;
    width: 492px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #383A47;
  }
  .live-chat-content {
    align-self: center !important;
  }
}

@media (max-width: 627px) {
  .live-height {
      height: auto !important;
      padding: 36.74px 0 46.99px 0;
    }

    .flex-wrap {
      display: flex;
      flex-wrap: wrap-reverse !important;
    }

    .live-header {
      margin-top: 36px;
      width: fit-content !important;
      font-size: 32px !important;
      line-height: 40px !important;
    }

    .live-p {
      width: fit-content !important;
      margin-top: 28px !important;
    }

    .live-p-2 {
      width: fit-content !important;
      margin-top: 12px !important;
    }

    img {
      width: 100%;
    }

}

@media (max-width: 1228px) {
  .live-header {
      width: fit-content !important;
    }
    .padding-left {
      padding: 15px !important;
    }
    .live-p {
      width: fit-content !important;
    }

    .live-p-2 {
      width: fit-content !important;
    }
    img {
      width: 100%;
    }
}

@media (max-width: 1008px) {

    .live-height {
        height: auto !important;
        padding: 36.74px 0 46.99px 0;
      }
    
      .live-header {
        margin-top: 36px;
        width: fit-content !important;
        font-size: 28px !important;
        line-height: 40px !important;
      }
    
      .live-p {
        width: fit-content !important;
        margin-top: 28px !important;
      }
    
      .live-p-2 {
        width: fit-content !important;
        margin-top: 12px !important;
      }
    
      img {
        width: 100%;
      }
  
}
    
</style>