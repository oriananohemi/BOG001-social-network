const feedback = () => {
  const view = `
    <div class="feedback-container">
    <p></p>
    <button class="flaticon-close icon__close"></button>
    </div>
    `;

  const container = document.querySelector('#feedback');
  container.innerHTML = view;
  return container;
};

export default feedback;
