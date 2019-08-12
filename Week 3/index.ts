import axios from 'axios';

var url = "https://jsonplaceholder.typicode.com/users";

axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    // console.log(response);

//---> SHORTER VERSION OF LINES 5 to 11 <----
// var url = "https://jsonplaceholder.typicode.com/users";
// axios.get(url).then(function(response){
//     console.log(response);
// })

    var data = response.data;

    var userArr: UserInterface[] = [];

    for(var i = 0; i < data.length; i++){

        let _id = data[i].id;
        let _username = data[i].username;

        userArr.push({id: _id, username: _username})
    // console.log(data[i]);
    // console.log(data[i].id);
    // console.log(data[i].username);

    // let user1: user = new user(data[i].id, data[i].username);
    }

    for(var i = 0; i < userArr.length; i++){
        console.log(userArr[i].username);
    }

    // console.log(user1);
    // console.log(data[user1].id);
    // console.log(user1.username);
})

class user {
    private id: number;
    private username: string;

    constructor(id: number, username: string){
        this.id = id;
        this.username = username; 
    }
}

interface UserInterface {
    id: number;
    username: string;
}

let user1: user = new user(100, "yeet");