const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', function() {
  
  const menu = document.querySelector('div.menu');
  
  if (!checkbox.checked) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
  
});