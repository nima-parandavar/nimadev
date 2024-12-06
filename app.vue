<script setup lang="ts">

</script>

<template>
  <div class="m-20">
    <MinDropdown
      :items="[[{ key: 1, label: 'Account', to: '/', icon: 'i-lucide-airplay', badge: 'test', slot: 'account', avatar: { label: 'Nima Parse', src: 'https://randomuser.me/api/portraits/men/43.jpg' } }, { key: 2, label: 'admin page', click: () => { console.log('TEST') }, badge: 10 }]]">
      <MinButton icon="i-lucide-airplay" variant="soft" disabled="true" label="dropdown" />
    </MinDropdown>

  </div>
</template>
