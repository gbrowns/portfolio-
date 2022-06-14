(function(){
    /* e.preventDefault(); */
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e)
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active")
            document.getElementById(button.dataset.id).classList.add("active");

            console.log(button.dataset.id)
        });
    });
})();


/* (function(){

    //select all elements to switch between sections
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls');
    const sectBtn = document.querySelectorAll('.control');
    const allSelections = document.querySelector('.main-content')


    function pageTransition (){
        //button click active class
        
        sectBtn.forEach((btn) => {
            btn.addEventListener('click', function(){

                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += 'active-btn'
            })
        })

    }

    //section active class
    allSelections.addEventListener('click', (e) => {

        console.log(e.target.dataset.id)
        const id = e.target.dataset.id;

        if(id){
            //remove selected from the other sectBtn
            sectBtns.forEach(btn => {
                console.log(btn)
                btn.classList.remove('active')

                e.target.classList.add('active');
                console.log(e.target.classList)
                
                //hide other sections
                sections.forEach(section => {
                    console.log(section)
                    section.classList.remove('active')
                })

                const element = document.getElementById(id)
                element.classList.add('active');
            })
        }
    })



    //invoke functions/methods
    pageTransition()
})() */

