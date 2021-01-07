
//Попап+валид
document.getElementById('btn111').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'flex';
})
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
})

document.querySelector('.button').addEventListener('click',() =>{
    event.preventDefault();
    checkValidPfields(event.target) == false ? console.log('False') : console.log('True');
  })
function checkValidPfields(formTarget){
    if (document.querySelector('.login').value.match(/\d+/) !== null){
      return (false);
    }
  } 
  
//Помощ с анимацией  
window.onscroll = function() {
  let block1 = document.querySelector('.blokc11');
  let block2 = document.querySelector('.blokc12');
  let scrolled = window.pageYOffset;
  console.log( scrolled  );
      if(scrolled > 200){
          block1.classList.add('foo');
      }
     if(scrolled > 800){
          block2.classList.add('foo2');
     }    
};
//Помощ с анимацией
let textes = document.querySelector('.textes');
let block1 = document.querySelector('.blokc14');
let block2 = document.querySelector('.blokc15');
window.onscroll = function() {
  let scrolled = window.pageYOffset;
   console.log( scrolled  );
      if(scrolled > 1100){
          textes.classList.add('textes1');
      }
      if( scrolled > 1200){
          block1.classList.add('foo');
     }
     if( scrolled > 1200){
          block2.classList.add('foo2');
     }
 }
 //Подробный  valid
 const updateErorr = (errorMessages, formTarget) => {
	formTarget.querySelector('.d1').classList.add('error');
	formTarget.querySelector('.d1').style.display = 'block';
	formTarget.querySelector('.d1').innerHTML = `<div class="error-message">${errorMessages}</div>`
}

let patternPfields = {
	'formParams[email]': {
		isRequred: true,
		regExp : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	},
	'formParams[full_name]': {
		isRequred: true,
		regExp : /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
	},
	'formParams[phone]': {
		isRequred: true,
		regExp : /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
	},
}

const findFormData = (targetForm) => {
	let dataOnForm = {
		errorData: {
			haveError: false,
			errorMessage: null,
		}
	}
	for (const el of targetForm.querySelectorAll('.d2')) {
		validPfields(dataOnForm.errorData, el.querySelector('input').value, el.querySelector('input').name, el.querySelector('input').placeholder);
		if (dataOnForm.errorData.haveError){
			return (dataOnForm);
		}
	}
	return (dataOnForm);
}

const validPfields = (errorData, str, name, placeholder) => {
	if (str === ''){
		errorData.haveError = true;
		errorData.errorMessage = `Поле ${placeholder} не заполнено`;
		return ;
	}
	else{
		if (str.match(patternPfields[name].regExp) === null){
			errorData.haveError = true;
			errorData.errorMessage = `В поле ${placeholder} ошибка`;
			return ;
		}
	}
}
document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.d3').insertAdjacentHTML('beforeend','<span class="close__target"></span>');
	document.querySelector(".d3").onclick(close());
});

//Вход
document.addEventListener('DOMContentLoaded', () => {
	if (document.body.classList.contains('userrrr')){
		let freeItems = Array.from(document.querySelectorAll('.test1 .test2'));
		freeItems.map(el => {
			el.addEventListener('click', () => {
				event.preventDefault();
				addFormToModal(document.querySelector('.login .block-box'), document.querySelector('.modal'));
			});
		});
	}
});

