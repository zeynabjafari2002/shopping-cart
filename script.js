let $=document
const bookList=[
    { id : 1 , name : 'Le Petit Prince' , url : 'photos/Le Petit Prince.jpg' , price :5 , quantity : 1 },
    { id : 2 , name : 'After You' , url : 'photos/After You.jpg' , price : 12 , quantity : 1 },
    { id : 3 , name : 'Things We Never Got-Over' , url : 'photos/Things We Never Got-Over.jpg' , price :8 , quantity : 1 },
    { id : 4 , name : 'The Love Hypothesis' , url : 'photos/The Love Hypothesis.jpg' , price : 11 , quantity : 1 },
    { id : 5 , name : 'Ugly Love' , url : 'photos/Ugly Love.jpg' , price : 21 , quantity : 1 },
    { id : 6 , name : 'Foreign Fruit' , url : 'photos/Foreign Fruit.jpg' , price :7 , quantity : 1 },
    { id : 7 , name : 'Ready Player Two' , url : 'photos/Ready Player Two.jpg' , price : 19 , quantity : 1 },
    { id : 8 , name : 'Four A Divergent Collection' , url : 'photos/Four A Divergent Collection.jpg' , price: 18 , quantity : 1 },
    { id : 9 , name : 'Collected Shorter Plays' , url : 'photos/Collected Shorter Plays.jpg' , price : 15 , quantity : 1 },
    { id : 10 , name : 'The Peacock Emporium' , url : 'photos/The Peacock Emporium.jpg' , price : 12 , quantity : 1 },
    { id : 11 , name : 'City Of Girls' , url : 'photos/City Of Girls.jpg' , price : 22 , quantity : 1 },
    { id : 12 , name : 'The Orange Girl' , url : 'photos/The Orange Girl.jpg' , price : 17 , quantity : 1 },
    { id : 13 , name : 'Feeding You Lies' , url : 'photos/Feeding You Lies.jpg' , price : 13 , quantity : 1 },
    { id : 14 , name : 'Me Before You' , url : 'photos/Me Before You.jpg' , price : 12 , quantity : 1 },
]

let productsList=$.querySelector('.productsList')
bookList.forEach(
    function (product){
        // basic method of creating element
        // let productContainer=$.createElement('div')
        // productContainer.classList.add('bookContainer')

        // let productImgElem=$.createElement('img')
        // productImgElem.setAttribute('src' , product.url)
        // productImgElem.classList.add('bookSrc')

        // let productTitle=$.createElement('p')
        // productTitle.innerHTML=product.name
        // productTitle.classList.add('bookName')

        // let productPriceElem=$.createElement('p')
        // productPriceElem.classList.add('bookPrice')
        // productPriceElem.innerHTML=product.price

        // let productAddBtn=$.createElement('button')
        // productAddBtn.innerHTML='add to basket'
        // productAddBtn.classList.add('basketBtn')
        
        // productAddBtn.addEventListener('click' , ()=>{
        //     addProductToBasketArray(product.id)
        // })

        // productContainer.append(productImgElem , productTitle , productPriceElem , productAddBtn)
        // productsList.append(productContainer)


        // advanced method of creating element
        productsList.insertAdjacentHTML('beforeend' ,
            '<div class="bookContainer"><img src=" '+product.url+' " class="bookSrc"><p class="bookName">'+product.name+'</p><p class="bookPrice">'+product.price+'</p><button onclick="addProductToBasketArray('+product.id+')" class="basketBtn">add to basket</button></div>'
        )
    }
)

let userBasket=[]
function addProductToBasketArray(productId){
    let mainProduct=bookList.find(
        function (product){
            return product.id===productId
        }
    )
    userBasket.push(mainProduct)
    basketProductGenerator(userBasket)
    calculatingTotalPrice(userBasket)
}

let basketProductsContainer=$.querySelector('.products')
function basketProductGenerator(userBasketArray){
    basketProductsContainer.innerHTML=''
    userBasketArray.forEach(
        function (product){
            // basic method of creating element
            // let basketProductContainers=$.createElement('div')
            // basketProductContainer.classList.add('productBasketContainer')

            // let srcNameContainer=$.createElement('div')
            // srcNameContainer.classList.add('srcNameContainer')

            // let basketProductImg=$.createElement('img')
            // basketProductImg.setAttribute('src' , product.url)

            // let basketProductName=$.createElement('p')
            // basketProductName.innerHTML=product.name

            // let basketProductPrice=$.createElement('p')
            // basketProductPrice.innerHTML=product.price
            // basketProductPrice.classList.add('price')

            // let basketProductInput=$.createElement('input')
            // basketProductInput.setAttribute('type' , 'number')
            // basketProductInput.value= product.quantity

            // basketProductInput.addEventListener('change' , ()=>{
            //     updateProductQuantity(product.id , basketProductInput.value)
            // })

            // let basketProductRemoveBtn=$.createElement('button')
            // basketProductRemoveBtn.classList.add('removeBtn')
            // basketProductRemoveBtn.innerHTML='remove'
            
            // removing product from basket
            // basketProductRemoveBtn.addEventListener('click' , ()=>{
            //     removeProductFromBasket(product.id)
            //     calculatingTotalPrice(userBasket)
            // })

            // srcNameContainer.append(basketProductImg , basketProductName)
            // basketProductContainers.append(srcNameContainer , basketProductPrice , basketProductInput , basketProductRemoveBtn)
            // basketProductsContainer.append(basketProductContainers)



            // advanced method of creating element
            basketProductsContainer.insertAdjacentHTML('afterbegin' , 
            '<div class="products"><div class="productBasketContainer"><div class="srcNameContainer"><img src="'+product.url+'"><p>'+product.name+'</p></p></div><p class="price">'+product.price+'</p><input value=1 onchange="updateProductQuantity('+product.id+','+'value'+')" type="number"><button class="removeBtn" onclick="removeProductFromBasket('+product.id+')" >remove</button></div></div>')
        }
    )
}




// open basket product
let openSignBasket=$.querySelector('.uil-shopping-cart')
let shoppingCartContainer=$.querySelector('.shoppingCartContainer')
openSignBasket.addEventListener('click' , ()=>{
    shoppingCartContainer.removeAttribute('style')
})


// close basket product
let closeSignBasket=$.querySelector('.uil-times')
closeSignBasket.addEventListener('click' , ()=>{
    shoppingCartContainer.setAttribute('style' , 'display:none')
})

function removeProductFromBasket(productId){
    userBasket=userBasket.filter(
        function (product){
            return product.id !== productId
        }
    )
    basketProductGenerator(userBasket)
    calculatingTotalPrice(userBasket)
}


// purchase btn
let purchase=$.querySelector('.purchase')
purchase.addEventListener('click' , ()=>{
    userBasket=[]
    basketProductGenerator(userBasket)
    calculatingTotalPrice(userBasket)
})


// counting total price
let totalPriceElem=$.getElementById('totalPrice')
function calculatingTotalPrice(userBasketArray){
    let totalPriceValue = 0

    userBasketArray.forEach(
        function (product){
            totalPriceValue += product.price * product.quantity
        }
    )
    totalPriceElem.innerHTML=totalPriceValue
}


// updating product quantity
function updateProductQuantity(productId , newQuantity){
    userBasket.forEach(
        function (product){
            if(product.id === productId){
                product.quantity = newQuantity
            }
        }
    )
    calculatingTotalPrice(userBasket)
}