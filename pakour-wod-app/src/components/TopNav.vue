<template>
    
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class="right-nav">
                <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
            <div class="center-nav">
                <span class="navbar-nav mr-auto">Parkour WOD Generator</span>
            </div>
            <div class="left-nav">
                <button type="button" class="btn btn-outline-info" @click.prevent="goToInfo">i</button>    
            </div>
        </nav>
  
</template>

<script>
export default {
    
    methods: {
        goToInfo(){
            console.log('info button clicked');
            this.$router.push({path:'info'})
        }
    }
}
</script>
<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        z-index: 200;
            
    }
    /* .header {
        
        position: fixed;
        top: 0;
        width: 100%; 
     }  */
</style>
