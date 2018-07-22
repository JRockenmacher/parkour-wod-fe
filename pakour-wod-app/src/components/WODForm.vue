<template>
    <section>
        <button 
        @click="showForm = !showForm" 
        type="button" 
        class="btn btn-primary">
        Submit A WOD
        </button>
        <form v-if="showForm">
            <label for="name">WOD Name</label>
            <input type="text" name="name">
            <label for="type">WOD Type</label>
            <select name="type" id="">
                <option disabled value="">Select one</option>
                <option>Power</option>
                <option>Endurance</option>
                <option>Skill/Strength</option>
            </select>
            <select name="timing" id="">
                <option disabled value="">Select One</option>
                <option value="">RFT</option>
                <option value="">EMOM</option>
                <option value="">AMRAP</option>
                <option value="">For 10-20min</option>
            </select>
            <label for="description">Description</label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <label for="demo">Demo url</label>
            <input type="text" name="demo" id="">
            <select name="skill" id="">
                <option disabled value="">Select One</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
            <label for="weights">Weights Needed: </label>
            <input type="checkbox" id="weights">
            <label for="equpment">Equipment Needed: </label>
            <input type="checkbox" id="equipment">
            <button 
            @click="submitWOD" 
            type="button" 
            class="btn btn-success">
            Submit
            </button>
        </form>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
