<template>
    <header :class="className">
        <slot></slot>
    </header>
</template>


<script>
export default {
  props: {
    className: String,
  },
};
</script>
