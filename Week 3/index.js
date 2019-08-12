"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/users";
axios_1["default"].get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
    // console.log(response);
    //---> SHORTER VERSION OF LINES 5 to 11 <----
    // var url = "https://jsonplaceholder.typicode.com/users";
    // axios.get(url).then(function(response){
    //     console.log(response);
    // })
    var data = response.data;
    var userArr = [];
    for (var i = 0; i < data.length; i++) {
        var _id = data[i].id;
        var _username = data[i].username;
        userArr.push({ id: _id, username: _username });
        // console.log(data[i]);
        // console.log(data[i].id);
        // console.log(data[i].username);
        // let user1: user = new user(data[i].id, data[i].username);
    }
    for (var i = 0; i < userArr.length; i++) {
        console.log(userArr[i].username);
    }
    // console.log(user1);
    // console.log(data[user1].id);
    // console.log(user1.username);
});
var user = /** @class */ (function () {
    function user(id, username) {
        this.id = id;
        this.username = username;
    }
    return user;
}());
var user1 = new user(100, "yeet");
