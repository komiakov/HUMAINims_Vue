<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <hmn-dropdown label="Create" icon-left="add" type="accent" alignment="left">
                <template #>
                    <hmn-button label="Database" icon-left="database" link="/databases/new"  />
                    <hmn-button label="Folder" icon-left="addFolder" :disabled="true" />
                </template>
            </hmn-dropdown>
        </section>
        <section>

        </section>
    </div>
</template>

<style lang="scss">

</style>