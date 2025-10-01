<template>
    <div id="ims-page" data-theme="light">
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
        padding-left: 66px;

        #ims-content {
            flex: 1;
        }

    }
}
</style>