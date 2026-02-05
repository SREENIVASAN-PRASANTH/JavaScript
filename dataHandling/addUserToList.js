let users = [];

function registerUser(user){
    users.push(user);
}

registerUser({
    name: "Prasanth",
    phone: 9444575820,
    age: 22,
    aadhaar: 616457932830
})

function login(aadhaar){
    return users.find(user => user.aadhaar === aadhaar)
}

// console.log(login(616457932830));

let posts = [];

function createPost(text, area){
    posts.push({text, area});
}

createPost("In sekkadu from subway construction water is leaking", "sekkadu");
createPost("The electricity lines are not at proper height", "hindu college");

function getPostByArea(area){
    return posts.filter(post => post.area === area);
}

console.log(getPostByArea("sekkadu"));