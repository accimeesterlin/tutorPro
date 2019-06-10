<template>
  <List class="menu-items">
    <ListItem>Dashboard</ListItem>
    <ListItem>Tutors</ListItem>
    <ListItem>Students</ListItem>
    <ListItem>Profile</ListItem>
  </List>
</template>


<script>
import List from '../atoms/List.vue';
import ListItem from '../atoms/ListItem.vue';

export default {
  name: 'MenuItems',
  components: { List, ListItem },
};
</script>
