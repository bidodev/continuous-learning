document.body.style.backgroundColor = 'blue';

let mql = window.matchMedia('(max-width: 600px)');
const span = document.querySelector(".mq-value");

mql.addEventListener('change', (event) => {
    if (event.matches) {
        /* the viewport is 600 pixels wide or less */
        span.textContent = 'This is a narrow screen — less than 600px wide.';
        document.body.style.backgroundColor = 'red';
      } else {
        /* the viewport is more than 600 pixels wide */
        span.textContent = 'This is a wide screen — more than 600px wide.';
        document.body.style.backgroundColor = 'blue';
      }
});
