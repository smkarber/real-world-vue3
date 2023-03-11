<script setup>
  import { computed, ref, watchEffect } from 'vue';
  import EventCard from '@/components/EventCard.vue';
  import EventService from '@/services/EventService';

  const props = defineProps({ page: { type: Number } });

  const events = ref(null);
  const totalEvents = ref(0);

  const hasNextPage = computed(() => {
    return props.page < Math.ceil(totalEvents.value / 2);
  });

  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, props.page)
      .then((resp) => {
        events.value = resp.data;
        totalEvents.value = resp.headers['x-total-count'];
      })
      .catch((err) => console.error(`Axios error fetching events: ${err}`));
  });
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
    <div class="pagination">
      <RouterLink
        id="previous-link"
        v-if="page != 1"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        >&#60; Previous</RouterLink
      >
      <RouterLink
        id="next-link"
        v-if="hasNextPage"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next &#62;</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    width: 290px;
  }

  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }

  #previous-link {
    text-align: left;
  }

  #next-link {
    text-align: right;
  }
</style>
