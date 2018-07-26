<template>
    <section class="container">
        <b-button 
        @click="showForm = !showForm" 
        type="button" 
        class=""
        variant="primary">
        Contact Us
        </b-button>
        <b-form
        v-if="showForm"
        @submit.prevent="onContact">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="form-control">
                <label for="message">Message</label>
                <textarea type="text" name="message" id="message" cols="15" rows="5" class="form-control"></textarea>
                <!-- <br> -->
                <!-- <b-form-checkbox>
                <label for="bot">Not A Bot</label>
                </b-form-checkbox> -->
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
    function getEmptyContact() {
        return {
        email: "",
        message: "",
        bot: false
        }
    }

export default {
    data: () => ({
            showForm: false,
            contact: getEmptyContact(),
        }),
    methods: {
  
    onContact() {

        getEmptyContact()
        this.showForm = false
    }
    }
}
</script>


