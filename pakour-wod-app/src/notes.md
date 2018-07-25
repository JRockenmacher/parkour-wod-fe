### movements.vue
 ```
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
```

// https://media.giphy.com/media/5qFE8x8hnKKPMGpwgM/giphy.gif
Find a ledge/box at a height you are comfortable jumping up to (start with 12") From the ground, bend into the hips, knees, and ankles tensing the leg muscles. Swing/ punch the hands upward as you explode through your legs, fully extending them. Snap knees up to clear the box and try to land silently. Step off the box/ ledge and repeat 

```
<section class="container">
  <b-modal ref="myModalRef" hide-footer :title="workout.type">
    <div class="d-block text-center">
      <h3>{{workout.name}}</h3>
      <p strong>{{workout.timing}}</p>
      <p class="workout-description">{{workout.description}}</p>
    </div>
    <b-btn class="mt-3" 
      variant="secondary" 
      @click="this.hideModal">
      Back To WODs
      </b-btn>
    <b-btn class="mt-3" 
      variant="warning" 
      @click="genNewWODOfType">
      New WOD
      </b-btn>
  </b-modal>
</section>
```