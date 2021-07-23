var pageObj ={};

//init
pageObj.init = function(){

    //FOR NAVIGATION

    var navlist = document.getElementsByClassName('navigation_list');
    //add eventlistener to the navigation List ul element
    navlist[0].addEventListener("click", goToLink, false);

    //turn off the menu effect by making the checkbox uncheck
    function goToLink() {
        document.querySelector("#navi-toggle").checked = false;
    }
}

pageObj.init();
