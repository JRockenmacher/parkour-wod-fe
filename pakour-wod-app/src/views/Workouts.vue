<template>

<div class='view-page-container'>
    <top-nav />
    <section class="button-box">
    <div class="form-check">
        <h3>Modifiers</h3>
        <b-form-group>
            <b-form-checkbox-group id="checkboxes2" name="modifiers">
                <b-form-checkbox @change='this.saveWeight' v-model="weights" value="weights">Weights</b-form-checkbox>
                <b-form-checkbox @change='saveEquip' v-model="equipment" value="equip">Equipment</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
        <!-- <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option3" checked="">
          workout target placeholder
        </label> -->
    </div>
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
  },
    data() {
        return {
            weights: false,
            equipment: false,
      }
  },

    mounted() {
        this.weights = localStorage.getItem('weights') != 'null'? true : false
        this.equipment = localStorage.getItem('equipment') != 'null' ? true : false

  },

  methods: {
      saveWeight(e) {
        localStorage.setItem("weights", e)          
      },
      saveEquip(e) {
        localStorage.setItem("equipment", e)          
      }
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
.button-box button {
    min-height: 30px;
    width: 90%;
    margin: 8px;
}
.form-check {
    background: rgba(255,255,255,0.8);
    width: inherit;
    text-align: center;
    border-radius: .25rem; 
    margin-top: 5px;   
}
@media (max-width:420px){
    .form-check{
        margin-top: 2vh;
    }
}
</style>
