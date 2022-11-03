class Video{
    constructor(title,uploader,time){
        this.title=title;
        this.uploader=uploader;
        this.time=time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`);
    }

}
const video1=new Video("myvideo","naama",55);
video1.watch();
const video2=new Video("yourvideo","lise",45);
video1.watch();



// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.