let exploreProductsEl=document.getElementById("explore-products");
var likedModelBodyEl=document.getElementById("liked-modal-body");

let productsLikedData=[];
let likedProducts=localStorage.getItem("likedproducts");

if(typeof(likedProducts)==="object"){
    productsLikedData=[];
    likedModelBodyEl.textContent="No Products";
}else{
    productsLikedData=JSON.parse(likedProducts);
    productsLikedData.map(product=>{
        onliked(product);
    } 
    );
}

let productsData=[{
    imgUrl:"https://t4.ftcdn.net/jpg/02/57/88/47/360_F_257884725_wtQww1JqWripKZsIR3aMuidPhglniAOV.jpg",
    name:"lemon",
    price:110,
    isLiked:false
},
{
    imgUrl:"https://www.orgpick.com/cdn/shop/products/Raisins_large.jpg?v=1569578077",
    name:"Raisin",
    price:320,
    isLiked:false
}];


function onliked(product){
    
    const productId="product"+product.name;
    const heartId="heart"+productId;
    // Create a div element with classes "col-sm-6", "col-md-4", "col-lg-3", "mb-3"
    var columnDiv = document.createElement("div");
    columnDiv.className = "col-sm-12 col-md-6 mb-3";
    columnDiv.id=productId;
    
    // Create a div element with class "card"
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    
    // Create a div element with class "card-body" and "text-center"
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    
    var imgContainer=document.createElement("div");
    imgContainer.className="img-container";
    
    // Create an img element with class "product-img" and set its src and alt attributes
    var imgElement = document.createElement("img");
    imgElement.className = "product-img w-100";
    imgElement.src = product.imgUrl; // Set the image source
    imgElement.alt = "product"; // Set the alt text
    
    imgContainer.appendChild(imgElement);
    
    const flexContainerDiv = document.createElement('div');
    flexContainerDiv.className = 'd-flex justify-content-between mt-3';
    
    // Create the product details div
    const productDetailsDiv = document.createElement('div');
    
    // Create the product name element
    const nameElement = document.createElement("h6");
    nameElement.className = "product-name mt-3";
    nameElement.textContent = product.name;
    
    // Create the product price element
    const priceElement = document.createElement("p");
    priceElement.className = "product-price mt-1";
    
    var priceSpanElement= document.createElement("span");
    priceSpanElement.className="price-span";
    priceSpanElement.textContent= product.price;
    priceElement.appendChild(priceSpanElement);
    
    priceElement.appendChild(document.createTextNode('/- only')) // Set the product price
    
    // Append product name and price to product details div
    productDetailsDiv.appendChild(nameElement);
    productDetailsDiv.appendChild(priceElement);
    
    // Create the heart icon div
    const heartIconDiv = document.createElement('div');
    heartIconDiv.className = 'heart-icon';
    
    // Create the heart icon element
    const heartIconElement = document.createElement('i');
    heartIconElement.className = 'fa-solid fa-heart';
    heartIconElement.id=heartId;
    if(product.isLiked===true){
        heartIconElement.classList.add("heart");
    }else{
        heartIconElement.classList.remove("heart");
    }
    heartIconElement.onclick=function(){
        let heartEl=document.getElementById(heartId);
        heartEl.classList.toggle("heart");
        if(product.isLiked===true){
            product.isLiked=false;
            productsLikedData=productsLikedData.filter(p=>p.name!==product.name);
       
            likedModelBodyEl.textContent="";
            productsLikedData.map(product=>{
                onliked(product);
            } );
        }
    }
    
    // Append heart icon to heart icon div
    heartIconDiv.appendChild(heartIconElement);
    
    // Append product details and heart icon to flex container
    flexContainerDiv.appendChild(productDetailsDiv);
    flexContainerDiv.appendChild(heartIconDiv);
    
    
    cardBodyDiv.appendChild(imgContainer);
    cardBodyDiv.appendChild(flexContainerDiv);
    
    
    // Append cardBodyDiv to cardDiv
    cardDiv.appendChild(cardBodyDiv);
    
    // Append cardDiv to columnDiv
    columnDiv.appendChild(cardDiv);
    
    likedModelBodyEl.appendChild(columnDiv);
    
}




function buyMoreClicked(product){
    
const productId="product"+product.name;
const heartId="heart"+productId;
// Create a div element with classes "col-sm-6", "col-md-4", "col-lg-3", "mb-3"
var columnDiv = document.createElement("div");
columnDiv.className = "col-sm-6 col-md-4 col-lg-3 mb-3";
columnDiv.id=productId;

// Create a div element with class "card"
var cardDiv = document.createElement("div");
cardDiv.className = "card";

// Create a div element with class "card-body" and "text-center"
var cardBodyDiv = document.createElement("div");
cardBodyDiv.className = "card-body";

var imgContainer=document.createElement("div");
imgContainer.className="img-container";

// Create an img element with class "product-img" and set its src and alt attributes
var imgElement = document.createElement("img");
imgElement.className = "product-img w-100";
imgElement.src = product.imgUrl; // Set the image source
imgElement.alt = "product"; // Set the alt text

imgContainer.appendChild(imgElement);

const flexContainerDiv = document.createElement('div');
flexContainerDiv.className = 'd-flex justify-content-between mt-3';

// Create the product details div
const productDetailsDiv = document.createElement('div');

// Create the product name element
const nameElement = document.createElement("h6");
nameElement.className = "product-name mt-3";
nameElement.textContent = product.name;

// Create the product price element
const priceElement = document.createElement("p");
priceElement.className = "product-price mt-1";

var priceSpanElement= document.createElement("span");
priceSpanElement.className="price-span";
priceSpanElement.textContent= product.price;
priceElement.appendChild(priceSpanElement);

priceElement.appendChild(document.createTextNode('/- only')) // Set the product price

// Append product name and price to product details div
productDetailsDiv.appendChild(nameElement);
productDetailsDiv.appendChild(priceElement);

// Create the heart icon div
const heartIconDiv = document.createElement('div');
heartIconDiv.className = 'heart-icon';

// Create the heart icon element
const heartIconElement = document.createElement('i');
heartIconElement.className = 'fa-solid fa-heart';
heartIconElement.id=heartId;
if(product.isLiked){
    heartIconElement.classList.add("heart");
}else{
    heartIconElement.classList.remove("heart");
}
heartIconElement.onclick=function(){
    let heartEl=document.getElementById(heartId);
    heartEl.classList.toggle("heart");
    if(!product.isLiked){
        product.isLiked=true;
        
        let index=productsLikedData.findIndex(p=>"product"+p.name===productId);
   
        if(index<0){

        productsLikedData.push(product);
        localStorage.setItem("likedproducts",JSON.stringify(productsLikedData));
        
        likedModelBodyEl.textContent="";
        productsLikedData.map(product=>{
            onliked(product);
    
        } );
    }

    }else{
        product.isLiked=false;
       let index= productsLikedData.findIndex(p=>"product"+p.name===productId);
       productsLikedData.splice(index,1);
      
       localStorage.setItem("likedproducts",JSON.stringify(productsLikedData));
   
       if(productsLikedData.length<=0){
        likedModelBodyEl.textContent="No Products";
       }else{
        likedModelBodyEl.textContent="";
        productsLikedData.map(product=>{
            onliked(product);
        });
       }

    }
   
}


// Append heart icon to heart icon div
heartIconDiv.appendChild(heartIconElement);

// Append product details and heart icon to flex container
flexContainerDiv.appendChild(productDetailsDiv);
flexContainerDiv.appendChild(heartIconDiv);


cardBodyDiv.appendChild(imgContainer);
cardBodyDiv.appendChild(flexContainerDiv);


// Append cardBodyDiv to cardDiv
cardDiv.appendChild(cardBodyDiv);

// Append cardDiv to columnDiv
columnDiv.appendChild(cardDiv);


exploreProductsEl.appendChild(columnDiv);

}

buymore=async (event)=>{
     let buymoreBtnLoadingEl=document.getElementById("buymore-btn-loading");
     let buymoreBtnEl=document.getElementById("buymore-btn");
     buymoreBtnEl.classList.add("d-none");
     buymoreBtnLoadingEl.classList.remove("d-none");

    const url="http://localhost:8080/product/getall";
    const options={
        method:"GET"
        }
    try{
    const response=await fetch(url,options);
    if(!response.ok){
        console.log(`http request error ${response.status}`);
    }else{
        let data=await response.json();
        productsData=data;
    }
    }catch(error){
        console.log("error fetching : "+error);
    }
    buymoreBtnLoadingEl.classList.add("d-none");
    buymoreBtnEl.classList.remove("d-none");
    productsData.map(obj=>{
       
        let product={
            imgUrl:"",
            name:"",
            price:"",
            isLiked:false
        }
        product.imgUrl=obj.imgUrl;
        product.name=obj.name;
        product.price=obj.price;
        let index=productsLikedData.findIndex(p=>p.name===product.name);
       
        
        if(index>=0){
            product.isLiked=true;
        }
    
        buyMoreClicked(product);
    })

}

function heartClicked(){
    let heartEl=document.getElementById("heart-id");
    heartEl.classList.toggle("heart");
}

function onsaveliked(){
   
    if(productsLikedData.length>0){
        localStorage.setItem("likedproducts",JSON.stringify(productsLikedData));
    }
   
}


