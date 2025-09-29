<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()

</script>

<template>
  <header class="container-flex">
        <section>
            <HmnButton icon-left="sidebar" @click="sidebarIsMinimal = !sidebarIsMinimal"/>
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
            <HmnButton icon-left="search"/>
            <HmnButton icon-left="notification"/>
        </section>
    </header>
</template>

<style>
header{
    background: var(--bg-secondary);
    padding: 12px;
    border-bottom: 1px solid var(--brdr-color);

    #header__page-name {
        font-size: 14px;
        font-weight: 500;
        color: var(--ft-main);
        cursor: default;
    }
}
</style>