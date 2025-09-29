<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()

</script>

<template>
    <header class="container-flex">
        <section>
            <HmnButton icon-left="sidebar" @click="sidebarIsMinimal = !sidebarIsMinimal" />
            <slot name="header-left"></slot>
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
            <slot name="header-right"></slot>
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
        #header__page-name {
            font-size: 16px;
            font-weight: 500;
            color: var(--ft-main);
            cursor: default;
        }
    }
}

@media (max-width: 719px) {
    header {
        section:nth-child(1) {
            flex: 1;
        }

    }
}

@media (min-width: 720px) {
    header {
        section {
            flex: 1;
            &:nth-child(2) {
                justify-content: end;
            }
        }

    }
}
</style>