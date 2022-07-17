<template>
    <div>
        <div class="quote-card">
            <div class="quote-card-title">“Incredible Experience”</div>
            <div class="quote-card-p">We had an incredible experience working with Mixland and were impressed they
                made such a big difference in only three weeks. Our team is so grateful for the wonderful
                improvements they made and their ability to get familiar with the concept so quickly.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuoteCard",
    data() {
        return {
            carret: '231px',
        }
    },
}
</script>

<style lang="scss" scoped>


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

    @media (max-width: 1416px) {
        .quote-card {
            width: 100%;
            background: #fff;
            border-radius: 11.1111px;
        }
    }

    @media (max-width: 628px) {
.quote-card {

    .quote-card-title {
        font-size: 18px !important;
        line-height: 26px !important;
        padding-top: 26px !important;
        margin-bottom: 10px !important;
    }

    .quote-card-p {
        font-size: 16px !important;
        line-height: 24px !important;
        padding: 0 16px 14.31px 16px !important;
    }
}
}
</style>