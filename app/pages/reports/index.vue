<template>
    <HmnHeader>
         <template #header-left-btns>
            <HmnDropdown icon-left="add" label="Create" alignment="left" type="accent mbl-hide">
                <HmnButton label="Report" icon-left="report" :disabled="true" />
                <HmnButton label="Folder" icon-left="addFolder" :disabled="true" />
            </HmnDropdown>
        </template>
        <template #header-page-name>Reports</template>
        <template #fp-left>
            
        </template>
    </HmnHeader>

    <div id="ims-content-body">

    </div>
</template>

<style lang="scss">

</style>