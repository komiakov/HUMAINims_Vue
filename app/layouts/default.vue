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
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: var(--bg-main);

    @include desktop-min(960px) {
        grid-template-rows: auto 1fr;
    }

    @include desktop-max(959px) {
        grid-template-rows: auto auto 1fr;
    }

    #ims-content-body {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100%;
        width: 100vw;
        padding: var(--item-padding);
        overflow: hidden;

        #functional-panel {
            padding: var(--item-padding);
            @include border;
            border-radius: var(--block-radius);
            background-color: var(--bg-secondary);
            @include shadow;
        }
    }
}
</style>