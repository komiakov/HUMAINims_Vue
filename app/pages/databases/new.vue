<script setup lang="ts">
const { database, addColumn, resetDatabase } = useColumns()

onBeforeMount(()=>{
    addColumn()
})

onBeforeUnmount(()=>{
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
            <HmnInput v-model="database.name.value" placeholder="Enter database name..." />
        </template>
        <template #fp-right>
            <HmnButton icon-left="translator" :disabled="true" />
            <HmnButton label="Edit form" icon-left="editForm" class="mbl-hide" :disabled="true" />
        </template>
    </HmnHeader>

    <div id="ims-content-body">
        <div class="scroll">
            <client-only>
                <HmnColumn v-for="column in database.columns" :key="column.id" :columnId="column.id" />
            </client-only>
        </div>
    </div>
</template>

<style lang="scss">
#ims-content-body {
    padding: 12px;
}

@media (max-width: 959px) {
    #functional-panel__left {
        flex: 1;
    }
}

@media (min-width: 960px) {
    #functional-panel__left{
        flex: .5;
    }
}
</style>