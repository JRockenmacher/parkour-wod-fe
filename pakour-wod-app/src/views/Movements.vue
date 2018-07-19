<template>
<main>
    <div class="view-page-container">
    <top-nav />
    <section class="button-box">
    <button type="button" class="btn btn-warning" title="" data-container="body" data-toggle="popover" data-placement="bottom" data-content="This is where movement is described in detail with a link to a demo video">Bottom</button>
    </section>
    <bottom-nav />
    </div>
</main>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'

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
}    
    .button-box {
        position: absolute;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10% 5% 10% 5%;
  }
  .btn-warning {
      width: 90%;
  }
</style>
