<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()

</script>

<template>
    <header class="container-flex">
        <section>
            <HmnButton icon-left="sidebar" @click="sidebarIsMinimal = !sidebarIsMinimal" />
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
            <HmnButton icon-left="notification" />
            <HmnButton icon-left="search" />
        </section>
    </header>
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
</style>