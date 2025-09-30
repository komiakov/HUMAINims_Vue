<script setup lang="ts">
const { database } = useColumns()
</script>

<template>
    <HmnHeader>
        <template #header-left>
            <hmn-button icon-left="save" label="Save" type="accent mbl-hide"/>
        </template>
        <template #header-page-name>Create database</template>
    </HmnHeader>
</template>

<style lang="scss">

</style>