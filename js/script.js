const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
];

  
let colore = '';

icons.forEach(element => {
  if(element.type == 'user'){
    colore ='color:blue;';
  }else if(element.type == 'vegetable'){
    colore ='color:red;';
  }else{
    colore ='color:green;';
  }
  
 document.getElementById('riga').innerHTML += 
  `<div class="col-3 mt-5 card bg-light ms-3">
      <i class="${element.family} ${element.prefix}${element.name}" style="${colore}"></i>
      <p class="text-center text-uppercase" style="${colore}">${element.name}</p>
  </div>`; 
});

const select = document.getElementById('categoria');

select.addEventListener("change",function(){
  const valoreSelect = select.value;
  if (valoreSelect == 'all'){
    document.getElementById('riga').innerHTML = '';
    icons.forEach(element => {
      document.getElementById('riga').innerHTML += 
      `<div class="col-3 mt-5 card bg-light ms-3">
          <i class="${element.family} ${element.prefix}${element.name}" style="${colore}"></i>
          <p class="text-center text-uppercase" style="${colore}">${element.name}</p>
      </div>`; 
    });
  }else{
    const filteredIcons = icons.filter((element) => element.type == valoreSelect);
    document.getElementById('riga').innerHTML = '';
    filteredIcons.forEach(element => {
      document.getElementById('riga').innerHTML += 
      `<div class="col-3 mt-5 card bg-light ms-3">
          <i class="${element.family} ${element.prefix}${element.name}" style="${colore}"></i>
          <p class="text-center text-uppercase" style="${colore}">${element.name}</p>
      </div>`; 
    });
      
  }

});

