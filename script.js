// Modal logic for Cool Pics

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close-modal');
  const galleryImages = document.querySelectorAll('.gallery-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    modalImg.alt = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });
});
