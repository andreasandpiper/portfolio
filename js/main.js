var portfolioInfo = {
    'calculator': {
        'title': 'Calculator',
        'description': '<p>Designed and developed a basic calculator to compute basic calculations using order of operations. The user input displays on the screen and computes the input when the equal sign is clicked. Each button creates an object which is filtered before calculating. The filtered input then uses objects to calculate the order of operations then uses function for the different operands. I use operands as keys to perform basic subtraction, addition, multiplication and division. </p>',
        'technologies': 'HTML, CSS, Javascript, JQuery',
        'liveSiteUrl': 'http://calculator.andreawayte.com',
        'githubUrl': 'https://github.com/andreasandpiper/calculator-javascript',
        'imageSrc': 'img/images/calculator.jpg'
    },
    'memoryMatch': {
        'title': 'Memory Match',
        'description': '<p>Created a memory match game that adds a twist to the normal game. The player must find all the element matches before losing all three lives. However, the game board can change based on finding molecule combinations. For example, Hydrogen and Chlorine create hydrochloric acid, which causes the player to loose a life. The game incorporate animated effects, countdowns, and board shuffles. </p><p>I was inspired to create a science game based on my background of being a science teacher. The periodic table is iconic to science, and I wanted to create a game where people could learn some information about elements and molecules by playing a fun game. </p>',
        'technologies': 'Python, Flask, Heroku, Jinja2, HTML, CSS, JavaScript, jQuery, Git',
        'liveSiteUrl': 'https://memorymatch-flask.herokuapp.com/',
        'githubUrl': 'https://github.com/andreasandpiper/flask-memorymatch',
        'imageSrc': 'img/images/elementgame-homepage.jpg'
    },
    'hawkandheron': {
        'title': 'The Hawk and Heron',
        'description': '<p>The Hawk and Heron was inspired by my need to create a simple website to display my crafts. I was previously using Wordpress and could not find a theme I thought displayed my crafts well. I then began learning HTML and CSS and created my own custom website. Since I was creating a static website, I used Jekyll to generate my site. Jekyll incorporates the Liquid render to easily loop through a list of images and render them to the page using the same format. </p><p>The focus of the website is to display images of products and provide links to social media pages. I use this website to help customers see the variety of products I make and guide them to my Etsy shop. I am currently using this website to begin practicing Bootstrap4. </p>',
        'technologies': 'HTML, CSS, Bootstrap, Jekyll, Liquid templating, GitHub Pages',
        'liveSiteUrl': 'http://thehawkandheron.com',
        'githubUrl': 'https://github.com/andreasandpiper/andreasandpiper.github.io',
        'imageSrc': 'img/images/hawkandheron.jpg'
    },
    'sbbikepark': {
        'title': 'Santa Barbara Bike Park',
        'description': '<p>Mountain biking is a big part of my life, and I am involved with the local group in Santa Barbara, updating their website and email and social media marketing. One of the projects was to build a new website to promote the building of pumptracks in the community. I used Wordpress as the CMS, Content Management System so others could also contribute text to the website. </p><p>I incorporated a child theme to customize the CSS and add additional features to the homepage. I added the static background and sponsors bar using a php file. I currently maintain the website by updating content when needed and performing backups of the website. ',
        'technologies': 'CSS, HTML, Wordpress, sFTP',
        'liveSiteUrl': 'https://www.sbbikepark.com',
        'githubUrl': '',
        'imageSrc': 'img/images/sbbikepark.jpg'
    },
    'beetsandeats': {
        'title': 'Beets & Eats',
        'description': '<p>Beets and Eats is an application to help users plan an evening out on the town. To use the application, users enter a location and date to populate a visual list of the events happening on that date. Links to the events and Ticketmaster are available for each event.  Once an event is chosen, the map will populate many nearby food and drink locations. When a location a click, more information including links are provided. </p><p> My contribution to this 2-day Hackathon project was using information from Ticketmaster and Yelp to populate a Google map with nearby locations. I used closures to populate the sidebar with more information once the user clicked an icon as well as displaying basic information in a label window.  </p><p>Beets and Eats uses data from GoogleMaps, Ticketmaster and Yelp to populate a map with restaurants and bars surrounding a desired event venue. </p>',
        'technologies': 'HTML, CSS, JQuery, AJAX, Google Maps API, Yelp API, Ticketmaster API, Bootstrap',
        'liveSiteUrl': 'http://beatsandeats.andreawayte.com',
        'githubUrl': 'https://github.com/andreasandpiper/c12.17Hackathon2',
        'imageSrc': 'img/images/beetsandeats.jpg'
    },
    'closeyourtabs': {
        'title': 'Close Your Tabs',
        'description': '<p>Close Your Tabs incorporates a Chrome extension to keep track of how long a tab has been inactive and active. We display your current tabs from all windows and color them according to the amount of time elapsed since the tab was used. This tools helps you see which tabs are not being used in a colorful manner.</p><p> My contribution to this program was developing the Chrome Extension and wrote the FAQ component in React. I built the extension using an Agile approach to complete a basic prototype to then focus on each next feature. The extension uses Chrome Platform APIs to listen for events within the browser, such as creating a new tab, moving a tab, deleting a tab, etc. I weaved the APIs together to create a system which keeps track of all the current tabs and the time on inactivation. </p><p>The web application is an external view of the extension, giving the user more features to manage their tabs. The extension runs regardless of the user being logged in. A person can sign up using Google Oauth which changes the user’s state in the extension and incorporates http requests to the server so the webpage can display the user’s tab information.</p>',
        'technologies': 'Javascript, ReactJS, Chrome Extension, Chrome Platform API, XMLHTTPRequests, HTML5, CSS3, Node, MySQL, Google OAuth, Axios ',
        'liveSiteUrl': 'http://www.closeyourtabs.com',
        'githubUrl': 'https://github.com/andreasandpiper/closeyourtabs-chrome-extension',
        'imageSrc': 'img/images/closeyourtabs.jpg'
    }
}

$(document).ready(function () {


    /* Scroll hire me button to contact page */
    $('.hire-me').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('.navbar-nav > li > a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })

    $(window).on('scroll', function () {
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })

    /* Magnific Popup */
    $('.grid-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });


    $('.overlay').on('click', showProjectInfo)



});

function showProjectInfo() {
    var projectInfo = $(this).closest('.portfolio-div').attr('data-title');
    var projectTitle = portfolioInfo[projectInfo].title;
    var projectDescript = portfolioInfo[projectInfo].description;
    var projectImage = portfolioInfo[projectInfo].imageSrc;
    var projectTech = portfolioInfo[projectInfo].technologies;
    var liveLink = portfolioInfo[projectInfo].liveSiteUrl;
    var gitHubLink = portfolioInfo[projectInfo].githubUrl;
    $("#portfolioModal").find('.modal-title').text(projectTitle);
    $("#portfolioModal").find('.modal-body .description').html(projectDescript);
    $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
    $("#portfolioModal").find('.modal-body span').html(projectTech);
    $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
    $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
    if (gitHubLink === '') {
        $("#portfolioModal").find('.modal-body .github').hide();
    } else {
        $("#portfolioModal").find('.modal-body .github').show();
    }
    $('#portfolioModal').modal('show');
}