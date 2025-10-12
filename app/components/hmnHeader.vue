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

</script>

<template>
    <header class="container-flex">
        <section>
            <NuxtLink to="/" id="logo">
                <span class="icon" v-html="icons['logo']"></span>
                <span id="logo__label">HUMANims</span>
            </NuxtLink>
        </section>

        <section>
            <nav class="desktop">
                <HmnButton icon-left="dashboard" label="Dashboard" link="/"
                    :type="isActive('/') ? 'accent' : 'primary'" />
                <HmnButton icon-left="database" label="Databases" link="/databases"
                    :type="isActive('/databases') ? 'accent' : 'primary'" />
                <HmnButton icon-left="report" label="Reports" link="/reports"
                    :type="isActive('/reports') ? 'accent' : 'primary'" />
            </nav>
        </section>

        <section>
            <HmnButton icon-left="notification" />
            <HmnButton icon-left="search" label="Global search ..." type="primary brdr mbl-hide">
                <template #indicatior-slot>
                    <span class="kbd-slot">
                        <span class="kbd">Cmd</span>
                        +
                        <span class="kbd">F</span>
                    </span>
                </template>
            </HmnButton>
            <HmnDropdown label="Andrii" icon-right="arrowDown" type="accent">
                <template #>
                    <div id="userInfo">
                        <span id="userInfo__name">Andrii KOMIAKOV</span>
                        <span id="userInfo__email">andrii.komiakov@icloud.com</span>
                    </div>
                    <hr>
                    <HmnButton icon-left="settings" label="Settings" />
                    <HmnButton icon-left="license" label="license" />
                    <hr>
                    <HmnButton icon-left="documentation" label="Documentation" />
                    <HmnButton icon-left="support" label="Support" />
                    <hr>
                    <HmnButton icon-left="logOut" label="Log Out" />
                </template>
            </HmnDropdown>
        </section>
    </header>
    <nav class="mobile">
        <HmnButton icon-left="dashboard" label="Dashboard" link="/" :type="isActive('/') ? 'accent' : 'primary'" />
        <HmnButton icon-left="database" label="Databases" link="/databases"
            :type="isActive('/databases') ? 'accent' : 'primary'" />
        <HmnButton icon-left="report" label="Reports" link="/reports"
            :type="isActive('/reports') ? 'accent' : 'primary'" />
    </nav>
</template>

<style lang="scss">
header,
nav.mobile {
    background: var(--bg-secondary);
    padding: var(--block-padding);
    @include border-bottom;
}

header {
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

nav {
    align-items: center;
    gap: var(--gap);

    @include desktop-min(960px) {
        &.desktop {
            display: flex;
        }
        &.mobile {
            display: none;
        }
    }

    @include desktop-max(959px) {
        &.desktop {
            display: none;
        }
        &.mobile {
            display: flex;
        }
    }

    @include desktop-max(600px) {
        justify-content: space-between;

        .hmn-button {
            width: 33%;
            justify-content: center;

            .hmn-button__label {
                flex: none;
            }
        }
    }
}
</style>