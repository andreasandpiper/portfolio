var portfolioInfo = {
    'calculator': {
        'title': 'Calculator',
        'description': 'Displays the user input and calculates using Order of Operations when the equal sign in clicked. Each button pushed creates a value object which is then filtered before calculating.',
        'technologies': 'HTML, CSS, Javascript',
        'liveSiteUrl': '#',
        'githubUrl': '#',
        'imageSrc': 'img/images/calculator.png'
    },
    'memoryMatch': {
        'title': 'Memory Match',
        'description': 'Created a memory match game that adds a twist to the normal game. Certain combinations of elements matched changes the games or creates resources to use. Watch out! Curium is radioactive and shuffles the board!',
        'technologies': 'HTML, CSS, JavaScript, jQuery',
        'liveSiteUrl': '#',
        'githubUrl': '#',
        'imageSrc': 'img/images/elementGame.png'
    },
    'hawkandheron': {
        'title': 'The Hawk and Heron',
        'description': 'Designed and coded personal website for craft business. The focus of the website is to display images of products and provide links to social media pages',
        'technologies': 'HTML, CSS, Bootstrap, Jekyll, GitHub Pages',
        'liveSiteUrl': 'http://thehawkandheron.com',
        'githubUrl': 'https://github.com/andreasandpiper/andreasandpiper.github.io',
        'imageSrc': 'img/images/hawkandheron.png'
    },
    'sbbikepark': {
        'title': 'Santa Barbara Bike Park',
        'description': 'Mountain biking is a big part of my life, and I am involved with the local group in Santa Barbara, updating their website and email and social media marketing. One of the projects was to build a new website to promote the building of pumptracks in the community.',
        'technologies': 'CSS, Wordpress, sFTP',
        'liveSiteUrl': 'https://www.sbbikepark.com',
        'githubUrl': '',
        'imageSrc': 'img/images/sbbikepark.png'
    },
    'beetsandeats': {
        'title': 'Beets & Eats',
        'description': 'Used data from GoogleMaps, Ticketmaster and Yelp to populate a map with restaurants and bars surrounding a desired event venue.',
        'technologies': 'JQuery, AJAX, Google Maps API, Yelp API, Ticketmaster API, Bootstrap',
        'liveSiteUrl': '#',
        'githubUrl': 'https://github.com/andreasandpiper/beetsandeats',
        'imageSrc': 'img/images/beetsandeats.png'
    }
}

$(document).ready(function() {


    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('.navbar-nav > li > a').click(function(){
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 500);
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

    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });

    $('.overlay').on('click', function(){
        var projectInfo = $(event.target).closest('.portfolio-div')[0].classList[4];
        var projectTitle =  portfolioInfo[projectInfo].title;
        var projectDescript = portfolioInfo[projectInfo].description;
        var projectImage = portfolioInfo[projectInfo].imageSrc;
        var projectTech = portfolioInfo[projectInfo].technologies;
        var liveLink = portfolioInfo[projectInfo].liveSiteUrl;
        var gitHubLink = portfolioInfo[projectInfo].githubUrl;
        $("#portfolioModal").find('.modal-title').text(projectTitle);
        $("#portfolioModal").find('.modal-body p:nth-child(3)').text(projectDescript);
        $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
        $("#portfolioModal").find('.modal-body span').text(projectTech);
        $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
        $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
        if(gitHubLink === ''){
            $("#portfolioModal").find('.modal-body .github').text('');
        }
        $('#portfolioModal').modal('show');
    })

});
