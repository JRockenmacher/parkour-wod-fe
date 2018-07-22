<template>
<section>
    <button 
        @click="showForm = !showForm" 
        type="button" 
        class="btn btn-success">
        Submit A WOD
        </button>
    <form action="">
        <label for="name">Movement Name</label>
        <input type="text" name="name">
        <label for="description">Description</label>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <label for="demo">Demo url</label>
        <input type="text" name="demo" id="">
        <label for="skill">Skill Level</label>
        <select name="skill" id="">
            <option disabled value="">Select One</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
        </select>
        <input type="checkbox" id="weights">
        <label for="weights">Weights Needed</label>
        <input type="checkbox" id="equipment">
        <label for="equpment">Equipment Needed</label>
    </form>
</section>
</template>

<script>
export default {

}
</script>

<style>

</style>
