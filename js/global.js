$(document).ready(function(){
    smooth_scroll($);
    contact_pop();
});


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