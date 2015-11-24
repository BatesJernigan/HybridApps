// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

function saveContact() {
    
    var contactName = document.getElementById('contactName').value;
    var contactMobile = new ContactField('mobile', document.getElementById('contactMobile').value, true);
    var contactWork = new ContactField('work', document.getElementById('contactWork').value);
    var contactHome = new ContactField('home', document.getElementById('contactHome').value);
    var contactEmail = new ContactField('email', document.getElementById('contactEmail').value, true);
    var contactUrl = new ContactField('website', document.getElementById('contactUrl').value, true);

    var contactBirthdate = new Date(document.getElementById('contactBirthdate').value);

    var contact = navigator.contacts.create();

    contact.displayName = contactName;
    contact.name = contactName;
    contact.phoneNumbers = [contactMobile, contactWork, contactHome];
    contact.emails = [contactEmail];
    contact.urls = [contactUrl];
    contact.birthday = contactBirthdate;
    contact.save(onSuccess, onError);

}

function onSuccess(contact) {
    alert('Save Success');
};

function onError(contactError) {
    alert("Error = " + contactError.code);
};

