const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } 
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
};
document.addEventListener("DOMContentLoaded", () => {
    const workBlocks = document.querySelectorAll(".v3-work-block-02");
  
    workBlocks.forEach(block => {
      const cursor = block.querySelector(".cursor");
  
      block.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
      });
  
      block.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
      });
  
      block.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
  
        // плавное движение курсора
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // отменяем стандартное поведение
      const targetId = this.getAttribute('href'); // получаем ID цели
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth', // плавная прокрутка
          block: 'start'      // к началу секции
        });
      }
    });
  });