<template>
    <div id="functional-panel" class="container-flex">
        <section>
            <HmnDropdown icon-left="add" label="Create" type="accent" alignment="left">
                <template #>
                    <HmnButton label="Reports" icon-left="report" type="primary" :disabled="true" />
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