<template>
  <div class="section-box">
    <img :src="imageUrl" alt>
    <div class="section-box__text">
      <p>{{name}}</p>
      <p>{{date}}</p>
      <p>{{time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionBox',
  props: {
    date: String,
    time: String,
    name: String,
    imageUrl: {
      type: String,
      default: 'https://via.placeholder.com/150',
    },
  },
};
</script>

<style>
    .section-box {
        border: 1px solid lightgrey;
        width: 250px;
        padding: 10px;
    }

    .section-box__text {
        clear: both;
    }

    img {
        height: 50px;
        float: right;
    }

</style>
