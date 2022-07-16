<template>
  <div class="live-chat">
    <div class="row live-height ">
      <div class="col-sm-6 live-chat-content justify-content-center">
        <img src="@/assets/livechat1.png" alt="">
      </div>
      <div class="col-sm-6 live-chat-content">
        <div class="live-header">Meet your customers, g with live video chat</div>
        <div class="live-p">Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</div>
        <div class="live-p-2">Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct
          deposits</div>
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
      height: 585px;
    }

    .justify-content-center {
      display: flex;
      justify-content: center;
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
      width: 511px;
    }

    .live-p {
      margin-top: 43px;
      width: 440px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: #383A47;
    }

    .live-p-2 {
      margin-top: 26px;
      width: 431px;
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

</style>