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
    if (width.value > 960) {
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
                <hr>
                <div id="user-info">
                    <div id="user-info__image">
                        <span id="user-info__image__lttrs">AK</span>
                    </div>
                    <div id="user-info__data">
                        <span id="user-info__data__name">Andrii KOMIAKOV</span>
                        <span id="user-info__data__email">andrii.komiakov@icloud.com</span>
                    </div>
                    <HmnButton icon-left="logOut" />
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
#navigation {
    z-index: 99997;
    transition: left .3s;
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
        left: -250px;
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
                    width: 36px;
                    height: 36px;
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
            height: 36px;
            min-width: 36px;
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
                @include tx-sm-regular;
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

        #user-info {
            display: flex;
            align-items: center;
            padding: 6px;
            gap: 9px;
            border: 1px solid var(--brdr-color);
            border-radius: 9px;

            #user-info__image {
                #user-info__image__lttrs {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 36px;
                    background-color: var(--accent);
                    font-size: 12px;
                    color: var(--white);
                    cursor: default;
                }
            }

            #user-info__data {
                flex: 1;
                display: grid;
                min-width: 0;

                #user-info__data__name,
                #user-info__data__email {
                    color: var(--ft-main);
                    font-weight: 500;
                    cursor: default;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                #user-info__data__name {
                    font-size: 12px;
                }

                #user-info__data__email {
                    font-size: 10px;
                    opacity: .75;
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