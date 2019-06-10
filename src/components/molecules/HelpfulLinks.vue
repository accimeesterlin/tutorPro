<template>
    <div class="helpful-links">
        <h3>Helpful Links</h3>
        <List>
            <ListItem>Google Sheet</ListItem>
            <ListItem>Tutor Evaluation Form</ListItem>
            <ListItem>Student Evaluation</ListItem>
        </List>
    </div>
</template>


<script>
import List from '../atoms/List.vue';
import ListItem from '../atoms/ListItem.vue';

export default {
  name: 'HelpFulLinks',
  components: { List, ListItem },
};
</script>


<style>
    .helpful-links {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
