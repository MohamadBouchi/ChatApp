const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.onMessageCreate = functions.firestore.document('messages/{userId}').onCreate((snap, context) => {
    const ref = admin.firestore().collection('messages').orderBy('timestamp');
    ref.onSnapshot(snapshot => {
        i = 0;
        size =  snapshot.size;
        sizeTodDelete = size - 10;
        snapshot.forEach((doc) => {
            if (i < sizeTodDelete) {
                doc.ref.delete().then(() => {
                    console.log('doc deleted')
                }).catch((err) => {
                    console.log('error deleting' + err);
                })
            }
            i++;
        })
    })
})
