<template>
    <div>
        <div class="quote-card">
            <div class="quote-card-title">“Incredible Experience”</div>
            <div class="quote-card-p">We had an incredible experience working with Mixland and were impressed they
                made such a big difference in only three weeks. Our team is so grateful for the wonderful
                improvements they made and their ability to get familiar with the concept so quickly.</div>
        </div>
        <i class="fas fa-caret-down"></i>
    </div>
</template>

<script>
export default {
    name: "QuoteCard",
}
</script>

<style lang="scss" scoped>

.fas,.fa-caret-down {
position: absolute;
    width: 26.67px;
    height: 16.44px;
    left: 286.67px;
    top: 231px;
    font-size: 34px;
    color: #fff;
}

    .quote-card {
        width: 600px;
        background: #fff;
        border-radius: 11.1111px;

        .quote-card-title {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            color: #FD6003;
            padding-top: 31.55px !important;
            margin-bottom: 15.45px;
        }

        .quote-card-p {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: #383A47;
            mix-blend-mode: normal;
            opacity: 0.7;
            padding: 0 50px 29.44px 49px;
        }
    }
</style>