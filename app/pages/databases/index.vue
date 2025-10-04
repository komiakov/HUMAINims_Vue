<template>
    <HmnHeader>
        <template #header-left-btns>
            <HmnDropdown icon-left="add" label="Create" alignment="left" type="accent mbl-hide">
                <HmnButton label="Database" icon-left="database" link="/databases/new" />
                <HmnButton label="Folder" icon-left="addFolder" :disabled="true" />
            </HmnDropdown>
        </template>
        <template #header-page-name>Databases</template>
        <template #fp-left>
            
        </template>
    </HmnHeader>

    <div id="ims-content-body">

    </div>
</template>

<style lang="scss">

</style>