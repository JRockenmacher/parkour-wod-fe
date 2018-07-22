<template>
<div>
    <div class="view-page-container">
    <top-nav />
    <section class="button-box">
    
    <b-button @click="showModal">
      Movement Name
    </b-button>
    <b-modal ref="myModalRef" hide-footer title="link to movement: display movement name">
      <div class="d-block text-center">
        <p strong>counter</p>
        <script
      </div>
      <b-btn class="mt-3" variant="warning" block @click="genNewWOD">New WOD</b-btn>
    </b-modal>
  
    </section>
    <bottom-nav />
    </div>
</div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'

export default {
components: {
    TopNav,
    BottomNav
  },
  methods: {
      genNewWOD() {
          console.log('generating...');
          
      }
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
