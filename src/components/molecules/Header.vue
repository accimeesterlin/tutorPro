<template>
  <Header className="header">
    <h2>{{title}}</h2>

    <MenuItems/>
  </Header>
</template>


<script>
import Header from '../atoms/Header.vue';
import MenuItems from './MenuItems.vue';

export default {
  name: 'HeaderSection',
  components: { Header, MenuItems },
  props: {
    title: String,
  },
};
</script>

<style scoped lang="css">
    .header,
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header {
        border: 1px solid lightgrey;
        padding: 0px 20px;
    }

    .header >>> ul li {
        margin-left: 20px;
        list-style: none;
        border-left: 1px solid #000;
        padding-left: 10px;
    }

    .header >>> ul li:first-child {
        border: none;
    }
</style>
