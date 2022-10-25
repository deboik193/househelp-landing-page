<template>
    <div class="d-none z-index">
        <div class="sidebar">
            <i @click="closeSideBar()" class="fas fa-times-circle"></i>
        </div>
    </div>
</template>

<script>
export default {
name: "SideBar",

methods: {
    closeSideBar() {
        this.$emit("closeAllBar")
    }
}
}
</script>

<style lang="scss" scoped>

.z-index {
    z-index: 3;
}

.d-none {
    display: none;
}

@media (max-width: 952px) {
    .d-none {
        display: block;
    }

    .sidebar {
        position: fixed;
        z-index: 1;
        width: 320px;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
        animation-duration: 0.3s;
        animation-name: slidein;
    }

    .fas.fa-times-circle {
        color: #797B89;
        font-size: 20px;
        margin: 15px 25px;
    }

    .fas.fa-times-circle:hover {
        color: #FB8E0B;
    }
}
</style>