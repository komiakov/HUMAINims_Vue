<script lang="ts" setup>
import draggable from "vuedraggable"
const { database, addColumn } = useColumns()
const translationMenuIsOpen = ref(false)
</script>

<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <hmn-button icon-left="arrowLeft" type="accent" :disabled="true" />
        </section>
        <section>
            <hmn-button label="Translations" icon-left="translator"
                @click="translationMenuIsOpen = true" />
            <hmn-button label="Edit form" icon-left="editForm" class="mbl-hide" :disabled="true" />
            <hmn-button label="Save" icon-left="save" type="accent" :disabled="true" />
        </section>
    </div>

    <div id="ims-body">
        <div id="database-name-add-column">
            <hmn-input placeholder="Database name" v-model="database.name.value" />
            <hmn-button label="Add column" icon-left="add" type="accent" class="mbl-hide" @click="addColumn" />
        </div>
        <div id="search-columns">
            <hmn-input placeholder="Search columns" icon="search" />
        </div>
        <draggable v-if="database?.columns" class="scroll" v-model="database.columns" item-key="id" handle=".move"
            animation="200">
            <template #item="{ element }">
                <hmn-column :key="element.id" :columnId="element.id" />
            </template>
        </draggable>
    </div>

    <transition name="dropdown-fade">
        <div v-show="translationMenuIsOpen" id="traslations-menu">
            <div id="traslations-menu__background"></div>
            <div id="traslations-menu__body">
                <div id="traslations-menu__body__header" class="container-flex">
                    <section>
                        <span id="traslations-menu__body__header__label">Translations</span>
                    </section>
                    <section>
                        <hmn-button icon-left="close" @click="translationMenuIsOpen = false" />
                    </section>
                </div>
                <hr>
                
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
#ims-body {
    grid-template-rows: auto auto 1fr;
    padding: 9px;

    #database-name-add-column,
    #search-columns {
        display: flex;
    }

    #database-name-add-column {
        gap: 9px;

        :nth-child(1) {
            flex: 1;
        }
    }

    #database-name-add-column,
    #search-columns,
    .scroll {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        padding: 9px;
        background-color: var(--bg-main);
        border: 1px solid var(--brdr-color);
        border-radius: 12px;
    }
}

#traslations-menu {
    z-index: 99998;

    &,
    #traslations-menu__background {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
        white-space: nowrap;
        overflow: hidden;
    }

    #traslations-menu__background {
        background-color: #000000;
        opacity: .5;
    }

    #traslations-menu__body {
        position: absolute;
        z-index: 99999;
        display: grid;
        align-items: start;
        align-content: start;
        gap: 9px;
        right: 0;
        height: 100vh;
        padding: 9px;
        background-color: var(--bg-main);
        #traslations-menu__body__header__label {
            margin-left: 12px;
            font-weight: 300;
            font-size: 18px;
            color: var(--ft-main);
            cursor: default;
        }
    }
}

@media (max-width: 719px) {
    #traslations-menu__body {
        width: 100vw;
    }
}

@media (min-width: 720px) {
    #traslations-menu__body {
        width: 420px;
    }
}
</style>