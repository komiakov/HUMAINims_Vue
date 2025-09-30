<script setup lang="ts">
const { database } = useColumns()
</script>

<template>
    <HmnHeader>
        <template #header-page-name>Create database</template>
        <template #fp-right>
            <HmnButton icon-left="translator" :disabled="true" />
            <HmnButton label="Edit form" icon-left="editForm" class="mbl-hide" :disabled="true" />
            <HmnButton label="Save" icon-left="save" type="accent" :disabled="true" />
        </template>
    </HmnHeader>
</template>

<style lang="scss"></style>