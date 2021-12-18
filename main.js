let count = 0

const nameEL = document.getElementById("name-el")
const jobEL = document.getElementById("job-el")
const contentEL = document.getElementById("content-el")
const imageEL = document.getElementById("image-el")
const leftEL = document.getElementById("left-container")
const rightEL = document.getElementById("right-container")
const surpriseBTN = document.getElementById("surprise-btn")
const data = [{
        name: "Bill Anderson",
        job: "THE BOSS",
        content: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: "images/image1.jpg"
    },
    {
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        content: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image: "images/image2.jpg"
    },
    {
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        content: "Helvetica artisan kinfolk thundercats lumberjack blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: "images/image3.jpg"
    },
    {
        name: "Peter Jones",
        job: "INTERN",
        content: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: "images/image4.jpg"
    }
]

leftEL.addEventListener("click", function() {
    if (count === 0) {
        nameEL.textContent = data[3].name
        jobEL.textContent = data[3].job
        contentEL.textContent = data[3].content
        imageEL.style.backgroundImage = `url("${data[3].image}")`
        count = 3
    } else {
        nameEL.textContent = data[count - 1].name
        jobEL.textContent = data[ count - 1].job
        contentEL.textContent = data[count - 1].content
        imageEL.style.backgroundImage = `url("${data[count - 1].image}")`
        count --
    }
})

rightEL.addEventListener("click", function() {
    if (count === 3) {
        nameEL.textContent = data[0].name
        jobEL.textContent = data[0].job
        contentEL.textContent = data[0].content
        imageEL.style.backgroundImage = `url("${data[0].image}")`
        count = 0
    } else {
        nameEL.textContent = data[count + 1].name
        jobEL.textContent = data[ count + 1].job
        contentEL.textContent = data[count + 1].content
        imageEL.style.backgroundImage = `url("${data[count + 1].image}")`
        count ++
    }
})

surpriseBTN.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    nameEL.textContent = data[randomNum].name
    jobEL.textContent = data[randomNum].job
    contentEL.textContent = data[randomNum].content
    imageEL.style.backgroundImage = `url("${data[randomNum].image}")`
    count = randomNum
})