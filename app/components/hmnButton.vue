<script setup lang="ts">
import { useIcons } from "@/utils/useIcons";

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
    </button>
</template>

<style lang="scss">
@mixin hover() {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }

    &:active {
        @media (hover: none) {
            @content;
        }
    }
}

.hmn-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-width: 42px;
    height: 42px;
    padding: 0 11px;
    border: 1px solid transparent;
    border-radius: 6px;
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
        padding: 0 9px;
        font-size: 12px;
    }

    &.primary,
    &.alert,
    &.warning {
        border-color: var(--brdr-color);

        @include hover() {
            background-color: var(--bg-item-main);
        }
    }

    &.primary {
        .hmn-button__icon svg path {
            stroke: var(--accent);
        }

        .hmn-button__label {
            color: var(--ft-main);
        }
    }

    &.alert {
        .hmn-button__icon svg path {
            stroke: var(--alert);
        }

        .hmn-button__label {
            color: var(--alert);
        }
    }

    &.warning {
        .hmn-button__icon svg path {
            stroke: var(--warning);
        }

        .hmn-button__label {
            color: var(--warning);
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

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
    }
}

@media (max-width: 719px) {
    .hmn-button.mbl-hide {
        .hmn-button__label {
            display: none;
        }
    }
}
</style>