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

const columnFormats = ref({
    'number': [{ label: 'Integer', code: 'integer' }, { label: 'Decimal', code: 'decimal' }],
})

const yesNo = ref([
    { label: 'Yes', code: true },
    { label: 'No', code: false },
])

const trueFalse = ref([
    { label: 'True', code: true },
    { label: 'False', code: false },
])

</script>

<template>
    <div class="hmn-column">
        <div className="hmn-column__header container-flex">
            <section>
                <HmnButton icon-left="move" class="move" />
                <span class="hmn-column__header__type" id="text" v-if="column.type.value === 'text'">abc</span>
                <span class="hmn-column__header__type" id="number" v-if="column.type.value === 'number'">123</span>
                <span class="hmn-column__header__type" id="boolean" v-if="column.type.value === 'boolean'">t/f</span>
                <span className="hmn-column__header__name">
                    {{ column.name.value }}
                </span>
            </section>
            <section>
                <HmnButton icon-left="delete" type="alert" @click="deleteColumn(column.id)"
                    :disabled="database.columns.length === 1 ? true : false" />
                <HmnButton icon-left="arrowDown" type="accent" @click="isOpen = !isOpen"
                    :class="{ 'rotate': isOpen }" />
            </section>
        </div>

        <div v-show="isOpen" className="hmn-column__body">
            <div class="row">
                <div class="input-block input-block__half">
                    <span class="input-block__label"><span class="required">*</span> Column name</span>
                    <HmnInput placeholder="Required" v-model="column.name.value"
                        :errorMessage="!column.name.isValid ? 'Name must start with a letter and contain 3–37 characters total (letters, digits, and underscores only).' : ''" />
                </div>
            </div>
            <div class="row">
                <div class="input-block input-block__half">
                    <span class="input-block__label">Column type</span>
                    <HmnSelect :list="columnTypes" v-model="column.type.value" />
                </div>
                <div class="input-block input-block__half" v-if="column.type.value === 'number'">
                    <span class="input-block__label">Column format</span>
                    <HmnSelect :list="columnFormats[column.type.value]" v-model="column.format.value" />
                </div>
            </div>
            <div class="row" v-if="column.type.value === 'text' || column.type.value === 'number'">
                <div class="input-block">
                    <span class="input-block__label">Required value</span>
                    <HmnSelect :list="yesNo" v-model="column.required.value" />
                </div>
                <div class="input-block">
                    <span class="input-block__label">Unique value</span>
                    <HmnSelect :list="yesNo" v-model="column.unique.value" />
                </div>
            </div>
            <div class="row" v-if="column.type.value === 'text' || column.type.value === 'number'">
                <div class="input-block">
                    <span class="input-block__label"><span v-if="column.type.value === 'text'" class="required">*</span>
                        Min. {{ column.type.value === 'text' ? 'lenght' : 'value' }}</span>
                    <HmnInput placeholder="0-99999" v-model="column.min.value" />
                </div>
                <div class="input-block">
                    <span class="input-block__label"><span v-if="column.type.value === 'text'" class="required">*</span>
                        Max. {{ column.type.value === 'text' ? 'lenght' : 'value' }}</span>
                    <HmnInput placeholder="0-99999" v-model="column.max.value" />
                </div>
            </div>
            <div class="row">
                <div class="input-block" :class="{ 'input-block__half': column.type.value === 'number' }"
                    v-if="column.type.value === 'text' || column.type.value === 'number'">
                    <span class="input-block__label">Default value</span>
                    <HmnInput v-model="column.default.value" />
                </div>
                <div class="input-block input-block__half" v-if="column.type.value === 'boolean'">
                    <span class="input-block__label">Default value</span>
                    <HmnSelect :list="trueFalse" v-model="column.default.value" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-column {
    position: relative;
    display: grid;
    gap: 24px;
    max-width: 960px;
    width: 100%;
    padding: 9px;
    margin: 0 auto;
    border-radius: 9px;
    @include border();
    background-color: var(--bg-secondary);

    .hmn-column__header {
        .hmn-column__header__type {
            border-radius: 4px;
            cursor: default;

            &#text,
            &#number,
            &#boolean {
                @include inline-center();
                height: 24px;
                width: 60px;
                @include tx-xs-bold;
                transition: .3s all;
            }

            &#text {
                color: var(--warning);
                background-color: var(--warning-op-25);
                border: 1px solid var(--warning);
            }

            &#number {
                color: var(--info);
                background-color: var(--info-op-25);
                border: 1px solid var(--info);
            }

            &#boolean {
                color: var(--success);
                background-color: var(--success-op-25);
                border: 1px solid var(--success);
            }
        }

        .hmn-column__header__name {
            @include tx-sm-regular;
            color: var(--ft-main);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
        gap: 18px;
        transition: .3s all;

        .row {
            display: flex;
            align-items: start;
            gap: 9px;

            @include desktop-max(719px) {
                display: grid;
                gap: 24px;
            }

            .input-block {
                display: grid;
                gap: 3px;
                width: 100%;

                &.input-block__half {
                    @include desktop-min(720px) {
                        width: calc(50% - 6px) !important;
                    }
                }

                .input-block__label {
                    position: relative;
                    margin-left: 3px;
                    @include tx-xs-bold;
                    color: var(--ft-main);
                    cursor: default;
                    opacity: .75;
                }
            }
        }
    }
}
</style>