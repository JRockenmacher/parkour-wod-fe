<template>
    <section class="container">
        <b-btn
        @click="this.showModal"
        class="btn btn-warning"
        variant="warning">
        Power WODs
        </b-btn>
        
        <section class="v-b-modal">
            <b-modal
            id="modal-center" 
            name="wodModal" 
            v-model="modalShow"
            ref="wodModal" 
            hide-footer
            hide-header
            centered title=""
            class= "text-center"
            >
            <h5>Burpee Exorcist</h5>
            <p strong>Skill Level: intermediate<p>
            <p>5 RFT:  10x Demon Burpees resting 1 min between rounds. Record total time</p>
            <span> 
            <b-btn 
            @click="this.hideModal"
            variant="secondary">
            Back To WODs
            </b-btn>
            <b-btn class="mt-3" 
            variant="warning" 
            @click="genNewWODOfType"
            >
            New WOD
            </b-btn>
            </span>
        </b-modal>
        </section>
    </section>
    
</template>

<script>
export default {
    name: "power-modal",
    
    methods: {
        showModal () {
        this.$refs.wodModal.show()
        },
        hideModal () {
        this.$refs.wodModal.hide()
        }
    }
}
</script>

<style scoped>
 .container {
     padding: 0
 }
</style>
