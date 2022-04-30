//Mobile menu
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.link')

function linkAction(){
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("scroll");
	} else {
		toTop.classList.remove("scroll");
	}
})

//Carrossel
var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for(let i=0; i < quant.length; i++){
	var div = document.createElement('div')
	div.id = i
	balls.appendChild(div)
}
document.getElementById('0').classList.add("imgAtual")

var pos = document.querySelectorAll('.balls div')

for(let i=0; i < pos.length; i++){
	pos[i].addEventListener('click', ()=>{
		atual = pos[i].id
		rolar = false
		slide()
	})
}

voltar.addEventListener('click', ()=>{
	atual--
	rolar = false
	slide()
})
next.addEventListener('click', ()=>{
	atual++
	rolar = false
	slide()
})

function slide(){
	if(atual >= quant.length){
		atual = 0
	}
	else if(atual < 0){
		atual = quant.length-1
	}
	document.querySelector('.imgAtual').classList.remove('imgAtual')
	imagem.style.marginLeft='-300'*atual+'px'
	document.getElementById(atual).classList.add('imgAtual')
}

setInterval(()=>{
	if(rolar){
		atual++
		slide()
	}
	else{
		rolar = true
	}
},4000)