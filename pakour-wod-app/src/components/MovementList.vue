<template>
    <section class="row">
        <movement 
        v-for="movement in movements"
        :movement="movement"
        />
    </section>
</template>

<script>
import Movement from '@/components/Movement.vue'

export default {
    name: 'movement-list',
    props: ['movements'],
    components: {
        Movement
    }
}
</script>

<style>

</style>
