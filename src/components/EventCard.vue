<script setup>
  defineProps({
    event: {
      type: Object,
      required: true,
    },
  });

  function use12HourConverter(time) {
    return new Date(`2000-01-01T${time}Z`).toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
  }
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ use12HourConverter(event.time) }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .event-card {
    width: 250px;
    padding: 20px;
    margin-bottom: 18px;
    border: 1px solid #39495c;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
