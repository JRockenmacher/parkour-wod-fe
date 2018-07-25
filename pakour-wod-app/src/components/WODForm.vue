<template>
    <section class="container">
        <b-button 
        @click="showForm = !showForm" 
        type="button" 
        class=""
        variant="warning">
        Submit A WOD
        </b-button>
        <b-form 
        v-if="showForm"
        @submit.prevent="onAddWOD">
            <div class="form-group">
                <label for="name">WOD Name</label>
                <input v-model="wod.name" type="text" name="name" id="name" class="form-control">
                <label for="type">WOD Type</label>
                <b-form-select v-model="wod.type" name="type" id="type" class="form-control">
                    <option disabled value="">Select one</option>
                    <option>Power</option>
                    <option>Endurance</option>
                    <option>Skill/Strength</option>
                </b-form-select>
                <label for="timing">WOD Timing</label>
                <b-form-select v-model="wod.timing" name="timing" id="timing" class="form-control">
                    <option disabled value="">Select One</option>
                    <option value="">RFT</option>
                    <option value="">EMOM</option>
                    <option value="">AMRAP</option>
                    <option value="">Countdown</option>
                </b-form-select>
                <label for="description">Description</label>
                <textarea v-model="wod.description" name="description" id="description" cols="15" rows="5" class="form-control"></textarea>
                <label for="skill">Skill Level</label>
                <b-form-select v-model="wod.skill" name="skill" id="skill" class="form-control">
                    <option disabled value="">Select One</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </b-form-select>
                <br>
                <b-form-checkbox v-model="wod.weights" >
                <label for="weights">Weights Needed: </label>
                <!-- <input type="checkbox" id="weights"> -->
                </b-form-checkbox>
                <br>
                <b-form-checkbox v-model="wod.equipment" >
                <label for="equpment">Equipment Needed: </label>
                <!-- <input type="checkbox" id="equipment"> -->
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
function getEmptyWOD() {
    return {
        name: "",
        type: "",
        timing:"",
        description: "",
        skill: "",
        weights: false,
        equipment: false
    }
}
export default {
    props:
        ['addWOD'],
    data: () => ({
            showForm: false,
            wod: getEmptyWOD(),
        }),
    methods: {
        onAddWOD() {
            // this.addWOD(this.wod)
            // this.wod = getEmptyWOD()
            getEmptyWOD()
            this.showForm = false
        }
    }
}
</script>



