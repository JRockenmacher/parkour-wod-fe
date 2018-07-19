<template>
    <div class='view-page-container'>
        <top-nav />
        <section class="info-page-box">
        <h1>Info Page</h1>
        <!-- <form action="">email form goes here</form> -->
        <h3>Recent Updates/ Changelog</h3>
        <h3>Disclaimer</h3>
        <span>Version</span>
        <span>2018 - Present JR Rocken</span>
        </section>
        <bottom-nav />
    </div>
</template>

<script>
import TopNav  from "@/components/TopNav.vue";
import  BottomNav  from "@/components/BottomNav.vue";

export default {
components: {
    TopNav,
    BottomNav
  }
}
</script>

<style>
    .view-page-container {
        height: 100%;
        position: center;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center
    } 

    .info-page-box {
        position: absolute;
        top:50%;
        margin: auto;
        background: rgba(255,255,255,0.5);
        padding: 5%,5%,5%,5%;
    }
</style>
