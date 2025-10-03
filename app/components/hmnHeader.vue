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
            <HmnButton icon-left="search">
                <template #kbd-slot>
                    <span class="kbd">⌘ F</span>
                </template>
            </HmnButton>
        </section>
    </header>
    <div id="functional-panel" class="container-flex">
        <section>
            <slot name="fp-left"></slot>
        </section>
        <section>
            <slot name="fp-right"></slot>
        </section>
    </div>
</template>

<style>
header {
    background: var(--bg-secondary);
    padding: 12px;
    border-bottom: 1px solid var(--brdr-color);

    section {
        gap: 18px;
    }

    section:nth-child(1) {
        gap: 12px;
        flex: 1;

        #header__page-name {
            font-size: 16px;
            font-weight: 500;
            color: var(--ft-main);
            cursor: default;
        }
    }
}

#functional-panel {
    background: var(--bg-secondary);
    padding: 12px;
    border-bottom: 1px solid var(--brdr-color);
}
</style>