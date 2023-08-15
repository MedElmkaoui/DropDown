

/* JS Code */

let Options = document.querySelectorAll('.option');
let TopSection = document.querySelector('.btns')
let listOptions = document.querySelector('.list_options')
let DropIcon = document.querySelector('.icon_arr')

DropIcon.addEventListener('click' , function(){
    listOptions.classList.toggle('show_list_options')
    DropIcon.classList.toggle('drop_icon_clicked')
    
})

function Add_C(ele){
    let myBtn = document.createElement('div');
        myBtn.className = 'btn';
        let pElement = document.createElement('p');
        pElement.textContent = ele.textContent;
        myBtn.appendChild(pElement);
        let iElement = document.createElement('i');
        iElement.className = 'ri-close-line';
        iElement.id = 'closeIcon'
        iElement.addEventListener('click', function(){
            iElement.parentElement.remove();
            let option = document.createElement('div')
            option.addEventListener('click', function(){
                Add_C(option);
            })
            option.className = 'option'
            let span = document.createElement('span')
            span.innerText = iElement.previousElementSibling.textContent.trim();
            option.appendChild(span)
           listOptions.prepend(option)
        })
        myBtn.appendChild(iElement);
        TopSection.prepend(myBtn);
        ele.remove();
}

Options.forEach(ele =>{
      ele.addEventListener('click', ()=> Add_C(ele))
})

TopSection.addEventListener('DOMNodeInserted', ShowElement);
TopSection.addEventListener('DOMNodeRemoved', HideElement);
listOptions.addEventListener('DOMNodeInserted', ShowListOption);
listOptions.addEventListener('DOMNodeRemoved', HideListOption);

function ShowElement() {
  var childCount = TopSection.children.length;

  var elementToHideOrShow = document.querySelector('.palaholder');
  if (childCount > 0) {
    TopSection.style.display = 'flex'
    elementToHideOrShow.style.display = 'none'; 
  }
}

function HideElement() {
  var childCount = TopSection.children.length;
  var elementToHideOrShow = document.querySelector('.palaholder');
  if (childCount <= 1) {
    TopSection.style.display = 'none'
    elementToHideOrShow.style.display = 'block';
}}

function HideListOption(){
  if(listOptions.children.length <= 1){
    listOptions.classList.remove('show_list_options')
  }
}

function ShowListOption(){
  if(listOptions.children.length > 0){
    listOptions.classList.add('show_list_options')
  }
}
