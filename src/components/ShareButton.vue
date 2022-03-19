<script setup lang="ts">
import seedrandom from 'seedrandom'
import { dayNo } from '~/state'
import { t } from '~/i18n'
import { history } from '~/storage'

function open() {
  // showShareDialog.value = true
  const idx = Math.floor(seedrandom(""+Date())() * 999999999)
  history.value[dayNo.value] = {}
  window.location.replace("?random=" + idx)
}
</script>

<template>
  <button
    btn flex="~ wrap gap-x-2 center" ws-nowrap text-lg font-serif
    p="x3 y1"
    @click="open()"
  >
    <div text-base />
    {{ t('share') }}
  </button>
</template>
