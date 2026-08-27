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


document.querySelectorAll('.swipe-content').forEach(card=>{

    let startX = 0;

    card.addEventListener('touchstart',(e)=>{

        startX = e.touches[0].clientX;

    });

    card.addEventListener('touchmove',(e)=>{

        const moveX =
            e.touches[0].clientX - startX;

        if(moveX < -50){

            card.style.transform =
                'translateX(-80px)';
        }

    });

    card.addEventListener('touchend',()=>{

        setTimeout(()=>{

            card.style.transform =
                'translateX(0px)';

        },3000);

    });

});

loadTheme();