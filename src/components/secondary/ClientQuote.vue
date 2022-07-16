<template>
    <div class="backgroundImage">
        <div>
            <div class="quote-h3">Our blessed client said about us 😍</div>
            <div class="row">
                <div class="col-sm-6">
                    <Quote-Card class="card-space" />
                    <div class="justify-content-center">
                        <img src="@/assets/Photo.png" alt="">
                        <div class="customer">
                            <div class="customer-name">Wade Warren</div>
                            <div class="customer-title">CEO, ABC Corporation</div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">
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
</template>

<script>
import QuoteCard from "@/components/primary/Card.vue"
export default {
    components: {
        QuoteCard
    }

}
</script>
<style lang="scss" scoped>


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

.card-space {
    margin-right: 95.33px;
}
.backgroundImage {
    background-image: url('@/assets/orangebg.png');
    background-size: cover;
    background-repeat: none;
    justify-content: center;
    display: flex;
    padding-bottom: 63px;

    .quote-h3 {
        // width: 446px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 84px;
        margin-bottom: 74px;
    }    
}
</style>