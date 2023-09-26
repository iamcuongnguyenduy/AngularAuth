const blogPost = {
    title: "Learning Javascript",
    body: `Hello
    Learning JS is my favorite
    Thanks`,
    author: "Mosh",
    views: 100,
    comments: [{
            author: "Cuong",
            body: `That is intertesting
            Cheers`
        },
        {
            author: "Someone",
            body: "Good"
        }],
    isLive: true
}

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
post1 = new Post("myPost", "adding more content", "Mr Nobody")
console.log(post1);


const priceRange = [
    {
        tooltip: "Inexpensive",
        display: "$",
        min: 0,
        max: 10
    },
    {
        tooltip: "Moderate",
        display: "$$",
        min: 11,
        max: 20
    },
    {        
        tooltip: "Pricy",
        display: "$$$" ,
        min: 21,
        max: 50
    }
]