<script setup lang="ts">
const dropdownRef = ref<HTMLElement | null>(null)
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    iconLeft: {
        type: String,
        default: ""
    },
    iconRight: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "primary" // 'button' or 'link'
    },
    alignment: {
        type: String,
        default: "right"
    }
})

const isOpen = ref(false)

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="hmn-dropdown" ref="dropdownRef">
        <hmn-button :label="label" :type="type" :iconLeft="iconLeft" :iconRight="iconRight" @click="isOpen = !isOpen" />

        <transition name="dropdown-fade">
            <div v-show="isOpen" class="hmn-dropdown__body" :class="alignment">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
.hmn-dropdown {
    position: relative;

    .hmn-dropdown__body {
        z-index: 99999;
        display: grid;
        position: absolute;
        gap: 9px;
        top: 42px;
        min-width: 240px;
        padding: 6px;
        @include border();
        border-radius: 9px;
        background-color: var(--bg-secondary);

        .hmn-button {
            height: 36px;
            gap: 0px;
            justify-content: start;
            border: none;
        }

        &.right {
            right: 0;
        }

        &.left {
            left: 0;
        }
    }
}
</style>