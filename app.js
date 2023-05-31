const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("errorValid");

const card = document.getElementById("card");
const succesMessage = document.getElementById("succes_message");
const btnSuccess = document.getElementById("btn_success");


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(inputEmail.value ==='' || !emailPattern.test(inputEmail.value)){
        errorMessage.textContent = "Valid email required";
        inputEmail.classList.add("error");
    } else{
        errorMessage.textContent = "";
        inputEmail.classList.remove("error");
        form.reset();

        card.style.display ="none";
        succesMessage.style.display = "flex";
    }
})

btnSuccess.addEventListener("click", ()=>{
    card.style.display ="flex";
    succesMessage.style.display = "none";
        
})