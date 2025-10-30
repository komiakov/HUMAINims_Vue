<script setup lang="ts">
const { database, addColumn } = useColumns()

</script>

<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <HmnButton icon-left="add" label="Add column" type="primary mbl-hide" @click="addColumn()" />
        </section>
        <section>
            <HmnButton icon-left="translator" type="primary" :disabled="true" />
            <HmnButton icon-left="editForm" label="Edit form" type="secondary mbl-hide" :disabled="true" />
            <HmnButton icon-left="save" label="Save" type="accent" :disabled="true" />
        </section>
    </div>

    <div id="ims-content-body">

    </div>
</template>

<style lang="scss"></style>