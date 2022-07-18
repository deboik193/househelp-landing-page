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
            <div class="kplus-space d-flex">
              <div class=" d-flex k-space">
                <div class="kplus">4.3K+</div>
                <div class="ksmall">Website’s Powering</div>
              </div>
              <div class=" d-flex">
                <div class="kplus">7M+</div>
                <div class="ksmall">Chats in Last 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "GetOrder"
}
</script>

<style lang="scss" scoped>

.d-flex {
  display: flex;
}

.live-chat {
    background: #F8F8FA;

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
.kplus-space {
  margin-top: 67px;

  .k-space {
    margin-right: 35px;
  }
  .kplus {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 42px;
      line-height: 56px;
      color: #1B1C20;
      margin-right: 22px;
    }

    .ksmall {
      width: 77px;
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #383A47;
    }
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