<template>
    <div id="ims-page" data-theme="light">
        <hmn-header />
        <div id="ims-content">
            <NuxtPage /> 
        </div>
    </div>
</template>

<style lang="scss">
#ims-page {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: var(--bg-secondary);

    #ims-content {
        display: grid;
        grid-template-rows: auto 1fr;
        width: 100vw;
        height: 100%;
        overflow: hidden;

        #functional-panel {
            padding: 12px;
            border-bottom: 1px solid var(--brdr-color);
            background-color: var(--bg-main);
        }

        #ims-body {
            display: grid;
            height: 100%;
            gap: 12px;
            overflow: hidden;
        }
    }
}
</style>