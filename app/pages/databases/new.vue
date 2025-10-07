<script setup lang="ts">
import draggable from 'vuedraggable'

const { database, addColumn, resetDatabase } = useColumns()

onMounted(() => {
    addColumn()
})

onBeforeUnmount(() => {
    resetDatabase()
})
</script>

<template>
    <HmnHeader>
        <template #header-left-btns>
            <HmnButton label="Save" icon-left="save" type="accent" :disabled="true" />
        </template>
        <template #header-page-name>Create database</template>
        <template #fp-left>
            <HmnButton icon-left="add" label="Add column" type="accent mbl-hide" @click="addColumn()" />
            <HmnInput v-model="database.name.value" placeholder="Enter database name..." />
        </template>
        <template #fp-right>
            <HmnButton icon-left="translator" :disabled="true" />
            <HmnButton label="Edit form" icon-left="editForm" class="mbl-hide" :disabled="true" />
        </template>
    </HmnHeader>

    <div id="ims-content-body">
        <draggable class="scroll" v-model="database.columns" item-key="id" animation="200" handle=".move">

            <template #item="{ element }">
                <HmnColumn :columnId="element.id" />
            </template>

        </draggable>
    </div>
</template>

<style lang="scss">
#ims-content-body {
    padding: 12px;
}

#functional-panel__left {
    @include desktop-min(960px) {
        flex: .5;
    }

    @include desktop-max(959px) {
        flex: 1;
    }
}
</style>