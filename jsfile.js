
// function changeImage(){
//     mainpic.src="images/image-product-2.jpg";
// }

//increasing and decreasing quantity of the product
var quantity = document.getElementById("itemqty");
var count =quantity.value;
// var count = parseInt(quantity.value);
var cart =[];
var picIndex=1;


function minus(){
  if(count>1){
    count--;
    quantity.value=count;
  }
}

function plus(){
    count++;
    quantity.value=count
}

var mainpic=document.getElementById("bigpic")



function showpic1(){
    bigpic.src="images/image-product-1.jpg";
    
}
function showpic2(){
    bigpic.src="images/image-product-2.jpg";

}
function showpic3(){
    bigpic.src="images/image-product-3.jpg";
  
}
function showpic4(){
    bigpic.src="images/image-product-4.jpg";

}

// Open the Modal
function openModal() {
    document.getElementById("myModal2").style.display = "block";
  }

  // Close the Modal
function closeModal() {
    document.getElementById("myModal2").style.display = "none";
  }

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function changeMainPic(n){
  if((picIndex+n)<1 || (picIndex+n)==1){
    picIndex=1;
    showpic1();
  }
 
  else if((picIndex+n)==2){
    picIndex=2;
    showpic2();
  }

  else if((picIndex+n)==3){
    picIndex=3;
    showpic3();
  }

  else if((picIndex+n)==4){
    picIndex=4;
    showpic4();
  }

  else if((picIndex+n)>4){
    picIndex=4;
    showpic4();
  }
}


//cart


function addToCart(productName, productPrice) {
  // Check if the product is already in the cart
  const existingProduct = cart.find(item2 => item2.name === productName);
  const addedQty = parseInt(document.getElementById('itemqty').value);

  if(addedQty>0){
    if (existingProduct) {
        existingProduct.quantity += addedQty;
    } else {
    
      const item = { name: productName, 
                  price: productPrice, 
                  quantity: addedQty};
      cart.push(item);
    }
  
    updateCartUI();
  }
}

function updateCartUI() {
  

  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');

  cartCount.hidden=false;
  cartItemsContainer.innerHTML = '';
  
  let totalItems=0;
  let totalDisplay;
  
  cart.forEach(item => {
      totalItems += item.quantity;
      
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
      <div class="insideCart">

          <div class="cartDetails">
            <div>
              <img class="cartItemImg" src="images/image-product-1-thumbnail.jpg">
            </div>
            <div class="detailText"> 
              <p>${item.name}</p>
              <p>$${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div>
              <button class="removeButton" onclick="removeFromCart('${item.name}')"><img src="images/icon-delete.svg"></button>
            </div>
          </div>

          <div>
          <button class="coButton" >Checkout</button>
          </div>

        </div>
          `;
      cartItemsContainer.appendChild(cartItem);
  });
  
    totalDisplay = totalItems;
    cartCount.innerText = totalDisplay;

  

  if(cart.length==0){
    const delCount = document.getElementById('cart-count');
    delCount.hidden=true;
    
    const cartItem = document.createElement('div');
      cartItem.className = 'cartEmpty';
      cartItem.innerHTML=`
      <p>Your cart is empty.</p>
      `;
      cartItemsContainer.appendChild(cartItem);

  }
}

function removeFromCart(item){

  for(let i=0; i<cart.length;i++){
    if(cart[i].name==item){
      cart.splice(i,1);
    }
  }

  updateCartUI();
}

function showSidebar(){
  document.getElementById('sidebar').style.display="flex";
  // document.getElementById('sidebar').style.transitionDuration="2s";
  document.getElementById('sidebar-bg').style.display="block";
  // document.getElementById('sidebar-bg').style.transitionDuration="2s";

}

// var sidebar=document.getElementsByClassName("sidebar");
function hideSidebar(){
 
  // document.getElementsByClassName('sidebar').style.display="none";
  // sidebar.style.display="none";
  document.getElementById('sidebar').style.display="none";
  document.getElementById('sidebar-bg').style.display="none";
}