  // khai báo mặc định
  var slideIndex; //= curent baner
  // KHai bào hàm hiển thị slide
  function showSlides(){
      var i;
      var slides = document.getElementsByClassName("banner-slideshow");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"; 
      }
      slides[slideIndex].style.display ="block"; 
      slides[slideIndex].className += " active";
      //ctiep slide
      slideIndex++;
      //change slide
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }   
      setTimeout(showSlides, 3500);
     }
  //first banner
        showSlides(slideIndex = 0);
  // //open checkout
  const btnBuys=document.querySelectorAll('#btn-buy'); //(modal)
  const openModal=document.querySelector('.checkout');
  var nameProduct=document.getElementById("name-product"); //get value produt
  var priceProduct=document.getElementById("price-product");
  var navBack=document.getElementById("back"); //(backHome page modal)
     function showModal(x){        
       openModal.classList.add('open');
        var addCart=x.parentElement.children;
          nameProduct.value=addCart[0].innerText;
          priceProduct.value=addCart[1].innerText;
          navBack.href="index.html";
       }
        for(const btnBuy of btnBuys){
            btnBuy.addEventListener('click',showModal);
       } 
     //close checkout
      const closeCheckout=document.querySelector('.checkout-close');
      function closeModal(){
            openModal.classList.remove('open');
      }
       closeCheckout.addEventListener('click',closeModal);
       const fullName=document.getElementById("fullname"); //( checckBill )
       const checkMail=document.getElementById("email");
       const checkAddress=document.getElementById("address");
       const checkCity=document.getElementById("city");
       const checkBox=document.getElementById("check-billing");
       const noticeName=document.getElementById("error-name");
       const noticeEmail=document.getElementById("error-email");
       const nocticeAddress=document.getElementById("error-address");
       const nocticeCity=document.getElementById("error-city");
       const letter=/^[A-Za-z]+(\s)+[A-Za-z]+(\s)+.+[^0-9]+$/;
       const mail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
       const address=/./;
       const number=/^[0-9]+$/;
       const checkNameCard=document.getElementById("fulname-card");
       const checkNumberCard=document.getElementById("number-card");
       const noticeNameCard=document.getElementById("error-namecard");
       const noticeNumberCard=document.getElementById("error-numbercard");
       const backHome=document.getElementById("home");  //( backHome)
  //check infor checkout
    function checkBill(){
      if(fullName.value.match(letter)){ // full name
          if(checkMail.value.match(mail)) // mail 
          {
             if(checkAddress.value.match(address)) // address
             {    
                 if(checkNameCard.value.match(letter)) // name card
                 { 
                   noticeNameCard.style.display='none';
                        if(checkNumberCard.value.match(number)){ //numeber card
                           noticeNumberCard.style.display='none';
                            backHome.href="index.html";
                         }else{ 
                          noticeNumberCard.style.display='block';
                          noticeNumberCard.innerHTML ='*pleae fill correct your Number of Card.';
                          }
                  }else{  
                     noticeNameCard.style.display='block';
                     noticeNameCard.innerHTML ='*pleae fill correct your Name of Card.';
                       }
                nocticeAddress.style.display='none';
             }else{
                   nocticeAddress.style.display='block';
                   nocticeAddress.innerHTML ='*pleae fill correct your address';
                  }
                noticeEmail.style.display='none';
           }else{
                   noticeEmail.style.display='block';
                   noticeEmail.innerHTML ='*pleae fill correct your email.';
                } 
            noticeName.style.display='none';
      }else{
            noticeName.style.display='block';
             noticeName.innerHTML ='*pleae fill correct your fullname.'; 
             }
  }
