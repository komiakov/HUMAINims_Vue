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
    <NuxtLink v-if="link" :to="disabled ? '' : link" class="hmn-button"
        :class="[{ 'disabled': disabled }, type, { 'txt-left': label && iconRight }, { 'txt-right': label && iconLeft }, { 'txt': label && !iconLeft && !iconRight }]" @click="handleClick">
        <span v-if="iconLeft" class="hmn-button__icon icon" v-html="icons[iconLeft]"></span>
        <span v-if="label" class="hmn-button__label">{{ label }}</span>
        <span v-if="iconRight" class="hmn-button__icon icon" v-html="icons[iconRight]"></span>
        <slot name="indicatior-slot"></slot>
    </NuxtLink>
    <button v-else class="hmn-button" :class="[{ 'disabled': disabled }, type, { 'txt-left': label && iconRight }, { 'txt-right': label && iconLeft }, { 'txt': label && !iconLeft && !iconRight }]"
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
    cursor: pointer;

    &,
    & .hmn-button__label,
    & .hmn-button__icon path {
        transition: .3s all;
    }

    &.txt-left {
        padding: 0 var(--block-padding);

        .hmn-button__label {
            padding: 0 18px 0 9px;
        }
    }

    &.txt-right {
        padding: 0 var(--block-padding);

        .hmn-button__label {
            padding: 0 9px 0 12px;
        }
    }

    &.txt {
        padding: 0 var(--block-padding);

        .hmn-button__label {
            padding: 0 9px;
        }
    }

    .hmn-button__label {
        flex: 1;
        display: flex;
        justify-content: start;
        @include tx-btn-regular;
    }

    &.primary {
        color: var(--ft-main);

        &.brdr {
            @include border;
        }

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

        @include hover() {
            opacity: .85;
        }
    }

    @include desktop-max(719px) {
        &.mbl-hide{
            padding: 0;
            .hmn-button__label, .kbd-slot  {
                display: none;
            }
        }
    }
}
</style>