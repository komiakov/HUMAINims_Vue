<script setup lang="ts">
const icons = useIcons()
const route = useRoute()

const isActive = (path: string) => {
    if (path == '') return false
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}

const navLinks = ref([
    {icon: "dashboard", label: "Dashboard", link: "/"},
    {icon: "database", label: "Databases", link: "/databases"},
    {icon: "report", label: "Reports", link: "/reports"},
])

</script>

<template>
    <header class="container-flex">
        <section>
            <NuxtLink to="/" id="logo">
                <span class="icon" v-html="icons['logo']"></span>
            </NuxtLink>
        </section>
        <section>
            <HmnButton icon-left="notification" type="secondary brdr" :disabled="true" />
            <HmnButton icon-left="search" label="Global search ..." type="secondary brdr mbl-hide" :disabled="true">
                <template #indicatior-slot>
                    
                </template>
            </HmnButton>
            <HmnDropdown label="Andrii" icon-right="arrowDown" type="accent">
                <template #>
                    <div id="userInfo">
                        <span id="userInfo__name">Andrii KOMIAKOV</span>
                        <span id="userInfo__email">andrii.komiakov@icloud.com</span>
                    </div>
                    <hr>
                    <HmnButton icon-left="settings" label="Settings" :disabled="true" />
                    <HmnButton icon-left="license" label="license" :disabled="true" />
                    <hr>
                    <HmnButton icon-left="documentation" label="Documentation" :disabled="true" />
                    <HmnButton icon-left="support" label="Support" :disabled="true" />
                    <hr>
                    <HmnButton icon-left="logOut" label="Log Out" :disabled="true" />
                </template>
            </HmnDropdown>
        </section>
    </header>
</template>

<style lang="scss">
header {
    background: var(--bg-secondary);
    padding: var(--block-padding) calc(var(--item-padding) * 2);
    @include border-bottom;
    #logo {
        display: flex;
        align-items: center;
        gap: var(--gap);

        .icon {
            @include item-size;
            background-color: var(--accent);
            border-radius: var(--item-radius);

            svg path {
                fill: var(--white);
            }
        }

        #logo__label {
            @include tx-md-bold;
            color: var(--ft-main);
        }
    }
    #userInfo {
        display: grid;
        padding: 12px 12px 6px 12px;
        color: var(--ft-main);

        #userInfo__name {
            @include tx-md-bold;
            cursor: default;
        }

        #userInfo__email {
            @include tx-xs-bold;
            opacity: .5;
            cursor: default;
        }
    }
}
</style>