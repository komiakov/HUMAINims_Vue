<script setup lang="ts">
const icons = useIcons()
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
</template>

<style lang="scss">
header {
    background: var(--bg-secondary);
    padding: var(--block-padding);
    @include border-bottom;

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
</style>