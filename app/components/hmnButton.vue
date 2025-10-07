<script setup lang="ts">
const icons = useIcons()

const props = defineProps({
    link: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    iconLeft: {
        type: String,
        default: '',
    },
    iconRight: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'primary',
    },
})

const emit = defineEmits(['click'])

function handleClick(event: Event) {
    if (props.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
    }
    emit('click', event)
}
</script>

<template>
    <NuxtLink v-if="link" :to="disabled ? '' : link" class="hmn-button" :class="[{ 'disabled': disabled }, type]"
        @click="handleClick">
        <span v-if="iconLeft" class="hmn-button__icon icon" v-html="icons[iconLeft]"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconRight" class="hmn-button__icon icon" v-html="icons[iconRight]"></span>
    </NuxtLink>
    <button v-else class="hmn-button" :class="[{ 'disabled': disabled }, type]" @click="handleClick">
        <span v-if="iconLeft" class="hmn-button__icon icon" v-html="icons[iconLeft]"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconRight" class="hmn-button__icon icon" v-html="icons[iconRight]"></span>
        <slot name="kbd-slot"></slot>
    </button>
</template>

<style lang="scss">
.hmn-button {
    @include item-def-format();

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 8px;
    border: 1px solid transparent;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;

    &,
    & .hmn-button__label,
    & .hmn-button__icon path {
        transition: .3s all;
    }

    .hmn-button__icon,
    .hmn-button__label {
        z-index: 2;
        white-space: nowrap;
    }

    .hmn-button__label {
        display: flex;
        justify-content: start;
        flex: 1;
        padding: 0 6px;
        @include tx-btn-bold;
    }

    &.primary {
        border-color: var(--brdr-color);

        .hmn-button__icon svg path {
            stroke: var(--accent);
        }

        .hmn-button__label {
            color: var(--ft-main);
        }

        @include hover() {
            background-color: var(--bg-item-main);
        }
    }

    &.accent {
        background-color: var(--accent);

        .hmn-button__icon svg path {
            stroke: var(--white);
        }

        .hmn-button__label {
            color: var(--white);
        }
    }

    &.alert {

        .hmn-button__icon svg path {
            stroke: var(--danger);
        }

        .hmn-button__label {
            color: var(--danger);
        }

        @include hover() {
            background-color: var(--danger-op-25);
        }
    }

    &.warning {

        .hmn-button__icon svg path {
            stroke: var(--warning);
        }

        .hmn-button__label {
            color: var(--warning);
        }

        @include hover() {
            background-color: var(--warning);

            .hmn-button__icon svg path {
                stroke: var(--white);
            }
        }
    }
}

@media (max-width: 719px) {
    .hmn-button.mbl-hide .hmn-button__label {
        display: none;
    }
}
</style>