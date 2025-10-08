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
    { to: '/databases', icon: 'database', label: 'Databases', indicator: 0 },
    { to: '/reports', icon: 'report', label: 'Reports', indicator: 0 },
]

const bottomLinks = [
    { to: '/license', icon: 'license', label: 'License' },
    { type: 'divider' },
    { to: '/documentation', icon: 'documentation', label: 'Documentation' },
    { to: '/support', icon: 'support', label: 'Support' },
    { type: 'divider' },
    { to: '/settings', icon: 'settings', label: 'Settings' },
    { type: 'divider' },
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
                <HmnButton v-else :icon-left="link.icon" :label="link.label" :link="link.to" 
                    :type="isActive(link.to) ? 'accent' : 'primary'" @click="closeSidebarMobile">
                    <template #indicatior-slot>
                        <span v-if="link.indicator != null" class="indicator">{{ link.indicator }}</span>
                    </template>
                </HmnButton>
            </template>
        </div>

        <div id="navigation-bottom">
            <template v-for="(link, index) in bottomLinks" :key="index">
                <hr v-if="link.type === 'divider'" />
                <HmnButton v-else :icon-left="link.icon" :label="link.label" :link="link.to"
                    :type="isActive(link.to) ? 'accent' : 'primary'" @click="closeSidebarMobile" />
            </template>
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
    </nav>
</template>

<style lang="scss">
#navigation {
    z-index: 99999;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 12px;
    box-shadow: 4px 0px 6px 0px rgba(0, 0, 0, 0.15);
    background-color: var(--bg-secondary);
    transition: left .3s;

    @include desktop-min(960px) {
        width: 240px;

        &.hide {
            left: -250px;
        }

        #sidebar-close-btn-section {
            display: none;
        }
    }

    @include desktop-max(959px) {
        width: 300px;

        &.hide {
            left: -100vw;
        }
    }

    &,
    #navigation-top,
    #navigation-bottom {
        display: grid;
        align-content: space-between;
        gap: 12px;

        #logo {
            display: flex;
            align-items: center;
            gap: 12px;

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

    #user-info {
        display: flex;
        align-items: center;
        padding: 6px;
        gap: 9px;
        @include border();
        border-radius: 9px;

        #user-info__image {
            #user-info__image__lttrs {
                @include inline-center();
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
                cursor: default;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            #user-info__data__name {
                @include tx-sm-regular();
            }

            #user-info__data__email {
                @include tx-xs-bold();
                opacity: .75;
            }
        }
    }
}
</style>