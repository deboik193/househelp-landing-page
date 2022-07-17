<template>
    <div class="backgroundImage">
        <div class="contentner">
            <div class="quote-h3 justify-content-center">
                <div class="quote-h3-height"> Our blessed client said about us 😍</div>
            </div>
            <div class="row">
                <div class="col-sm-6 ">
                    <div class="card-space">
                        <Quote-Card />
                        <div class="justify-content-center" style="padding-bottom: 24px;">
                            <img src="@/assets/Photo.png" alt="">
                            <div class="customer">
                                <div class="customer-name">Wade Warren</div>
                                <div class="customer-title">CEO, ABC Corporation</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card-space-rl">
                        <Quote-Card />
                        <div class="justify-content-center">
                            <img src="@/assets/Photo1.png" alt="">
                            <div class="customer">
                                <div class="customer-name">Esther Howard</div>
                                <div class="customer-title">CEO, ABC Corporation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteCard from "@/components/primary/Card.vue";
export default {
    name: "ClientQuote",
    components: {
        QuoteCard
    }

}
</script>
<style lang="scss" scoped>



.card-space {
    padding-right: 7px;
}

.card-space-rl {
    margin-left: auto;
}

.justify-content-center {
    display: flex;
    justify-content: center;
    margin-top: 31.72px;
}

.customer {
    color: #FFF;
    margin-left: 17.78px;
}

.customer-title {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}

.customer-name {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
}

.backgroundImage {
    background-image: url('@/assets/orangebg.png');
    background-size: cover;
    background-repeat: none;
    justify-content: center;
    display: flex;
    padding-bottom: 63px;

    .quote-h3 {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 84px;
        margin-bottom: 74px;
        .quote-h3-height {
            width: 446px;
        }
    }    
}

@media (max-width: 628px) {
        .quote-h3 {
            font-family: 'U8' !important;
            font-style: normal;
            font-weight: 700;
            font-size: 30px !important;
            margin-top: 40px !important;
            margin-bottom: 30px !important;
            line-height: 40px !important;
    
            .quote-h3-height {
                width: 275px !important;
            }
        }
}
</style>