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