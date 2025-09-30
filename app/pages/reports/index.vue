<template>
    <HmnHeader>
        <template #header-page-name>Reports</template>
        <template #fp-left>
            <HmnDropdown icon-left="add" label="Create" alignment="left" type="accent">
                <HmnButton label="Report" icon-left="report" :disabled="true" />
                <HmnButton label="Folder" icon-left="addFolder" :disabled="true" />
            </HmnDropdown>
        </template>
    </HmnHeader>
</template>

<style lang="scss">

</style>