<template>
    <nav class="footer navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <button type="button" class="btn btn-info" 
        @click.prevent="goToWods">
        WODs
        </button>
        <button type="button" class="btn btn-info" 
        @click.prevent="goToMovements">
            <!-- marked('Movement\nLibrary') -->
        Movements
        </button>
    </nav>
</template>

<script>
export default {

    methods: {
        goToMovements(){
            console.log('Move clicked');
            this.$router.push({path:'movements'})
        },
        goToWods(){
            console.log('WOD clicked')
            this.$router.push({path:'/'})
        }
    },

}
</script>


<style>
  
</style>
