<template>
    <div>
    <b-button 
    v-b-modal.modalPrevent
    @click="modalShow = !modalShow">
      W/M Name
    </b-button>
    <b-modal 
    id="modalPrevent"
    size="sm"
    ref="modal"
    hide-footer
    title="W/M Name"
    v-model="modalShow">
    Details
    <b-btn class="mt-3" variant="warning" @click="addFaveWOD">Favorite</b-btn>
    <!-- make function called generateWod with params of weights, $equip, and wType; how will vue remember which params selected: persistent data? since it's in a modal will it still pull from the page? -->
    <b-btn class="mt-3" variant="danger" @click="generateWod">Generate New WOD</b-btn>
    </b-modal>
  </div>
</template>

<script>

export default {
    data(){
        return {
            modalShow = false,
        }
    }
}
</script>

<style>

</style>
