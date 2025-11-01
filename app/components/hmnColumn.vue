<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
    <div class="hmn-column">
        <div class="hmn-column__header container-flex">
            <section>
                <HmnButton class="hmn-column__move" iconLeft="move" type="primary" />
                <span class="hmn-column__indicator text">abc</span>
            </section>
            <section>
                <HmnButton iconLeft="duplicate" type="warning" />
                <HmnButton iconLeft="delete" type="alert" />
                <HmnButton iconLeft="arrowDown" type="accent" @click="isOpen = !isOpen" :class="{ 'rotate': isOpen }" />
            </section>
        </div>

        <div v-if="isOpen" class="hmn-column__body">
            <div class="row">
                <HmnInputBlock label="* Column name" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-column {
    position: relative;
    display: grid;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    @include border();
    @include shadow();
    border-radius: var(--block-radius);

    .hmn-column__header {
        padding: var(--item-padding);

        .hmn-column__move {
            cursor: move;
        }

        .hmn-column__indicator {
            text-align: center;
            width: 60px;
            font-size: 11px;
            padding: 2px 0;
            border: 1px solid transparent;
            border-radius: var(--item-radius);
            cursor: default;

            &.text {
                background-color: var(--warning-op-25);
                color: var(--warning);
                border-color: var(--warning);
            }
        }

        .hmn-button.rotate {
            svg {
                transform: rotate(180deg);
            }
        }
    }

    .hmn-column__body {
        padding: var(--item-padding);
    }
}
</style>