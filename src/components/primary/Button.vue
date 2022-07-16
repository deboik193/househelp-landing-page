<template>
    <button class="btn" :class="btnProp">
       {{title}}
        <i class="fas fa-arrow-right" v-if="icon"></i>
    </button>
</template>

<script>
export default {
    name: "CustomButton",
    props: ["btnProp", "title", "icon"]

}
</script>

<style lang="scss" scoped>


.fas {
    margin: 0 9px;
}
.btn {
  font-style: normal;
  font-weight: 500 !important;
  font-size: 16px;
  line-height: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

}

.btn-orange:hover {
    background: #FB8E0B0D;
    color: #FB8E0B;
}

.btn-black:hover {
    background: #FB8E0B0D;
}

.btn-orange {
    background: #FB8E0B;
    border-radius: 8px;
    color: #fff;
}

.btn-56 {
    height: 56px;
}

.btn-50 {
    height: 50px;
}

.btn-black {
    color: #1B1C20;
    background: #fff;
}

.smaller-pd {
    padding: 12px 21px;
}

@media (max-width: 952px) {
    .btn {
        line-height: 24px !important;
    }
}
</style>