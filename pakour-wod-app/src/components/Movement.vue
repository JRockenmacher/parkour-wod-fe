<template>
    <section class="container">
        <b-btn
        @click="this.showModal"
        variant="warning">
        {{movement.name}}
        </b-btn>
        <section class="v-b-modal">
        <b-modal
         id="modal-center" 
        name="moveModal" 
        v-model="modalShow"
        ref="moveModal" 
        hide-footer
        hide-header
        centered title=""
        >
            <h5>{{movement.name}}</h5>
            <p strong>Skill Level: {{movement.skill_level}}<p>
            <p>{{movement.description}}</p>
            <img class="modal-img movement-img" :src="movement.demo">
            <b-btn 
            @click="this.hideModal"
            variant="secondary">
            Back To Movements
            </b-btn>
        </b-modal>
        </section>
    </section>
</template>

<script>
export default {
    name: "movement",
    props: ['movement'],
    data: () => {
        
        },
    methods: {
        showModal () {
        this.$refs.moveModal.show()
        },
        hideModal () {
        this.$refs.moveModal.hide()
        }
    },
    
}
</script>

<style>
    .movement-img {
        height: 200px;
        max-width: 300px;
    }
   
</style>


