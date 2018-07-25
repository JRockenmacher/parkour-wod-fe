<template>
<section class="container">
    <b-button 
    @click="showForm = !showForm" 
    type="button" 
    class=""
    variant="warning">
    Submit A Movement
    </b-button>
    <b-form 
    v-if="showForm"
    @submit.prevent="onAddMovement">
        <div class="form-group">
            <label for="name">Movement Name</label>
            <input v-model="movement.name" type="text" name="name" id="name" class="form-control">
            <label for="description">Description</label>
            <textarea v-model="movement.description" name="description" id="description" cols="15" rows="5" class="form-control"></textarea>
            <label for="demo">Demo url</label>
            <input v-model="movement.demo" type="text" name="demo" id="demo" class="form-control" placeholder="paste gif image link here">
            <label for="skill">Skill Level</label>
            <b-form-select v-model="movement.skill_level" name="skill" id="skill" class="form-control">
                <option disabled value="">Select One</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </b-form-select>
            <br>
            <b-form-checkbox v-model="movement.weights" >
                <label for="weights">Weights Needed</label>
            </b-form-checkbox>
            <br>
            <b-form-checkbox v-model="movement.equipment" >
                <label for="equpment">Equipment Needed</label>
            </b-form-checkbox>
        </div>
        <b-button 
            type="submit"
            class=""
            variant="success">
            Submit
        </b-button>
    </b-form>
</section>
</template>

<script>
function getEmptyMovement() {
    return {
        name: "",
        description: "",
        demo: "",
        skill_level: "",
        weights: false,
        equipment: false
    }
}
export default {
    props:
        ['addMovement'],
    data: () => ({
            showForm: false,
            movement: getEmptyMovement(),
        }),
    methods: {
        onAddMovement() {
            this.addMovement(this.movement)
            this.movement = getEmptyMovement()
            getEmptyMovement()
            this.showForm = false
        }
    }
}
</script>


