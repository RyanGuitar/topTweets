let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  
let observer = new IntersectionObserver(callback, options);
  
let target = document.querySelectorAll(".tweet");

target.forEach((t) => {
    observer.observe(t)
})

function callback(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
          console.log(entry.target)
          entry.target.classList.remove("tweet")
          entry.target.classList.add("twitter-tweet")
          twttr.widgets.load(
            document.querySelector(".twitter-tweet")
          );
        }
    })
}