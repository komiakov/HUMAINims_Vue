<script lang="ts" setup>
import { useIcons } from '@/utils/useIcons'

const icons = useIcons()

const dropdownRef = ref<HTMLElement | null>(null)

const props = defineProps<{
    list: { label: string; code: string | boolean | number }[],
    modelValue: string | boolean | number
}>()

const isOpen = ref(false)

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

const emit = defineEmits(["update:modelValue"])
function selectOption(option: { label: string; code: string | boolean | number }) {
    emit("update:modelValue", option.code)
    isOpen.value = false
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="hmn-select" @click="isOpen = !isOpen" ref="dropdownRef" :class="{ 'focus': isOpen }">
        <span class="hmn-select__value">{{list.find(o => o.code === modelValue)?.label || ''}}</span>
        <span v-html="icons['arrowDown']" class="hmn-select__icon" :class="{ 'rot': isOpen }"></span>

        <transition name="dropdown-fade">
            <div class="hmn-select__body shadow" v-show="isOpen">
                <div class="hmn-select__body_option" v-for="option in list"
                    @click="selectOption(option); isOpen = !isOpen">
                    <span>{{ option.label }}</span>
                    <span v-if="option.code === modelValue" class="hmn-select__icon icon"
                        v-html="icons['selected']"></span>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
.hmn-select {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;
    height: 42px;
    width: 100%;
    padding: 0 9px;
    border: 1px solid var(--brdr-color);
    border-radius: 6px;
    transition: .3s all;
    background-color: var(--bg-item-main);
    transition: .3s all;
    cursor: pointer;

    &.focus {
        border-color: var(--accent);
    }

    .hmn-select__value {
        font-size: 12px;
        font-weight: 400;
        color: var(--ft-main);
    }

    .hmn-select__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;

        path {
            stroke: var(--accent);
        }

        &.rot svg {
            transform: rotate(180deg);
        }
    }

    .hmn-select__body {
        z-index: 99999;
        display: grid;
        position: absolute;
        gap: 9px;
        top: 48px;
        left: 0;
        min-width: 240px;
        padding: 6px;
        border: 1px solid var(--brdr-color);
        border-radius: 9px;

        .hmn-select__body_option {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 36px;
            padding: 0 12px;
            border-radius: 6px;

            :nth-child(1) {
                font-size: 12px;
                font-weight: 400;
                color: var(--ft-main);
            }

            &:hover {
                background-color: var(--bg-item-main);
            }
        }
    }
}

[data-theme="light"] {
    .hmn-select__body {
        background-color: var(--bg-main);
    }
}

[data-theme="dark"] {
    .hmn-select__body {
        background-color: var(--bg-secondary);
    }
}
</style>