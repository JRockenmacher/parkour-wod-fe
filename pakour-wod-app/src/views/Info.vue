<template>
    <div class='view-page-container'>
        <top-nav />
        <section class="info-page-box">
        <h1>Info Page</h1>
        <b-button @click="showForm">
            Submit A WOD
        </b-button>
        <b-button @click="showForm">
            Submit A Movement
        </b-button>
        <b-button @click="showForm">
            Contact Us
        </b-button>
        <div class="change-log">
            <h3>Recent Updates/ Changelog</h3>
            <p>Updates to app go here</p>
        </div>
        <h3>Disclaimer:</h3>
        <div class="disclaimer">
            <p>
            As with all fitness programs, please consult with your doctor to see if this app is right for you. 
            Movements even at a beginner level can be challenging and difficult. 
            YOU are responsible for your training. Parkour Wod Gen will not be held responsible or liable for any actions 
            taken by anyone during their performance of the WODs or parkour movements prescribed in this app.
            PLEASE NOTE THAT PARKOUR IS DANGEROUS. Be mindful of the risks. 
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

export default {
components: {
    TopNav,
    BottomNav,
    WODForm,
    MovementForm
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
        background-color: rgba(255, 255, 255, 0.7)
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
