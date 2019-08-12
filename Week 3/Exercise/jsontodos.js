"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
    var data = response.data;
    for (var i = 0; i < data.length; i++) {
        var _userId = data[i].userId;
        var _id = data[i].id;
        console.log(data[i].userId);
    }
});
// class todos{
//     private 
// }
