<template>
    <div class="">
        <img src="@/assets/firstImg.png" alt="" class="abs-mg-1">
        <img src="@/assets/secondImg.png" alt="" class="abs-mg-2">
        <img src="@/assets/thirdImg.png" alt="" class="abs-mg-3">

        <div class="custome-rate">
            <div class="d-flex">
                <div class="mobile-space">
                    <div class="custom-price">2,291</div>
                    <div class="customer-info">Happy Customers</div>
                </div>
                <div class="horizontal-rule"></div>
                <div>
                    <div class="custom-percent">
                        4.8/5
                    </div>
                    <div class="custom-rating">
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star rate-color"></i>
                        <span class="rate-space">Rating</span>
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



img {
    width: 60.52px !important;
    position: absolute !important;

}
.abs-mg-1  {
    z-index: 2;
    left: 1;
    
}
.abs-mg-2  {
    left: 7.3%;
    z-index: 1;
}
.abs-mg-3 {
    left: 15%;
}

.custome-rate {
    margin: 0 0 0 155px;
    .custom-price {
        font-style: normal;
        font-weight: 700 !important;
        font-size: 30px;
        line-height: 42px;
        letter-spacing: -1px;
        color: #1B1C20;
    }

    .customer-info {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 16px;
        line-height: 24px;        
        color: #383A47;        
        mix-blend-mode: normal;
        opacity: 0.6;
    }

    .horizontal-rule {
        height: 36px;
        border: 1px solid #1B1C20;
        margin: 0 17px;
        align-self: center !important;
    }

    .custom-percent {
        font-style: normal;
        font-weight: 700 !important;
        font-size: 30px;
        line-height: 42px;
        letter-spacing: -1px;
        color: #1B1C20;
    }
    .custom-rating {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
       
        .rate-color {
            color: #5B7486;
            mix-blend-mode: normal;
            opacity: 0.3;
        }

        .rate-space {
            margin: 0 10px;
            color: #383A47;
            mix-blend-mode: normal;
            opacity: 0.6;
        }

        .checked {
            color: #FFC947;
        }
    }

    .d-flex {
        display: flex;
    }
}

@media (max-width: 1129px) {
    .custom-percent {
        font-size: 27px !important;
    }
    .custom-rating {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px !important;
        line-height: 24px;
    }

    .custom-price {
        font-size: 27px !important;
    }

    .customer-info {
        font-size: 12px !important;
    }
}

@media (max-width: 825px) {
    .horizontal-rule {
        height: 0px !important;
        border: 1px solid #1B1C20;
        margin: 0 50% 0 5% !important;
        align-self: center !important;
    }
    .d-flex {
        display: inline !important;
    }
}


@media (max-width: 627px) {
    .custome-rate {
        margin: 0 0 0 0px;
        .mobile-space {
        margin: 0 0 0 155px;
        }
        .horizontal-rule {
            height: 0px !important;
            border: 1px solid #1B1C20;
            margin: 0 90% 0 0% !important;
            align-self: center !important;
        }
        .d-flex {
            display: inline !important;
        }
    }
}
</style>