<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()

const icons = useIcons()

const userData = ref({
    last_name: "KOMIAKOV",
    first_name: "Andrii",
    email: "andrii.komiakov@icloud.com",
})

function firstLettersOfName() {
    return userData.value.first_name[0]! + userData.value.last_name[0]
}

</script>

<template>
    <header class="container-flex">
        <section>
            <HmnButton id="toggle-sidebar" icon-left="sidebar" @click="sidebarIsMinimal = !sidebarIsMinimal" type="accent" />
            <slot name="header-left-btns"></slot>
            <span id="header__page-name">
                <slot name="header-page-name"></slot>
            </span>
        </section>
        <section>
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

@media (min-width: 960px) {
    #toggle-sidebar {
        display: none !important;
    }
}
</style>