<template>
    <div class="top" @click="closePopup">
        12345789
    </div>
    <div>

    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['showPopup']);

// 关闭模态框
function closePopup() {
    // 调用父组件的关闭模态框方法 - showPopup
    emit("showPopup");
}
</script>
<style lang="less">
    
</style>