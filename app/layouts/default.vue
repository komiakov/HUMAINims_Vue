<script setup lang="ts">
const { sidebarIsOpen } = useSidebar()
</script>

<template>
    <div id="ims-page" data-theme="light" :class="{ max: !sidebarIsOpen }">
        <HmnSidebar />
        <div id="ims-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    &, #ims-content {
        height: 100vh;
    }

    &, #ims-content, #ims-content-body {
        overflow: hidden;
    }

    position: relative;
    width: 100vw;
    background-color: var(--bg-main);
    padding-bottom: env(safe-area-inset-bottom);

    #ims-content {
        display: grid;
        grid-template-rows: auto auto 1fr;

        #ims-content-body {
            height: calc(100% - 24px);
            margin: 12px;
            background-color: var(--bg-secondary);
            border-radius: 9px;
            border: 1px solid var(--brdr-color);
        }
    }
}

@media (max-width: 480px) {
    .kbd {
        display: none;
    }
}

@media (min-width: 960px) {
    #ims-page {
        padding-left: 240px;
        transition: padding .3s;

        &.max {
            padding: 0;
        }
    }
}
</style>