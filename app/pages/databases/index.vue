<template>
    <HmnHeader>
        <template #header-page-name>Databases</template>
        <template #fp-left>
            <HmnDropdown icon-left="add" label="Create" alignment="left" type="accent">
                <HmnButton label="Database" icon-left="database" link="/databases/new" />
                <HmnButton label="Folder" icon-left="addFolder" :disabled="true" />
            </HmnDropdown>
        </template>
    </HmnHeader>
</template>

<style lang="scss">

</style>