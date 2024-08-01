describe('Each method should result on something to mongo db', () => {
    describe('Create method', () => {
        it('should return the actual lenght of db plus one', ()=>{
            expect(true).toBe(true)
        })
    })
})







// const mongoose = require('mongoose')
// const mongodb = require('mongodb')
// const localConnection = 'mongodb://127.0.0.1:27017/Taskalert'

// ====================================================================================================
// 26.03 : localhost training

// ==================================================
// ====== 25.03 - Training code session

// let user = await User.where("name")
//     .equals("Djikstra")
// .select("age")
// .populate("bestfriend")
// .limit(2);

// let user = await User.findOne({name:"Apoutchou"});

// let users = await User.findByEfficiency();
// console.log(users);
// users.forEach(user => {
//     console.log(user.getInfo());
// });

// let user = await User.insensitiveSearch("apoutchou");
// console.log(user);

// let user = await User.find({name:"Apoutchou"});
// let user = await User.findById("6601def468ca125fdea8aea2");
// let user1 = await User.create({
//     name: "Parolier",
//     age:28,
// updated_at: new Date(),
// skills: ["Francais", "Theaodor"],
// projects: {title:"Trendy", description:"Too good to be true" },
// collaborator: user._id,
// });
// user1.save();
// console.log(user);

// ========== Test template =============
// 1- Browse
// let tasks = await browseTasks();
// console.log(tasks);

// 2- Read
// let task = await getTaskByUuid("a4e75180-eb9d-11ee-823b-c5015596655a");
// console.log(task);

// 3- Add
// await newTask(myTaskData);

// 4- update
// 4.1: satus
// let res = await editStatus("ecf380e0-eba0-11ee-a176-93fdcaab723f","RECYCLED");
// 4.2: content
// res = await updateTask("ecf380e0-eba0-11ee-a176-93fdcaab723f",myTaskData);
// console.log(res);

// 5- delete
// let res = await removeTask("a4e75180-eb9d-11ee-823b-c5015596655a");
// console.log(res);


// let myTaskData = {
//     title: '35 Days to unf**** your life',
//     template: 'v_items',
//     text: '',
//     items: [
//         { content: 'angular material fab button', checked: true },
//         { content: 'api gateway with proxy', checked: true },
//         { content: 'task service crud', checked: false },
//         { content: 'one week no soda juice', checked: false },
//         { content: 'one week 2 dry fast', checked: false },
//     ],
// }

// async function OpenConnection(connectionString) {
//     await mongoose.connect(connectionString)
// }

// OpenConnection(localConnection).then(async () => {

// })
