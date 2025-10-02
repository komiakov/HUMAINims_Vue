<script setup lang="ts">
const { sidebarIsOpen } = useSidebar()
</script>

<template>
    <div id="ims-page" data-theme="light" :class="{ max : sidebarIsOpen }">
        <HmnSidebar />
        <div id="ims-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: var(--bg-main);
    padding-bottom: env(safe-area-inset-bottom);
}

@media (min-width: 960px) {
    #ims-page {
        display: flex;
        padding-left: 240px;
        transition: .3s all;

        &.max {
            padding: 0;
        }

        #ims-content {
            flex: 1;
        }

    }
}
</style>