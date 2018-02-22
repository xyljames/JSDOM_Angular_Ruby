var form=document.getElementById('addForm');
var itemList= document.getElementById('items');
// var moveColor= document.getElementById('box')
// moveColor.addEventListener('mousemove',mouseMoveToColor);
// var filter= document.getElementById('filter');
// filter.addEventListener('keyup',filterItems);
//Delete event
itemList.addEventListener('click',removeItem);

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    // var newItem =document.getElementById('item').value;
    var newItem=document.querySelector('input[id="item"]').value;

    //Create new li element
    var li=document.createElement('li')
    li.className='list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create the delete element
    var deleteBtn = document.createElement('button')
    //Add class for delete
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    //Append text node
    var x = document.createTextNode('X')
    deleteBtn.appendChild(x);
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure")){
            var li=e.target.parentElement;
            console.log(li)
            itemList.removeChild(li);
        }
    }
}

// function filterItems(e){
//     //Convert text to lowercase
//     var text=e.target.value.toLowerCase();

//     //Get list
//     var items= itemList.getElementsByTagName('li')
//     //Convert to an array
//     Array.from(items).forEach(item => {
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text)!=-1){
//             item.style.display ='block'
//         }
//         else{
//             item.style.display='none'
//         }
        
//     });

// }

// function mouseMoveToColor(e){
//     moveColor.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';
// }