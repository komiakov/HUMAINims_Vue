<script setup lang="ts">

</script>

<template>
    <div id="functional-panel" class="container-flex">
        <section id="functional-panel__left">
            <HmnButton icon-left="save" label="Save" type="accent" :disabled="true" />
            <HmnInput id="database-name" placeholder="Enter database name" />
        </section>
        <section>
            <HmnButton class="desktop-btns" icon-left="translator" type="primary" :disabled="true" />
            <HmnButton class="desktop-btns" icon-left="editForm" label="Edit form" type="secondary mbl-hide"
                :disabled="true" />
            <HmnDropdown class="mobile-btns" icon-right="more" type="secondary mbl-hide" id="header-dropdown">
                <template #>
                    <HmnButton icon-left="translator" label="Translations" type="primary" :disabled="true" />
                    <HmnButton icon-left="editForm" label="Edit form" type="primary" :disabled="true" />
                </template>
            </HmnDropdown>
        </section>
    </div>

    <div id="ims-content-body">
        <HmnColumn />
        <HmnColumn />
        <HmnColumn />
    </div>
</template>

<style lang="scss">
#functional-panel {
    #functional-panel__left {
        @include desktop-min(960px) {
            flex: .75;
        }

        @include desktop-min(1200px) {
            flex: .5;
        }

        @include desktop-max(959px) {
            flex: 1;
        }
    }

    @include desktop-min(660px) {
        .desktop-btns {
            display: flex;
        }

        .mobile-btns {
            display: none;
        }
    }

    @include desktop-max(659px) {
        .desktop-btns {
            display: none;
        }

        .mobile-btns {
            display: flex;
        }
    }
}

#ims-content-body {
    gap: var(--item-gap);
    padding: 0 var(--item-padding);
}
</style>