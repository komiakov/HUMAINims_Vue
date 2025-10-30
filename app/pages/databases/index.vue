<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <HmnDropdown icon-left="add" label="Create" type="accent" alignment="left">
                <template #>
                    <HmnButton label="Database" icon-left="database" link="/databases/new" type="primary"/>
                    <HmnButton label="Folder" icon-left="addFolder" :disabled="true" type="primary" />
                </template>
            </HmnDropdown>
        </section>
        <section>

        </section>
    </div>

    <div id="ims-content-body">

    </div>
</template>

<style lang="scss"></style>