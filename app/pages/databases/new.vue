<script lang="ts" setup>
import draggable from "vuedraggable"
const { database, addColumn } = useColumns()
</script>

<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <hmn-button icon-left="arrowLeft" type="accent" :disabled="true" />
        </section>
        <section>
            <hmn-button label="Translations" icon-left="translator" :disabled="true" />
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
        <draggable v-if="database?.columns" class="scroll" v-model="database.columns" item-key="id" handle=".move" animation="200">
            <template #item="{ element }">
                <hmn-column :key="element.id" :columnId="element.id" />
            </template>
        </draggable>
    </div>
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
</style>