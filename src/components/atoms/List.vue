<template>
    <ul :class="className">
        <slot></slot>
    </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    className: {
      type: String,
    },
  },
};
</script>
