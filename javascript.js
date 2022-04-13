//Scrolling effect on the website

//Scrolling Effects on home page
ScrollReveal(
    { 
      //reset: true,
      duration: 2500,
      distance: '50px',
      delay: 400,
     });

ScrollReveal().reveal('.title-text', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.about-panel', {delay: 100, origin:'right'});
ScrollReveal().reveal('.featuredProduct-image img', {delay:100, origin: 'bottom'});
ScrollReveal().reveal('.design-panel', {delay: 100, origin:'left'});


//Scrolling Effects on product page
ScrollReveal().reveal('.shop-image a img', {delay:100, origin: 'bottom'});

