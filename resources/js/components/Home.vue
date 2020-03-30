<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                  <button @click="AuthProvider('vkontakte')">auth Vkontakte</button>

                    <!-- <button @click="logInWithFacebook">auth facebook</button> -->
                    <!-- <button @click="get">get</button> -->
              </div>
          </div>

      </div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            userID: ''
        }
    },
    methods: {
       AuthProvider(provider) {

              var self = this

              this.$auth.authenticate(provider).then(response =>{

                self.SocialLogin(provider,response)

                }).catch(err => {
                    console.log({err:err})
                })

            },

            SocialLogin(provider,response){

                this.$http.post('/sociallogin/'+provider,response).then(response => {

                    console.log(response.data)

                }).catch(err => {
                    console.log({err:err})
                })
            },
    async logInWithFacebook(){
            var self = this
          window.FB.login(function(response) {
            if (response.authResponse) {
              console.log(response)
                self.userID = response.authResponse.userID
            } else {
              alert("User cancelled login or did not fully authorize.");
            }
          });
      return false;
    },
    get(){
        console.log(this.userID)
        window.FB.api(
            "/"+this.userID+"/",
            function (response) {
            console.log(response)
            }
        );
    },
 
    },
}
</script>

<style>

</style>