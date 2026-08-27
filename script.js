const themeBtn = document.getElementById("themeToggle");

function loadTheme(){
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️ 라이트모드";
    }
}

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    if(isDark){
        localStorage.setItem("theme","dark");
        themeBtn.textContent="☀️ 라이트모드";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent="🌙 다크모드";
    }
});




loadTheme();