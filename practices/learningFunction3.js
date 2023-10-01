//this

//method => obj
//function => global (window, global)



function playAudio(){
    console.log(this);
    //function => global (window, global)
}
playAudio()

function Movie(title){
    this.title = title;
    console.log(this);
}
const m = new Movie("movie")

const video = {
    title: "a",
    tags: ["x", "y", "z"],
    play(){
        console.log(this);
        //method => obj
    },
    showTag(){
        console.log(this.tags);
        this.tags.forEach(function(e) {
            console.log(this.title, e); 
            //this.title shows undefined because THIS in this case is function => global, not point to object
            //=> can use arrow function which from ES6 to inheritance this
        })
    }    
}
video.play()
video.showTag()