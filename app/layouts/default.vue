<script setup lang="ts">
const { sidebarIsOpen } = useSidebar()
</script>

<template>
    <div id="ims-page" data-theme="light" :class="{ max: !sidebarIsOpen }">
        <div id="ims-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: var(--bg-main);
}
</style>