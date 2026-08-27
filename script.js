const themeBtn = document.getElementById("themeToggle");

function loadTheme(){
    const savedTheme = localStorage.getItem("theme");
    const container = document.querySelector(".container");
    const themeToggle = document.querySelector("#themeToggle");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        container.classList.add("dark");
        themeToggle.classList.add("dark");
        
        themeBtn.textContent = "☀️ 라이트모드";
    }
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const container = document.querySelector(".container");
    const themeToggle = document.querySelector("#themeToggle");
    container.classList.toggle("dark");
    themeToggle.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if(isDark){
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️ 라이트모드";
    }else{
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙 다크모드";
    }
});


const modal =
    new bootstrap.Modal(
        document.getElementById("myModal")
    );

modal.show();








function toggleWinningInfo(){

    const info =
        document.getElementById("winningInfo");

    const toggle =
        document.getElementById("winningToggle");

    if(info.classList.contains("show")){

        info.classList.remove("show");

        toggle.textContent =
            "▶ 당첨번호 보기";

        return;
    }

    const lotteryType =
        localStorage.getItem("lotteryType");

    const winningNumbers =
        localStorage.getItem("winningNumbers");

    const bonusNumbers =
        localStorage.getItem("bonusNumbers");

    if(!lotteryType){

        info.innerHTML =
            "등록된 당첨번호가 없습니다.";

    }else{

        info.innerHTML = `
            <div>
                <b>Loto${lotteryType}</b>
            </div>

            <div>
                본번호 : ${winningNumbers}
            </div>

            <div>
                보너스 : ${bonusNumbers}
            </div>
        `;
    }

    info.classList.add("show");

    toggle.textContent =
        "▼ 당첨번호 숨기기";
}











loadTheme();