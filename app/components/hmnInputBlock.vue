<script setup lang="ts">

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
    },
    label: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(["update:modelValue"])

const updateValue = (value: string | number | boolean) => {
  emit("update:modelValue", value)
}
</script>

<template>
    <div class="hmn-input-block">
       <span class="hmn-input-block__label">{{ label }}</span>
       <HmnInput :icon="icon" :type="type" :model-value="modelValue" :placeholder="placeholder" :error-message="errorMessage" @update:model-value="updateValue" />
    </div>
</template>

<style lang="scss">
.hmn-input-block {
  display: grid;
  gap: 3px;
  .hmn-input-block__label {
    @include tx-xs-bold();
    cursor: default;
    opacity: .5;
  }
}
</style>