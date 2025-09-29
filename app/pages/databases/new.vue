<script setup lang="ts">
const { database } = useColumns()
</script>

<template>
    <HmnHeader>
        <template #header-left>
            <hmn-input v-model="database.name.value" />
        </template>
        <template #header-right>
            <hmn-button icon-left="save" label="Save" type="accent mbl-hide"/>
        </template>
    </HmnHeader>
</template>

<style lang="scss">

</style>