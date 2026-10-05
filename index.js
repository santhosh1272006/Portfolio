        // Project name (box 4 )


const headings = document.querySelectorAll(".stagger-heading");

headings.forEach((heading) => {

    heading.innerHTML =
        heading.textContent
        .split("")
        .map((ch, i) =>
            `<span style="animation-delay:${i * 0.15}s">
                ${ch === " " ? "&nbsp;" : ch}
            </span>`
        )
        .join("");

});

/*----------------------------------------------------------------------------------*/


         // Nav bar menu  (box 1 )

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function(){

    nav.classList.toggle("menu-open");

    if(nav.classList.contains("menu-open")){
        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';
    }
    else{
        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
    }

});


/*----------------------------------------------------------------------------------*/




/*----------------------------------------------------------------------------------*/

// ===== CERTIFICATES VIEWER =====

(function () {
  var lb = document.getElementById('certLightbox');
  if (!lb) return;
  var img = document.getElementById('certLightboxImg');
  var cap = document.getElementById('certLightboxCaption');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.cert-section .cert-card'));
  var total = cards.length / 2;   // second half is the loop copy
  var idx = 0;

  function show(i) {
    idx = (i + total) % total;
    var c = cards[idx];
    img.src = c.querySelector('img').src;
    cap.textContent = c.querySelector('p').textContent;
  }
  function openBox(i) {
    show(i);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeBox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach(function (c, i) {
    c.addEventListener('click', function () { openBox(i % total); });
  });

  lb.querySelector('.cert-close').addEventListener('click', closeBox);
  lb.querySelector('.cert-prev').addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
  lb.querySelector('.cert-next').addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeBox(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeBox();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
})();

