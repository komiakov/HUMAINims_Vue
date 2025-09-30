<template>
    <HmnHeader>
        <template #header-left>
            <HmnDropdown label="Create" type="accent mbl-hide" icon-left="add" alignment="left">
                <template #>
                    <HmnButton label="Database" icon-left="database" link="/databases/new" />
                    <HmnButton label="Folder" icon-left="addFolder" :disabled="true" />
                </template>
            </HmnDropdown>
        </template>
        <template #header-page-name>Databases</template>
    </HmnHeader>
</template>

<style lang="scss">

</style>