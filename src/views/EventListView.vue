<script setup>
  import { onMounted, ref } from 'vue';
  import EventCard from '@/components/EventCard.vue';
  import EventService from '@/services/EventService';

  const events = ref(null);

  onMounted(() => {
    EventService.getEvents()
      .then((resp) => (events.value = resp.data))
      .catch((err) => console.error(`Axios error fetching events: ${err}`));
  });
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
