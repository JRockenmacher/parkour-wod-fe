<template>
    <section>
        <movement 
        v-for="movement in movements"
        :movement="movement"
        :key="movement.id"
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
    },
        
}
</script>


