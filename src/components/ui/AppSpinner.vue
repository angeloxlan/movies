<template>
    <div
        class="dots-container flex items-center justify-center space-x-2 animate-pulse"
    >
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
    </div>
</template>

<style scoped>
.dot {
    width: 25px;
    height: 25px;
    background: #22303e;
    display: inline-block;
    border-radius: 50%;
    right: 0px;
    bottom: 0px;
    margin: 0px 2.5px;
    position: relative;
    animation: jump 1s infinite;
}
.dots-container .dot-1 {
    -webkit-animation-delay: 100ms;
    animation-delay: 100ms;
}
.dots-container .dot-2 {
    -webkit-animation-delay: 200ms;
    animation-delay: 200ms;
}
.dots-container .dot-3 {
    -webkit-animation-delay: 300ms;
    animation-delay: 300ms;
}
@keyframes jump {
    0% {
        bottom: 0px;
    }
    40% {
        bottom: 10px;
    }
    60% {
        bottom: 0px;
    }
}
</style>
