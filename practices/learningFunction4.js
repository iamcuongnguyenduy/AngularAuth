function playVideo(){
    console.log(this);
}

playVideo()
playVideo.call({name: "Iron Man"})
playVideo.bind({name: "Iron Man"})()

const video = {
    title: "a",
    tags: ["x", "y", "z"],
    play(){
        console.log(this);
        //method => obj
    },
    showTag(){
        console.log(this.tags);
        this.tags.forEach(tag => console.log(this.title, tag)) //this.title point to obj, because using arrow function
    }    
}
video.play()
video.showTag()