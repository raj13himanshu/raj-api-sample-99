let person = 
[{
"id": 1,
"title": "Web Development",
"image": "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto-compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
},

{
"id": 2,
"title": "App Development",
"image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
},

{
"id": 3,
"title": "Software Development",
"image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto-compress&cs=tinysrgb&w=1260&h=750&dpr=1", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
},

{
"id": 4,
"title": "Digital Marketing",
"image": "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto-compress&cs-tinysrgb&w=1260&h=750&dpr=1",
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae"
},

{
"id": 5,
"title": "Graphic Designer",
"image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto-compress&cs-tinysrgb&w=1260&h=750&dpr=1", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae" 
},

{
"id": 6,
"title": "Raj codefest",
"image": "https://images.pexels.com/photos/28056127/pexels-photo-28056127/free-photo-of-a-book-and-an-orange-on-a-blanket-on-the-beach.jpeg", 
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at quae et aperiam ipsa culpa a sit dolorum beatae" 
}];


let personDiv = document.getElementById("person");

personDiv.innerHTML = JSON.stringify(person, null, 2);
