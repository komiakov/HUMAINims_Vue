<script setup lang="ts">

const isOpen = ref(false)

</script>

<template>
    <div class="hmn-column">
        <div className="hmn-column__header container-flex">
            <section>
                <HmnButton icon-left="move" :disabled="true" />
                <span className="hmn-column__header__name">
                    column_1
                </span>
            </section>
            <section>
                <HmnButton icon-left="duplicate" type="warning" :disabled="true" />
                <HmnButton icon-left="delete" type="alert" :disabled="true" />
                <HmnButton icon-left="arrowDown" type="accent" @click="isOpen = !isOpen" :class="{'rotate': isOpen}" />
            </section>
        </div>

        <div v-if="isOpen" className="hmn-column__body">
            <div class="row">
                <div class="input-block input-block__half">
                    <span class="input-block__label">* Column name</span>
                    <HmnInput placeholder="Required" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hmn-column {
  display: grid;
  gap: 24px;
  padding: 9px;
  border-radius: 9px;
  border: 1px solid var(--brdr-color);
  background-color: var(--bg-item-main);

  .hmn-column__header {
    .hmn-column__header__name {
      font-size: 14px;
      font-weight: 300;
      color: var(--ft-main);
      cursor: default;
    }
    .hmn-button {
        &.rotate svg {
            transform: rotate(180deg);
        }
        &.move {
            cursor: move;
        }
    }
  }

  .hmn-column__body {
    display: grid;
    gap: 12px;
    .row {
      display: flex;
      align-items: start;
      gap: 9px;
      .input-block {
        display: grid;
        gap: 3px;
        width: 100%;
        .input-block__label {
          font-size: 12px;
          color: var(--ft-main);
          cursor: default;
          opacity: .75;
        }
      }
    }
  }
}

@media (max-width: 720px) {
    .hmn-column .hmn-column__body {
        .row {
            display: grid;
            gap: 24px;
        }
    }
}

@media (min-width: 721px) {
    .hmn-column .hmn-column__body {
        .row {
            .input-block__half {
                width: calc(50% - 6px) !important;
            }
        }
    }
}
</style>