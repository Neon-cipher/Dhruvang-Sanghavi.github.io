document.querySelectorAll('.img-wrapper').forEach(wrapper => {
  const img = wrapper.querySelector('img');

  if (wrapper.classList.contains('thumbnail-blur')) {
    const placeholder = wrapper.querySelector('.img-placeholder');
    const tinySrc = img.getAttribute('data-placeholder');
    placeholder.style.backgroundImage = `url('${tinySrc}')`;

    img.addEventListener('load', () => {
      img.classList.add('loaded');
      placeholder.classList.add('hidden');
    });
  } else if (wrapper.classList.contains('auto-blur')) {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }
});
