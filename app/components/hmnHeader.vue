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
                <HmnButton v-for="btn in navLinks" :label="isActive(btn.link) ? btn.label : ''" :icon-left="btn.icon" :link="btn.link" :class="isActive(btn.link) ? 'accent' : 'secondary'" />
            </nav>
        </section>
        <section>
            <HmnButton icon-left="notification" type="secondary"/>
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

            svg path {
                fill: var(--white);
            }
        }
    }
    nav {
        display: flex;
        gap: var(--item-gap);
        .accent {
            min-width: 126px;
        }
    }
}
</style>