var ekle        = document.getElementById("ekle")
var sil         = document.getElementById("ul")
var input       = document.getElementById("toDoInput")
var appending   = document.getElementById("appending")
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



//ekleme işlemi
ekle.addEventListener("click",itemEkleme)
function itemEkleme(e)
{
    if(input.value == "")
    {
        
            input.style.border = "1px solid red" 
        
    }
    else
    {
        e.preventDefault();
        input.style.border = ""
        itemsArray.push(input.value)
        localStorage.setItem('items', JSON.stringify(itemsArray));

        // liste oluşturma
        var div = document.createElement("div")
        div.className="alert alert-info alert-dismissible"
        div.role="alert"
        div.innerText = `${input.value}`
        var button = document.createElement("button")
        button.className = "btn-close"
        button.type = "button"

        div.appendChild(button)     
        appending.appendChild(div)
        
        input.value = ""
        
    }
}

//local storage dan veri çekme
data.forEach(item => {
    var div = document.createElement("div")
        div.className="alert alert-info alert-dismissible"
        div.role="alert"
        div.innerText = `${item}`
        var button = document.createElement("button")
        button.className = "btn-close"
        button.type = "button"
    
        div.appendChild(button)
        appending.appendChild(div)

        
  });

//Silme işlemi
appending.addEventListener("click",function(e){
    if(e.target.className=="btn-close")
    {
        var getText = e.target.parentElement.innerText
        itemsArray.forEach(function(item,index){
            if (item==getText) 
            {
                itemsArray.splice(index,1)
                console.log(itemsArray)
            }
        })
        localStorage.setItem('items', JSON.stringify(itemsArray));
        e.target.parentElement.remove()
    }
    
     
    e.preventDefault()
})



