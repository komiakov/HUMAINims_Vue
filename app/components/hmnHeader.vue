<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()

</script>

<template>
    <header class="container-flex">
        <section>
            <HmnButton icon-left="sidebar" @click="sidebarIsMinimal = !sidebarIsMinimal" type="accent" />
            <slot name="header-left-btns"></slot>
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
            <HmnButton icon-left="notification" class="notification-desktop" :disabled="true" />
            <HmnButton icon-left="search" :disabled="true" />
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

@media (max-width: 719px) {
    .notification-desktop {
        display: none;
    }
}
</style>