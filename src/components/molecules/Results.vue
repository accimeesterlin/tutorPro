<template>
    <div>
        <p>Results: {{number}}</p>
    </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    number: Number,
  },
};
</script>
