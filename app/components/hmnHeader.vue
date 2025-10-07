<script setup lang="ts">
const { toggleSidebar } = useSidebar()
</script>

<template>
    <header class="container-flex">
        <section>
            <HmnButton id="toggle-sidebar" icon-left="sidebar" @click="toggleSidebar" />
            <slot name="header-left-btns"></slot>
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
            <slot name="header-right-btns"></slot>
            <HmnButton id="global-search-btn" icon-left="search" label="Search..." class="mbl-hide" :disabled="true">
                <template #kbd-slot>
                    <span class="kbd">⌘ F</span>
                </template>
            </HmnButton>
        </section>
    </header>
    <div id="functional-panel" class="container-flex">
        <section id="functional-panel__left">
            <slot name="fp-left"></slot>
        </section>
        <section>
            <slot name="fp-right"></slot>
        </section>
    </div>
</template>

<style lang="scss">
header {
    background: var(--bg-secondary);
    padding: 12px;
    border-bottom: 1px solid var(--brdr-color);

    section {
        gap: 18px;

        &:nth-child(1) {
            flex: 1;
        }

        #header__page-name {
            @include tx-md-bold;
            color: var(--ft-main);
            cursor: default;
        }

        #global-search-btn {
            @include desktop-min(720px) {
                min-width: 180px;
            }
        }

    }
}

#functional-panel {
    background: var(--bg-secondary);
    padding: 12px;
    border-bottom: 1px solid var(--brdr-color);
}
</style>