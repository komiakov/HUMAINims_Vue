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
    padding: var(--block-padding);
    gap: var(--gap);
    overflow: hidden;
    background-color: var(--bg-secondary);

    #ims-content {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: var(--gap);
        height: 100%;
        padding: var(--item-padding);
        background-color: var(--bg-main);
        border-radius: var(--block-radius);
        overflow: hidden;

        #functional-panel {
            padding: var(--item-padding);
            @include border;
            border-radius: var(--block-radius);
        }

        #ims-content-body {
            display: grid;
            height: 100%;
            overflow: hidden;
        }
    }
}
</style>