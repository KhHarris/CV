const observer = new IntersectionObserver((ans) =>{
    ans.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        //comment out to stop animation from looping
       // else
        //{
          //  entry.target.classList.remove("show");
        //}
    });
});


const hiddenElements = document.querySelectorAll(".Hidden");
hiddenElements.forEach((el) => observer.observe(el));
