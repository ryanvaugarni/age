document.addEventListener("DOMContentLoaded",()=>{
    console.log("le programme fonctione");
    //Début Algorithme 
     let target, année, warning, submit
     warning = document.querySelector(".warning");
     submit = document.getElementsByTagName("input")[2]
     target = document.querySelector("ul")
     
     année = new Date().getFullYear()

     submit.addEventListener("click",(e) =>{
         e.preventDefault()

        user()
    })

    //les warnings
     user =()=>{

            age = document.getElementsByTagName("input")[0].value;
            prénom = document.getElementsByTagName("input")[1].value;

            if(age > année){
                warning.innerText= `Veuillez rentrer les bonnes informations`
                warning.style.display = "block";
                warning.classList.remove("success")
                warning.classList.add("warning")
            
            }
            else{
                warning.innerText= `Bonjour ${prénom} vous êtes né(e) en ${(année-age)} `
                warning.classList.add("success")
                warning.classList.remove("warning")
                warning.style.display = "block";
            }
        }
})

