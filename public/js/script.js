const options =document.querySelectorAll('.option');

options.forEach((option)=>{
  option.addEventListener('click',()=>{
    
    document.querySelector('.option.active').classList.remove('active');
    option.classList.add('active');
    document.querySelector('.dashboard-panel.active-panel').classList.remove('active-panel');
    document.getElementById(`${option.dataset.dashboard}Dashboard`).classList.add('active-panel');
  });
});