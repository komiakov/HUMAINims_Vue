<template>
    <div id="ims-page" data-theme="light">
        <HmnHeader />
        <div id="ims-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: var(--bg-main);

    #ims-content {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: var(--gap);
        height: 100%;
        width: 100vw;
        padding: var(--item-padding);
        overflow: hidden;

        #functional-panel {
            padding: var(--item-padding);
            @include border;
            border-radius: var(--block-radius);
            background-color: var(--bg-secondary);
        }

        #ims-content-body {
            display: grid;
            height: 100%;
            overflow: hidden;
        }
    }
}
</style>