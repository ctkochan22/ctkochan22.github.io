$(document).ready(function(){
    smooth_scroll($);
    contact_pop();
    modalUtility();

    // Get URL parameters
    const params = getUrlParameters(window.location.search.substring(1));
    var modal = document.getElementById("myModal");
    if (params['moku'] && params['moku'] === 'plaid') {
        modal.style.display = "block";
    }

});

function getUrlParameters(pageURL) {
    const URLVariables = pageURL.split('&');
    let urlObject = {};
    for (const variable of URLVariables) {
        const [key, value] = variable.split('=');
        urlObject[key] = value;
    }

    return urlObject;
}

function modalUtility() {
    var modal = document.getElementById("myModal");
    var modalClose = document.getElementsByClassName("close")[0];
    modalClose.onclick = function() {
      modal.style.display = "none";
    }
}

function smooth_scroll(object) {
    $('#project_button').on('click', function(e){
        console.log("Stopping Click");
        e.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    });
};

function contact_pop() {
    $('#contact_btn').on('click', function(e){
        console.log("Stopped:");
        console.log($(this)[0]);
        e.preventDefault();
        $("#contact_info").toggle();
    })
}