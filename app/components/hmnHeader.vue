<script setup lang="ts">
import { useIcons } from "@/utils/useIcons";

const icons = useIcons()
const route = useRoute()

const navItems = ref({
    dashboard: { link: '/', label: 'Dashboard', icon: 'dashboard' },
    database: { link: '/databases', label: 'Databases', icon: 'database' },
    report: { link: '/reports', label: 'Reports', icon: 'report' },
})

const isActive = (path: string) => {
    if ((path === '/' && route.path === '/') || (route.path.startsWith(path) && path !== '/')) {
        return true
    }
    return false
}

const linkRefs = ref<HTMLElement[]>([])
const lineStyle = ref({ width: '0px', left: '0px' })

function updateLinkRefs() {
  linkRefs.value = Array.from(document.querySelectorAll('.nav__link'))
  updateLineStyle()
}

function updateLineStyle() {
  let activeLink: HTMLElement | undefined

  if (route.path === '/') {
    activeLink = linkRefs.value.find(link => link.dataset.path === '/')
  } else {
    activeLink = linkRefs.value.find(link => {
      const path = link.dataset.path
      return path && path !== '/' && route.path.startsWith(path)
    })
  }

  if (!activeLink) {
    lineStyle.value = { width: '0px', left: '0px' }
    return
  }

  const rect = activeLink.getBoundingClientRect()
  const parentRect = activeLink.parentElement!.getBoundingClientRect()
  lineStyle.value = {
    width: `${rect.width}px`,
    left: `${rect.left - parentRect.left}px`
  }
}

onMounted(() => {
  nextTick(updateLinkRefs)
  window.addEventListener('resize', updateLineStyle)
})

watch(() => route.path, () => nextTick(updateLineStyle))

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLineStyle)
})

</script>

<template>
    <header>
        <div class="container-flex">
            <section>
                <NuxtLink to="/" id="logo">
                    <span class="icon" v-html="icons['logo']"></span>
                    <span id="logo__label">HUMANims</span>
                </NuxtLink>
            </section>
            <section>
                <hmn-button iconLeft="search" :disabled="true" />
                <hmn-button iconLeft="notification" :disabled="true" />
                <hmn-dropdown label="Andrii" type="accent" iconRight="arrowDown" alignment="right">
                    <template #>
                        <div id="header-user-info">
                            <span id="header-user-info__name">ANDRII KOMIAKOV</span>
                            <span id="header-user-info__email">
                                andrii.komiakov@icloud.com
                            </span>
                        </div>
                        <hr />
                        <hmn-button label="Settings" iconLeft="settings" :disabled="true" />
                        <hmn-button label="License" iconLeft="license" :disabled="true" />
                        <hr>
                        <hmn-button label="Documentation" iconLeft="documentation" :disabled="true" />
                        <hmn-button label="Support" iconLeft="support" :disabled="true" />
                        <hr>
                        <hmn-button label="Log Out" iconLeft="logOut" :disabled="true" />
                    </template>
                </hmn-dropdown>
            </section>
        </div>
        <div>
            <nav>
                <NuxtLink v-for="(item, key) in navItems" :key="key" :to="item.link" class="nav__link"
                    :class="{ 'active': isActive(item.link) }" :data-path="item.link">
                    <span class="nav__link__icon icon" v-html="icons[item.icon]"></span>
                    <span class="nav__link__label">{{ item.label }}</span>
                </NuxtLink>
                <span id="nav__line" :style="lineStyle"></span>
            </nav>
        </div>
    </header>
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

header {
    display: grid;
    gap: 9px;
    padding: 9px 9px 0;
    background-color: var(--bg-main);
    border-bottom: 1px solid var(--brdr-color);

    #logo {
        display: flex;
        align-items: center;
        gap: 9px;

        svg {
            width: 24px;
            height: 24px;

            path {
                fill: var(--accent);
            }
        }

        #logo__label {
            color: var(--ft-main);
            font-size: 18px;
            font-weight: 300;
        }
    }

    #header-user-info {
        display: grid;
        margin: 12px 0 12px 12px;
        color: var(--ft-main);

        span {
            cursor: default;
        }

        #header-user-info__name {
            font-size: 16px;
            font-weight: 400;
        }

        #header-user-info__email {
            font-size: 12px;
            font-weight: 400;
            opacity: 0.5;
        }
    }

    nav {
        position: relative;
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 7px 0;

        .nav__link {
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 6px 12px 6px 9px;
            border-radius: 6px;

            .nav__link__icon svg path {
                stroke: var(--ft-secondary);
            }

            .nav__link__label {
                font-size: 12px;
                font-weight: 400;
                color: var(--ft-secondary);
            }

            &,
            & .nav__link__icon svg path,
            .nav__link__label {
                transition: .2s all;
            }

            @include hover() {
                background-color: var(--bg-item-main);

                .nav__link__label {
                    color: var(--ft-main);
                }

                .nav__link__icon svg path {
                    stroke: var(--ft-main);
                }
            }

            &.active {
                .nav__link__label {
                    color: var(--ft-main);
                }

                .nav__link__icon svg path {
                    stroke: var(--accent);
                }
            }
        }

        #nav__line {
            position: absolute;
            height: 3px;
            bottom: 0;
            border-radius: 6px 6px 0 0;
            background-color: var(--accent);
            transition: .3s all;
        }
    }
}

@media (max-width: 719px) {
    header {
        #logo #logo__label {
            display: none;
        }

        nav {
            justify-content: space-around;
        }
    }
}
</style>