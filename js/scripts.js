


var burgerBtn = document.querySelector("#burger-button");
var mainNav = document.querySelector("#main-nav");

var mainNavVisible = false; 

burgerBtn.addEventListener("click", () =>{
    console.log("burger clicked");

    // check to see if we can see the main nav

    if(mainNavVisible === false) {
        mainNav.classList.remove("hideMainNavAtMobile");
        mainNavVisible = true;
    }else{
        mainNav.classList.add("hideMainNavAtMobile");
        mainNavVisible = false;
    };

});

<script>
    document.getElementById('contact-button').onclick = function() {
        window.location.href = 'contact.html';
    };
</script>

