const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    document.querySelectorAll(".work-card").forEach(card=>{
      card.style.display=(filter==="all"||card.dataset.category===filter)?"block":"none";
    });
  });
});

document.getElementById("inquiryForm")?.addEventListener("submit",async e=>{
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const text=`[집수리 이선생 홈페이지 문의]\n이름: ${fd.get("name")}\n연락처: ${fd.get("phone")}\n지역: ${fd.get("location")||"-"}\n문의: ${fd.get("message")}`;
  const status=e.currentTarget.querySelector(".form-status");
  try{
    await navigator.clipboard.writeText(text);
    status.textContent="문의 내용이 복사되었습니다. 문자나 메신저에 붙여넣어 보내주세요.";
  }catch{
    status.textContent="복사가 차단되었습니다. 입력 내용을 직접 복사해주세요.";
  }
});

document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll('a[href="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    alert("이 링크는 샘플입니다. 실제 네이버 블로그/시공사례 주소로 교체하면 됩니다.");
  });
});
