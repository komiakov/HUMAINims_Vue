<script setup lang="ts">
const { database } = useColumns()
</script>

<template>
    <HmnHeader>
        <template #header-left-btns>
            <HmnButton label="Save" icon-left="save" type="accent mbl-hide" :disabled="true" />
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
</template>

<style lang="scss">
#functional-panel__left {
    flex: 1;
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