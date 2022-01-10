Math.random();
let i = 0;
let j = 0;
const txt = 'Imagiobox is world\'s first smart activity subscription box designed to meet the creative needs of young developing minds.\nWe believe that the role of arts in education cannot be denied any further and that it is high time our children get access to appropriate and effective art resources to explore their creativity and to express it. Each box contains a series of fun filled art and craft activities, books, DIY projects and other exciting collectibles uniquely designed to encourage curiosity and to inspire your child\'s natural creative instincts.';
const txt1='Imagiobox and ColorPencil combo provides your kid a smart way to develop creativity.You can subscribe for your IMAGIO box based on any of our monthly subscription plans.After subscription you will receive at your door step every month a customized art activity box designed for your child\'s age group.You will get regular updates from us on the registered mobile number and email id about the box and the delivery.Imagiobox subscribers get access to the smart application ColorPencil specially created for the kids to track their progress and participate in several events and competitions organised frequently.';
window.onload= typing;
let inp = document.getElementById("slc");
let inp1 = document.getElementById("slc1");
let btn = document.getElementById("bybtn");
btn.disabled = true;

document.addEventListener('change', () => {
    if (inp.value === "" || inp1.value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});

function typing() {
  if (i < txt.length) {
    document.getElementById("intxt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, Math.floor(Math.random() * 10) + 5);
  }
  if (i==txt.length && j < txt1.length) {
    document.getElementById("intxt1").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typing, Math.floor(Math.random() * 10) + 5);
  }
  else
    return 0;
}

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});