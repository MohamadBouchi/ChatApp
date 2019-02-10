<template>
<div class="container">
    <div class="card login">
        <div class="card-body">
            <h2 class="card-title text-center">
                Login
            </h2>
            <form @submit.prevent="login" class="text-center">
                <div class="form-group">
                    <input type="text" name="name" v-model="name" class="form-control" placeholder="enter a name">
                    <p v-if="errorText" class="text-danger">{{errorText}}</p>
                </div>
                <button class="btn btn-primary" type="submit">enter chat</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'login',
    data() {
        return {
            name: "",
            errorText: null
        }
    },
    methods: {
    login() {
      if(this.name) {
          this.$router.push({name: "Chat", params: {name: this.name}})
      } else  {
          this.errorText = "enter a name first!"
      }
    }
  }
};
</script>

<style>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
