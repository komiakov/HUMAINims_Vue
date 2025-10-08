<script setup lang="ts">
import { useIcons } from '@/utils/useIcons'
const icons = useIcons()

const props = defineProps({
    type: {
        type: String,
        default: "text"
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    icon: {
        type: String,
        default: ""
    },
    errorMessage: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
    <div class="hmn-input">
        <span v-if="icon && icons[icon]" v-html="icons[icon]" class="hmn-input__icon icon"></span>
        <input :type="type" :placeholder="placeholder" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
        <span v-if="modelValue || modelValue == '0'" v-html="icons['close']" @click="emit('update:modelValue', '')"
            class="hmn-input__icon hmn-input__icon--clear icon">
        </span>

        <span v-if="errorMessage" v-html="icons['error']" class="icon error-icon"></span>
        <div v-if="errorMessage" class="error-message">
            <span class="error-message__label">Error :</span>
            <span class="error-message__text">{{ errorMessage }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-input {
    @include item-def-format();
    position: relative;
    flex: 1;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 0 9px;
    @include border();
    transition: .3s all;
    background-color: var(--bg-item-main);

    .error-message {
        display: none;
        gap: 6px;
        z-index: 99999;
        position: absolute;
        top: 42px;
        right: -2px;
        width: 240px;
        padding: 9px;
        border: 1px solid var(--danger);
        border-radius: 6px;
        background-color: var(--danger-op-25);
        color: var(--danger);

        .error-message__label,
        .error-message__text {
            @include tx-btn-regular;
        }
    }

    .error-icon {
        cursor: pointer;

        svg path {
            stroke: var(--danger);
        }
    }

    .error-icon:hover+.error-message {
        display: grid;
    }

    .hmn-input__icon svg path {
        stroke: var(--accent);
    }

    .hmn-input__icon--clear {
        cursor: pointer;
    }

    input {
        flex: 1;
        @include tx-inpt-bold;
        color: var(--ft-main);
    }

    &:focus-within {
        border-color: var(--accent);
    }
}
</style>