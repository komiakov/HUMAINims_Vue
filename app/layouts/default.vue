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
}

@media (min-width: 720px) {
    #ims-page {
        display: flex;

        #ims-content {
            flex: 1;
        }

    }
}

@media (max-width: 719px) {}
</style>