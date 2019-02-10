<template>
    <div class="container" style="margin-bottom: 30px;">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input v-model="newMessage" class="form-control" name="message" placeholder="enter a message" type="text"/>
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>
            <button class="btn btn-primary" type="submit" name="action">send</button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */

import fb from '@/firebase/init';

export default {
    name: 'CreateMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            errorText: null
        }
    },
    methods: {
        createMessage() {
            if(this.newMessage) {
                fb.collection('messages').add({
                    message: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                });
                this.newMessage = null;
                this.errorText = null;
            } else {
                this.errorText = 'enter a message '
            }
        }
    }
}
</script>
