<template>
  <div class="live-chat">
    <div class="contentner">
      <div class="row live-height ">
        <div class="col-sm-6 live-chat-content">
          <img src="@/assets/getOrder.png" alt="">
        </div>
        <div class="col-sm-6 live-chat-content">
          <div class=" padding-left">
            <div class="live-header">Get direct orders from your customers</div>
            <div class="live-p">Create custom landing pages with Rareblocks that converts more visitors than any
              website. With lots of unique blocks easily build a page. There are many variations of passages of
              available.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.live-chat {
    background: #F8F8FA;
    margin-bottom: 50px;

    .live-height {
      height: 645px;
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
      width: 499px;
    }

    .live-p {
      margin-top: 43px;
      width: 498px;
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