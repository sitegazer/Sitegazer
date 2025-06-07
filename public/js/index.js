var cta0 = document.getElementById("cta0");
if (cta0) {
  cta0.onclick = function() {
    window.location.href = "/contact"; // Replace with your URL
  };
}

// If it's an image:
var cta3 = document.getElementById("cta3");
if (cta3) {
  cta3.onclick = function() {
    window.location.href = "/contact";
  };
}
var cta1 = document.getElementById("cta1");
if (cta1) {
  cta1.onclick = function() {
    window.location.href = "/work";
  };
}
var cta2 = document.getElementById("cta2");
if (cta2) {
  cta2.onclick = function() {
    window.location.href = "/contact";
  };
}
var final = document.getElementById("final");
if (final) {
  final.onclick = function() {
    window.location.href = "/contact";
  };
}
const viewButtons = document.querySelectorAll('.view-project-btn');
  const popup = document.getElementById('img-popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.querySelector('.close');

  viewButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault(); // prevent jumping to #
      const imgSrc = this.getAttribute('data-img');
      popupImg.src = imgSrc;
      popup.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    popupImg.src = '';
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
      popupImg.src = '';
    }
  });