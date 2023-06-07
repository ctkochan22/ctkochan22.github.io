$(document).ready(function(){
    smooth_scroll($);
    contact_pop();
    modalUtility();

    // Get URL parameters
    const params = getUrlParameters(window.location.search.substring(1));
    var modal = document.getElementById('myModal');
    if (params['moku'] && params['moku'] === 'plaid') {
        modal.style.display = "block";
        var messageContainer = $("#modal-message");
        addMessage(messageContainer, 'plaid');
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

function addMessage(messageContainer, type) {
    switch (type) {
        case 'plaid':
            var plaidMessage = "<p>Dear Plaid,</p><br />"
                + "<p>I have worked at Expensify, an expense reporting platform, as a full-stack software engineer for the past 6 and a half years. I am proud of my tenure because I feel I helped it grow and overcome a variety of different obstacles. I have worked on numerous projects that have spanned the stack. Additionally, I have worked on many of our third-party integrations, becoming the resident expert at Expensify for Onfido, Stripe, and Plaid.</p><br/>"
                + "<p>I really appreciated the power of our Plaid integration and have always wanted to learn more behind the magic beyond the curtains. In addition to my experience with Plaid at Expensify. I am building a personal project application, a basic daily spending budget tool, that uses Plaid’s API. The more I work with Plaid’s API, the more I have become impressed, slightly obsessed, and insatiably curious as to how it works.</p><br />"
                + "<p>I'm deeply passionate about finance, and how applications can leverage a smooth connection to financial institutions to empower a new wave of tools and solutions that did not exist before. I would revel in the opportunity to be part of the team that bring in that new age. I hope you’ll consider me as a candidate!</p>"
                + "<p>Kosuke</p><br />";
            console.log(plaidMessage);
            messageContainer.html(plaidMessage);
        default:
            return;
    }
}

