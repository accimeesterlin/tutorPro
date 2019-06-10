<template>
    <div class="sidebar">
        <TutorSidebarNavigationButtons />
        <HelpfulLinks />
    </div>
</template>

<script>
import HelpfulLinks from '../molecules/HelpfulLinks.vue';
import TutorSidebarNavigationButtons from '../molecules/TutorSidebarNavigationButtons.vue';

export default {
  name: 'Sidebar',
  components: { TutorSidebarNavigationButtons, HelpfulLinks },
};
</script>


<style scoped>
    .sidebar {
        border: 1px solid lightgrey;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .sidebar >>> .helpful-links {
        margin-top: 200px;
    }

    .sidebar >>> .tutor-sidebar-navigation {
        width: 90%;
    }
</style>
