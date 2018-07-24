<template>
    <section class="container">
        <b-btn
        @click="showModal"
        variant="warning">
        {{movement.name}}
        </b-btn>
        <section class="v-b-modal">
        <v-b-modal
        name="moveModal" 
        v-model="modalShow"
        ref="moveModal" 
        hide-footer 
        :title="movement.name">
            <img class="modal-img movement-img" :src="movement.demo">
            <span>{{movement.skill_level}}</span>
            <span>{{movement.description}}</span>
            <b-btn 
            @click="hideModal"
            variant="secondary">
            Back To Movements
            </b-btn>
        </v-b-modal>
        </section>
    </section>
</template>

<script>
export default {
    name: "movement",
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
    props: ['movement']
}
</script>

<style>
    .movement-img {
        height: 200px;
        width: auto;
    }
</style>


