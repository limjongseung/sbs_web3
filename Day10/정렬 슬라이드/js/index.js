


window.addEventListener("load",function(){
    const grid = new Isotope("section",{
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    });
    const btns = document.querySelectorAll("#main .sorting_btn li");
    btns.forEach(btn=>{
        btn.addEventListener("click",function(e){
            e.preventDefault();
            const isOn = e.currentTarget.classList.contains("on");
                                                    
            if(isOn) return;
            activation(e);
        });
    });
    
    function activation(event){//선언적 함수
        for( let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");

        const btn_a= event.currentTarget.querySelector("a");
        const a_href =btn_a.getAttribute("href"); 
        grid.arrange({filter:a_href});
    }
});



























