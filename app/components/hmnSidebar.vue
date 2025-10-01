<script setup lang="ts">
const { sidebarIsMinimal } = useSidebar()
const icons = useIcons()
const route = useRoute()

const isActive = (path: string) => {
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}

</script>

<template>
    <nav class="navigation" :class="{ 'minimal': sidebarIsMinimal }">
        <div class="navigation-top">
            <div id="navigation-header" class="container-flex">
                <section>
                    <NuxtLink to="/" id="logo">
                        <span class="icon" v-html="icons['logo']"></span>
                        <span id="logo__label">HUMANims</span>
                    </NuxtLink>
                </section>
                <section>
                    <HmnButton icon-left="close" @click="sidebarIsMinimal = !sidebarIsMinimal" />
                </section>
            </div>
            <hr>
            <NuxtLink to="" class="navigation-link">
                <span class="icon" v-html="icons['notification']"></span>
                <span class="navigation-link__label">Notifications</span>
            </NuxtLink>
            <hr>
            <NuxtLink to="/" class="navigation-link" :class="{ 'active': isActive('/') }">
                <span class="icon" v-html="icons['dashboard']"></span>
                <span class="navigation-link__label">Dashboard</span>
            </NuxtLink>
            <NuxtLink to="/databases" class="navigation-link" :class="{ 'active': isActive('/databases') }">
                <span class="icon" v-html="icons['database']"></span>
                <span class="navigation-link__label">Databases</span>
            </NuxtLink>
            <NuxtLink to="/reports" class="navigation-link" :class="{ 'active': isActive('/reports') }">
                <span class="icon" v-html="icons['report']"></span>
                <span class="navigation-link__label">Reports</span>
            </NuxtLink>
        </div>
        <div class="navigation-bottom">
            <NuxtLink to="/license" class="navigation-link" :class="{ 'active': isActive('/license') }">
                <span class="icon" v-html="icons['license']"></span>
                <span class="navigation-link__label">License</span>
            </NuxtLink>
            <hr>
            <NuxtLink to="/documentation" class="navigation-link" :class="{ 'active': isActive('/documentation') }">
                <span class="icon" v-html="icons['documentation']"></span>
                <span class="navigation-link__label">Documentation</span>
            </NuxtLink>
            <NuxtLink to="/support" class="navigation-link" :class="{ 'active': isActive('/support') }">
                <span class="icon" v-html="icons['support']"></span>
                <span class="navigation-link__label">Support</span>
            </NuxtLink>
            <hr>
            <NuxtLink to="/settings" class="navigation-link" :class="{ 'active': isActive('/settings') }">
                <span class="icon" v-html="icons['settings']"></span>
                <span class="navigation-link__label">Settings</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }

    &:active {
        @media (hover: none) {
            @content;
        }
    }
}

.navigation {
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 12px;
    background: var(--bg-secondary);
    border-right: 1px solid var(--brdr-color);

    box-shadow: 4px 0px 6px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow: 4px 0px 6px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 4px 0px 6px 0px rgba(0,0,0,0.15);

    &,
    .navigation-top,
    .navigation-bottom {
        display: grid;
        align-content: space-between;
        gap: 12px;
    }

    #logo {
        display: flex;
        align-items: center;
        gap: 12px;

        .icon {
            width: 42px;
            height: 42px;
            background-color: var(--accent);
            border-radius: 6px;

            svg {
                path {
                    fill: var(--white);
                }
            }
        }

        #logo__label {
            font-size: 14px;
            font-weight: 500;
            color: var(--ft-main);
        }
    }

    .navigation-link {
        display: flex;
        align-items: center;
        gap: 12px;
        min-height: 42px;
        min-width: 42px;
        padding: 12px;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.18s all;

        .icon {
            svg {
                width: 16px;
                height: 16px;

                path {
                    stroke: var(--ft-main);
                    transition: stroke 0.18s;
                }
            }
        }

        .navigation-link__label {
            color: var(--ft-main);
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.04em;
        }

        @include hover() {
            background: var(--bg-item-main);
        }

        &.active {
            background: var(--accent);

            .icon svg path {
                stroke: var(--white);
            }

            .navigation-link__label {
                color: var(--white);
            }
        }
    }
}

@media (min-width: 720px) {
    .notification--mobile {
        display: none !important;
    }
}

@media (min-width: 960px) {
    .navigation {
        width: 66px;

        #navigation-header section:nth-child(2),
        #logo #logo__label,
        .navigation-link .navigation-link__label {
            display: none;
        }

        @include hover() {
            width: 260px;

            #logo #logo__label,
            .navigation-link .navigation-link__label {
                display: flex;
            }
        }
    }
}

@media (max-width: 959px) {
    .navigation {
        width: 260px;
        transition: width .1s;

        &.minimal {
            left: -101vw;
        }
    }
}
</style>