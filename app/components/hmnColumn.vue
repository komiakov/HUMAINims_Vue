<script setup lang="ts">

const { database, getColumnById, deleteColumn } = useColumns()

const isOpen = ref(false)

const props = defineProps({
    columnId: {
        type: Number,
    },
})

const column = computed(() => getColumnById(Number(props.columnId))!)

const columnTypes = ref([
        { label: 'Text', code: 'text' },
        { label: 'Number', code: 'number' },
        { label: 'Boolean', code: 'boolean' },
])

const yesNo = ref([
    { label: 'Yes', code: true },
    { label: 'No', code: false },
])

</script>

<template>
    <div class="hmn-column">
        <div className="hmn-column__header container-flex">
            <section>
                <HmnButton icon-left="move" class="move" />
                <span className="hmn-column__header__name">
                    {{ column.name.value }}
                </span>
            </section>
            <section>
                <HmnButton icon-left="duplicate" type="warning" :disabled="true" />
                <HmnButton icon-left="delete" type="alert" @click="deleteColumn(column.id)"
                    :disabled="database.columns.length === 1 ? true : false" />
                <HmnButton icon-left="arrowDown" type="accent" @click="isOpen = !isOpen"
                    :class="{ 'rotate': isOpen }" />
            </section>
        </div>

        <div v-show="isOpen" className="hmn-column__body">
            <div class="row">
                <div class="input-block input-block__half">
                    <span class="input-block__label">Column name <span class="required">*</span></span>
                    <HmnInput placeholder="Required" v-model="column.name.value" />
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="input-block input-block__half">
                    <span class="input-block__label">Column type</span>
                    <HmnSelect :list="columnTypes" v-model="column.type.value" />
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="input-block">
                    <span class="input-block__label">Required value</span>
                    <HmnSelect :list="yesNo" v-model="column.required.value" />
                </div>
                <div class="input-block">
                    <span class="input-block__label">Unique value</span>
                    <HmnSelect :list="yesNo" v-model="column.unique.value" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-column {
    display: grid;
    gap: 24px;
    padding: 9px;
    border-radius: 9px;
    border: 1px solid var(--brdr-color);
    background-color: var(--bg-item-main);

    .hmn-column__header {
        .hmn-column__header__name {
            font-size: 14px;
            font-weight: 400;
            color: var(--ft-main);
            cursor: default;
        }

        .hmn-button {
            &.rotate svg {
                transform: rotate(180deg);
            }

            &.move {
                cursor: move;
            }
        }
    }

    .hmn-column__body {
        display: grid;
        gap: 24px;
        transition: .3s all;

        .row {
            display: flex;
            align-items: start;
            gap: 9px;

            .input-block {
                display: grid;
                gap: 3px;
                width: 100%;

                .input-block__label {
                    margin-left: 3px;
                    font-size: 12px;
                    font-weight: 400;
                    color: var(--ft-main);
                    cursor: default;
                    opacity: .75;
                }
            }
        }
    }
}

@media (max-width: 720px) {
    .hmn-column .hmn-column__body {
        .row {
            display: grid;
            gap: 24px;
        }
    }
}

@media (min-width: 721px) {
    .hmn-column .hmn-column__body {
        .row {
            .input-block__half {
                width: calc(50% - 6px) !important;
            }
        }
    }
}
</style>