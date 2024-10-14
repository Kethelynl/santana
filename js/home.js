banner = document.getElementById('banner')
h1 = document.getElementById('h1')
p = document.getElementById('p')
menu = document.getElementById('menu')
lista2 = document.getElementById('lista2')
btn_rigth = document.getElementById('nav-next-button')
btn_left = document.getElementById('nav-previous-button')
const icons = document.querySelectorAll('.elementor-icon');


/* configurações da seta (banner)*/ 
number = 1
function rigth(){
    if(number == 1){
        banner.classList.add('segundo')
        h1.textContent = 'AGILIDADE E QUALIDADE'
        p.textContent = 'Na produção de vidros e tempados'
        number = 2
    }else if(number == 2){
        banner.classList.add('terceiro')
        h1.textContent = 'VISITE-NOS'
        p.textContent = 'E conheça nossos showroom'
        number = 3
    }else if(number == 3){
        banner.classList.remove('terceiro', 'segundo')
        h1.textContent = 'PRODUZIMOS'
        p.textContent = 'Vidros laminados de 6 a 77mm'
        number = 1
    }
}

function left(){
    if(number == 2){
        banner.classList.remove('terceiro', 'segundo')
        h1.textContent = 'PRODUZIMOS'
        p.textContent = 'Vidros laminados de 6 a 77mm'
        number = 1
    }else if(number == 3){
        banner.classList.add('segundo')
        banner.classList.remove('terceiro')
        h1.textContent = 'AGILIDADE E QUALIDADE'
        p.textContent = 'Na produção de vidros e tempados'
        number = 2
    }else if(number == 1){
        banner.classList.add('terceiro')
        banner.classList.remove('segundo')
        h1.textContent = 'VISITE-NOS'
        p.textContent = 'E conheça nossos showroom'
        number = 3
    }
}

const showIconsOnScroll = () => {
    icons.forEach(icon => {
        const iconPosition = icon.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (iconPosition < screenPosition) {
            icon.classList.add('show');
        }
    });
};

click = 1
function menushow(){
  if(click == 1){
    lista2.classList.add('active')
    click = 2
  }else if(click == 2){
    lista2.classList.remove('active')
    click = 1
  }
}




window.addEventListener('scroll', showIconsOnScroll);
btn_rigth.addEventListener('click', rigth)
btn_left.addEventListener('click', left)
menu.addEventListener('click', menushow)