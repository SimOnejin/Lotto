// ====================
// 다크모드
// ====================

const themeBtn =
    document.getElementById("themeToggle");

// 저장된 테마 불러오기
function loadTheme(){

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        themeBtn.textContent =
            "☀️ 라이트모드";
    }
}

// 버튼 클릭
themeBtn.addEventListener("click", () => {

    const isDark =
        document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    themeBtn.textContent =
        isDark
            ? "☀️ 라이트모드"
            : "🌙 다크모드";
});

// 시작 시 적용
loadTheme();