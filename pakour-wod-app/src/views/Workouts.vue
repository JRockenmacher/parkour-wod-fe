<template>

<div class='view-page-container'>
    <top-nav />
    <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
          Option one is this and that—be sure to include why it's great
        </label>
    </div>
    <section class="button-box">
        <button type="button" class="btn btn-warning">Favorites</button>
        <button type="button" class="btn btn-warning">Warmup</button>
        <button type="button" class="btn btn-warning">Skill/Strength</button>
        <button type="button" class="btn btn-warning">Power</button>
        <button type="button" class="btn btn-warning">Endurance</button>
        <button type="button" class="btn btn-warning">Benchmark</button>
        <button type="button" class="btn btn-warning">Partner</button>
        <button type="button" class="btn btn-warning">Mobility</button>
    </section>
    <bottom-nav />
</div>


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
