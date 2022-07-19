<template>
    <div class="feature-card">
        <div class="row">
            <div class="col-sm-3">
                <div class="feature-img-margin">
                    <img :src="require(`@/assets/${image}.png`)" alt="">
                </div>
            </div>
            <div class="col-sm-9">
                <div class="feature-h3">{{title}}</div>
                <div class="feature-p">This software is very easy for you to manage. You can use it as you wish.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "FeatureItem",
props: ['image', 'title']
}
</script>

<style lang="scss" scoped>

.feature-card {
    max-width: 416px;
    margin-right: 10px;
    height: 153px;
    background: #FFFFFF;
    border-radius: 5px;

    .feature-h3 {
        font-family: 'U8';
        font-style: normal;
        font-weight: 700 !important;
        font-size: 21px;
        line-height: 33px;
        color: #1B1C20;
    }

    .feature-p {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 16px;
        line-height: 24px;
        color: #383A47;
        height: 48px;
        margin: 12px 5px 0px 0;
    }
}

@media (max-width: 851px) {

    .feature-h3 {
        font-weight: 500 !important;
        font-size: 22px !important;
        margin-left: 15px;
    }

    .feature-p {
        margin-left: 15px !important;
    }
    
}

@media (max-width: 627px) {
.feature-card {
    text-align: center;
    margin-bottom: 25px;
    max-width: 416px;
    margin-right: 0;
    background: #FFFFFF;
    border-radius: 5px;
}
}
</style>