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
    { icon: "dashboard", label: "Dashboard", link: "/" },
    { icon: "database", label: "Databases", link: "/databases" },
    { icon: "report", label: "Reports", link: "/reports" },
])

</script>

<template>
    <header class="container-flex">
        <section>
            <NuxtLink to="/" id="logo">
                <span class="icon" v-html="icons['logo']"></span>
            </NuxtLink>
            <nav>
                <HmnButton v-for="btn in navLinks" :label="isActive(btn.link) ? btn.label : ''" :icon-left="btn.icon"
                    :link="btn.link" :class="isActive(btn.link) ? 'accent' : 'secondary'" />
            </nav>
        </section>
        <section>
            <HmnButton icon-left="notification" type="secondary" :disabled="true" />
            <HmnDropdown icon-right="arrowDown" label="Andrii" type="secondary mbl-hide" id="header-dropdown">
                <template #>
                    <div id="header-dropdown__user-info">
                        <span id="header-dropdown__user-info__name">Andrii KOMIAKOV</span>
                        <span id="header-dropdown__user-info__email">andrii.komiakov@icloud.com</span>
                    </div>
                    <hr>
                    <HmnButton icon-left="settings" label="Settings" type="primary" :disabled="true" />
                    <HmnButton icon-left="license" label="License" type="primary" :disabled="true" />
                    <hr>
                    <HmnButton icon-left="documentation" label="Documentation" type="primary" :disabled="true" />
                    <HmnButton icon-left="support" label="Support" type="primary" :disabled="true" />
                    <hr>
                    <HmnButton icon-left="logOut" label="Log Out" type="primary" :disabled="true" />
                </template>
            </HmnDropdown>
        </section>
    </header>
</template>

<style lang="scss">
header {
    #logo {
        display: flex;
        align-items: center;
        gap: var(--gap);

        .icon {
            @include item-size;
            background-color: var(--bg-item-main);
            border-radius: var(--item-radius);

            svg path {
                fill: var(--white);
            }
        }
    }

    nav {
        display: flex;
        gap: var(--item-gap);

        .hmn-button.accent {
            min-width: 126px;
        }

    }

    #header-dropdown {
        #header-dropdown__user-info {
            display: grid;
            color: var(--ft-main);
            cursor: default;
            padding: var(--item-padding) calc(var(--item-padding) * 2); 
            #header-dropdown__user-info__name {
                @include tx-md-bold;
            }
            #header-dropdown__user-info__email {
                @include tx-xs-bold;
                opacity: .5;
            }
        }
    }
}
</style>