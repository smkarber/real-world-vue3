<script setup>
  import { onMounted, ref } from 'vue';
  import EventService from '@/services/EventService';

  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  });

  const event = ref(null);

  onMounted(() => {
    EventService.getEventById(props.id)
      .then((resp) => (event.value = resp.data))
      .catch((err) => console.error(`Axios error fetching event: ${err}`));
  });
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
