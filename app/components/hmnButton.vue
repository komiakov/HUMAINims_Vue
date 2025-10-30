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
        default: '',
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
    <NuxtLink v-if="link" :to="disabled ? '' : link" class="hmn-button"
        :class="[{ 'disabled': disabled }, type, { 'w-label': label }]" @click="handleClick">
        <span v-if="iconLeft" class="hmn-button__icon icon" v-html="icons[iconLeft]"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconRight" class="hmn-button__icon icon" v-html="icons[iconRight]"></span>
        <slot name="indicatior-slot"></slot>
    </NuxtLink>
    <button v-else class="hmn-button" :class="[{ 'disabled': disabled }, type, { 'w-label': label }]"
        @click="handleClick">
        <span v-if="iconLeft" class="hmn-button__icon icon" v-html="icons[iconLeft]"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconRight" class="hmn-button__icon icon" v-html="icons[iconRight]"></span>
        <slot name="indicatior-slot"></slot>
    </button>
</template>

<style lang="scss">
.hmn-button {
    position: relative;
    @include inline-center;
    @include item-def-format();
    gap: var(--item-gap);
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &.w-label {
        padding: 0 calc(var(--item-padding) * 2);
    }

    .hmn-button__label {
        flex: 1;
        display: flex;
        justify-content: center;
        @include tx-btn-regular;
    }

    &.primary {
        border: 1px solid var(--brdr-color);
        transition: border .3s;
        .hmn-button__icon svg path {
            stroke: var(--accent);
        }

        .hmn-button__label {
            color: var(--ft-main);
        }
        @include hover() {
            border-color:var(--accent);
        }
    }

    &.secondary {
        background-color: var(--bg-item-main);
        transition: opacity .3s;

        .hmn-button__icon svg path {
            stroke: var(--white);
        }

        .hmn-button__label {
            color: var(--white);
        }
        @include hover() {
            opacity: .85;
        }
    }

    &.accent {
        background-color: var(--accent);
        transition: background-color .3s;

        .hmn-button__icon svg path {
            stroke: var(--white);
        }

        .hmn-button__label {
            color: var(--white);
        }

        @include hover() {
            background-color: var(--bg-item-secondary);
        }
    }

    @include desktop-max(659px) {
        &.mbl-hide {
            padding: 0;

            .hmn-button__label {
                display: none;
            }
        }
    }
}
</style>