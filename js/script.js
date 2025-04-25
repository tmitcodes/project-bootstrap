
// Tunggu dokumen siap
document.addEventListener('DOMContentLoaded', function () {
  // Tangkap semua gambar project
  const projectImages = document.querySelectorAll('.project-image');

  projectImages.forEach((img) => {
    img.addEventListener('click', function () {
      const modalImg = document.getElementById('modalImage');
      const modalTitle = document.getElementById('modalTitle');

      // Ganti gambar dan judul modal
      modalImg.src = this.src;
      modalTitle.textContent = this.getAttribute('data-title') || 'Project Preview';

      // Tampilkan modal
      const modal = new bootstrap.Modal(document.getElementById('projectModal'));
      modal.show();
    });
  });
});
