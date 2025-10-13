<template>
    <div id="ims-content-body">
        <div id="functional-panel" class="container-flex">
            <section>
                <HmnDropdown icon-left="add" label="Create" type="accent" alignment="left">
                    <template #>
                        <HmnButton label="Report" icon-left="report" :disabled="true"/>
                        <HmnButton label="Folder" icon-left="addFolder" :disabled="true"/>
                    </template>
                </HmnDropdown>
            </section>
            <section>   
                
            </section>
        </div>
    </div>
</template>

<style lang="scss">

</style>