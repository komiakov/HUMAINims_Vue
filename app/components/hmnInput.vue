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
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
    <div class="hmn-input">
        <span v-if="icon && icons[icon]" v-html="icons[icon]" class="hmn-input__icon icon"></span>
        <input :type="type" :placeholder="placeholder" :value="modelValue"
            @blur="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @keydown.enter.prevent="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
        <span v-if="modelValue || modelValue == '0'" v-html="icons['cancel']" @click="emit('update:modelValue', '')"
            class="hmn-input__icon hmn-input__icon--clear icon">
        </span>
    </div>
</template>

<style lang="scss">
.hmn-input {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    height: 42px;
    width: 100%;
    padding: 0 9px;
    border-radius: 6px;
    border: 1px solid var(--brdr-color);
    transition: var(--transtition);
    background-color: var(--bg-item-main);

    .hmn-input__icon svg path{
        stroke: var(--accent);
    }
    .hmn-input__icon--clear {
        cursor: pointer;
    }

    input {
        flex: 1;
        font-size: 14px;
        font-weight: 300;
        color: var(--ft-main);
    }

    &:focus-within {
        border-color: var(--accent);
    }
}
</style>