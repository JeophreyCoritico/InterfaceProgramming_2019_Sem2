import axios from 'axios';

interface todosInterface {
    userId: number;
    id: number;
    title: String;
    completed: boolean; 
}

axios.get<todosInterface[]>('https://jsonplaceholder.typicode.com/todos')
.then(function(response){
    let data = response.data;

    for (var i = 0; i < data.length; i++){
        let _userId = data[i].userId;
        let _id = data[i].id;

        console.log(data[i].userId);
    }
})
// class todos{
//     private 
// }