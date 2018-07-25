<template>
    <section class="container">
        <b-btn
        @click="this.showModal"
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
            >
            <h5>Burpee Exorcist</h5>
            <p strong>Skill Level: intermediate<p>
            <p>5 RFT:  10x Demon Burpees resting 1 min between rounds. Record total time</p>
            <span> 
            <b-btn 
            @click="this.hideModal"
            variant="secondary">
            Back WODs
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

<style>

</style>
