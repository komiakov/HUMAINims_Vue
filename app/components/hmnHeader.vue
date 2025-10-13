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
            </NuxtLink>
            <HmnButton icon-left="search" label="Global search ..." type="secondary brdr" :disabled="true">
                <template #indicatior-slot>
                    <span class="kbd-slot">
                        <span class="kbd">Cmd</span>
                        +
                        <span class="kbd">F</span>
                    </span>
                </template>
            </HmnButton>
        </section>
        <section>
            <HmnButton icon-left="notification" type="secondary brdr" :disabled="true" />
            
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
    <nav>
        <HmnButton icon-left="dashboard" label="Dashboard" link="/"
            :type="isActive('/') ? 'accent' : 'secondary brdr'" />
        <HmnButton icon-left="database" label="Databases" link="/databases"
            :type="isActive('/databases') ? 'accent' : 'secondary brdr'" />
        <HmnButton icon-left="report" label="Reports" link="/reports"
            :type="isActive('/reports') ? 'accent' : 'secondary brdr'" />
    </nav>
</template>

<style lang="scss">
header,
nav {
    background: var(--bg-secondary);
    padding: var(--block-padding) calc(var(--item-padding) * 2);
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
    display: flex;
    align-items: center;
    gap: var(--gap);

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