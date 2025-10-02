<script setup lang="ts">
import { onClickOutside, useWindowSize } from '@vueuse/core'

const { sidebarIsOpen, toggleSidebar } = useSidebar()
const icons = useIcons()
const route = useRoute()
const { width } = useWindowSize()

const dropdownRef = ref(null)

const topLinks = [
    { to: '', icon: 'notification', label: 'Notifications' },
    { type: 'divider' },
    { to: '/', icon: 'dashboard', label: 'Dashboard' },
    { to: '/databases', icon: 'database', label: 'Databases' },
    { to: '/reports', icon: 'report', label: 'Reports' },
]

const bottomLinks = [
    { to: '/license', icon: 'license', label: 'License' },
    { type: 'divider' },
    { to: '/documentation', icon: 'documentation', label: 'Documentation' },
    { to: '/support', icon: 'support', label: 'Support' },
    { type: 'divider' },
    { to: '/settings', icon: 'settings', label: 'Settings' },
]

const isActive = (path: string) => {
    if (path == '') return false
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}

onClickOutside(dropdownRef, () => {
    if (sidebarIsOpen.value === true && width.value < 960) {
        sidebarIsOpen.value = false
    }
})

const closeSidebarMobile = () => {
    if (sidebarIsOpen.value === true && width.value < 960) {
        sidebarIsOpen.value = false
    }
}

onMounted(() => {
    if ( width.value > 960 ) {
        sidebarIsOpen.value = true
    }
})

</script>

<template>
    <nav id="navigation" ref="dropdownRef" :class="{ 'hide': !sidebarIsOpen }">
        <div id="navigation-content">
            <div id="navigation-top">
                <div id="navigation-header" class="container-flex">
                    <section>
                        <NuxtLink to="/" id="logo">
                            <span class="icon" v-html="icons['logo']"></span>
                            <span id="logo__label">HUMANims</span>
                        </NuxtLink>
                    </section>
                    <section id="sidebar-close-btn-section">
                        <HmnButton id="sidebar-close-btn" icon-left="close" @click="toggleSidebar" />
                    </section>
                </div>
                <hr>
                <template v-for="(link, index) in topLinks" :key="index">
                    <hr v-if="link.type === 'divider'" />
                    <NuxtLink v-else :to="link.to" class="navigation-link" :class="{ active: isActive(link.to!) }"
                        @click="closeSidebarMobile">
                        <span class="icon" v-html="icons[link.icon!]"></span>
                        <span class="navigation-link__label">{{ link.label }}</span>
                    </NuxtLink>
                </template>
            </div>

            <div id="navigation-bottom">
                <template v-for="(link, index) in bottomLinks" :key="index">
                    <hr v-if="link.type === 'divider'" />
                    <NuxtLink v-else :to="link.to" class="navigation-link" :class="{ active: isActive(link.to!) }"
                        @click="closeSidebarMobile">
                        <span class="icon" v-html="icons[link.icon!]"></span>
                        <span class="navigation-link__label">{{ link.label }}</span>
                    </NuxtLink>
                </template>
            </div>
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

#navigation {
    z-index: 99997;
    transition: .3s;
    border-left: 1px solid var(--brdr-color);
    box-shadow: 4px 0px 6px 0px rgba(0, 0, 0, 0.15);

    &,
    #navigation-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
    }

    &.hide {
        left: -240px;
    }

    #navigation-content {
        position: relative;
        z-index: 99999;
        height: 100vh;
        width: 240px;
        padding: 12px;
        background-color: var(--bg-secondary);

        &,
        #navigation-top,
        #navigation-bottom {
            display: grid;
            align-content: space-between;
            gap: 12px;

            #logo,
            .navigation-link {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            #logo {
                .icon {
                    width: 42px;
                    height: 42px;
                    background-color: var(--accent);
                    border-radius: 6px;

                    svg path {
                        fill: var(--white);
                    }
                }

                #logo__label {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--ft-main);
                }
            }
        }

        .navigation-link {
            height: 42px;
            min-width: 42px;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.18s all;

            .icon svg path {
                stroke: var(--ft-main);
                transition: stroke 0.18s;
            }

            .navigation-link__label {
                color: var(--ft-main);
                font-size: 12px;
                font-weight: 400;
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
}

@media (min-width: 960px) {
    #navigation {
        #sidebar-close-btn-section {
            display: none;
        }

        #navigation-content {
            width: 240px;
        }
    }
}

@media (max-width: 959px) {
    #navigation {
        &.hide {
            left: -100vw;
        }

        #navigation-content {
            width: 300px;
        }
    }
}
</style>