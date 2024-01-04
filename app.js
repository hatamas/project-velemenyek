const authors = [
    {
        author: "Szent Endre",
        job: "PHP fejlesztő",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima. Magnam rem harum doloremque quibusdam. Placeat sapiente quae blanditiis eius facilis pariatur vero odio ullam, esse porro voluptate, id optio sed in quidem veniam rem.",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        author: "Nagy Zsanett",
        job: "Marketing manager",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        author: "Török Bálint",
        job: "Automata tesztelő",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
]

let index = 0;
let author = document.getElementById("author");
let job = document.getElementById("job");
let text = document.getElementById("text");
let img = document.getElementById("person-img");

function viewAuthor() {
    author.innerHTML = authors[index].author;
    job.innerHTML = authors[index].job;
    text.innerHTML = authors[index].text;
    img.src = authors[index].image;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    if (index == 0)
        index = 2;
    else
        index--;
    viewAuthor();
})

document.getElementById("next-btn").addEventListener("click", () => {
    if (index == 2)
        index = 0;
    else
        index++;
    viewAuthor();
})