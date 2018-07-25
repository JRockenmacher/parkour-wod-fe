<template>
    <div class='view-page-container'>
        <top-nav />
        <section class="info-page-box">
        <h1>Info Page</h1>
      
        <w-o-d-form />
       
        <movement-form 
        :addMovement="addMovement"
        />
      
        <contact-form />
        <div class="change-log">
            <h3>Recent Updates/ Changelog</h3>
            <p>Updates to app go here</p>
        </div>
        <h3>Disclaimer:</h3>
        <div class="disclaimer">
            <p>
            As with all fitness programs, please consult with your doctor to see if this app is right for you. 
            Movements even at a beginner level can be challenging and dangerous. 
            YOU are responsible for your training. Parkour Wod Gen will not be held responsible or liable for any actions 
            taken by anyone during their performance of the WODs or parkour movements prescribed in this app.
            PLEASE NOTE THAT PARKOUR IS DANGEROUS. Be mindful of the risks.
            This is not a substitute for formal instruction by a qualilifed professional instructor.
            </p>
        </div>
        <div class="footer-info">
            <p>Version 1.0.0</p>
            <p>2018 - Present JR Rocken</p>
        </div>
        </section>
        <bottom-nav />
    </div>
</template>

<script>
import TopNav  from "@/components/TopNav.vue";
import  BottomNav from "@/components/BottomNav.vue";
import WODForm from "@/components/WODForm";
import MovementForm from "@/components/MovementForm";
import ContactForm from "@/components/ContactForm";
// import WODAPI from "@/lib/WODAPI";
// import MovementAPI from "@/lib/MovementAPI";

export default {
components: {
    TopNav,
    BottomNav,
    WODForm,
    MovementForm,
    ContactForm
  },
  data: () => ({
      movements: [],
      wods: [],
      
  }),
  methods: {
    addMovement(movement) {
        this.movements.push(movement)
        const data = JSON.stringify(this.movements[0])
        const Movement_API_URL = 'https://parkour-wod.herokuapp.com/movements'
            fetch(Movement_API_URL, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data
            //can put the new FormData object and key: value pairs here
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                console.log('RESULT', data)
            })
            .catch(function(error) {
                console.log('error:', error.message);
            });
      },
    //   addWOD(wod) {
    //       this.wods.push(wod)
    //   }
  }
}
</script>

<style>
    .view-page-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    .info-page-box{
        text-align: center;
        width: 100%;
        height: calc(100vh - 112px);
        display: inline-block;
        padding: 0;
        z-index: 100;   
        overflow-y: scroll;
        background-color: rgba(255, 255, 255, 0.8)
    }

    .disclaimer {
        width:90%;
        display: inline-block;
        text-align: center
    }
    .info-page-box button{
        width: 90%;
        margin: 3px
    }
    .change-log {
        margin: 5px;
    }
    .footer-info{
        /* position: absolute; */
        display: inline-block;
        text-align: center;
        overflow-y: scroll;
        bottom: 60px;
    }
</style>
