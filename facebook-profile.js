/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "asma",
    friends: 12,
    messages: ['hi','hello','bye'],
    
    postMessage: function postMes(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMes(index){
       facebookProfile.messages.splice(index,1);
    },
    addFriend : function add(){
        facebookProfile.friends++;
    },
    removeFriend: function rem(){
        facebookProfile.friends--;
    }
};
