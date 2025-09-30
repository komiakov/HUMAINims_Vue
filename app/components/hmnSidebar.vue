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
            <NuxtLink to="" class="navigation-link">
                <span class="icon" v-html="icons['license']"></span>
                <span class="navigation-link__label">License</span>
            </NuxtLink>
            <hr>
            <NuxtLink to="" class="navigation-link">
                <span class="icon" v-html="icons['documentation']"></span>
                <span class="navigation-link__label">Documentation</span>
            </NuxtLink>
            <NuxtLink to="" class="navigation-link">
                <span class="icon" v-html="icons['support']"></span>
                <span class="navigation-link__label">Support</span>
            </NuxtLink>
            <hr>
            <NuxtLink to="" class="navigation-link">
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
    height: 100vh;
    width: 260px;
    background: var(--bg-secondary);
    padding: 12px;
    transition: .3s all;

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
            svg{
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
    .navigation {
        width: 260px;
        border-right: 1px solid var(--brdr-color);

        #navigation-header {
            section:nth-child(2) {
                display: none;
            }
        }

        &.minimal {
            width: 66px;

            #logo #logo__label {
                display: none;
            }

            .navigation-link .navigation-link__label {
                display: none;
            }
        }
    }
}

@media (max-width: 719px) {
    .navigation {
        position: absolute;
        z-index: 99999;
        top: 0;
        left: -101vw;
        width: 100vw;

        &.minimal {
            left: 0;
        }
    }
}
</style>