<template>
    <div style="background: #fff; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <img width="100" height="100" class="fadeinout" src="@/assets/logo.png" />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.fadeinout {
    animation: fadeinout 2s infinite;
}

@keyframes fadeinout {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>