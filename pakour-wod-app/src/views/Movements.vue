<template>
    <section class="container">
        <!-- <movement 
        v-for="movement in movements"
        :removeMovement="removeMovement"
        :movement="movement"
        /> -->
    <div class="view-page-container">
        <top-nav />
        <section class="button-box">
            <movement-list 
            :movements="movements"
            />
  
    </section>
    <bottom-nav />
    </div>
    </section>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
import MovementList from '@/components/MovementList.vue'
// import API from '@/lib/API.js'

export default {
name: 'movemements',
// props: ['movements'],
components: {
    TopNav,
    BottomNav,
    MovementList
    // Movement
  },
  data: () => ({
          movements: [],
  }),
// async mounted() {
//     this.movements = await API.getMovements()
// },
    mounted() {
        const Movement_API_URL = 'https://parkour-wod.herokuapp.com/movements'
        return fetch(Movement_API_URL)
            .then(res => res.json())
            .then( (res) => {
                this.movements.push(res)
                // this.movements = res
                this.movements = this.movements[0].movements
                console.log(this.movements);                      
            })
    },
  methods: {
    // getMovements() {
  }
}
</script>

<style scoped>
    .view-page-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
        /* position: absolute */
        
}    
    .button-box {
       
        text-align: center;
        width: 100%;
        height: calc(100vh - 112px);
        display: inline-block;
        padding: 0;
        z-index: 100;   
        overflow-y: scroll;
        

    }

  .button-box button {
      min-height: 30px;
      width: 90%;
      margin: 8px;
  }

</style>
