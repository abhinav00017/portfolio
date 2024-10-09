document.addEventListener('DOMContentLoaded', function() {

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);

    document.body.classList.add('custom-cursor');

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        let distX = mouseX - trailX;
        let distY = mouseY - trailY;
        
        trailX += distX * 0.1;
        trailY += distY * 0.1;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';

        requestAnimationFrame(animate);
    }

    animate();

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll animations
    function handleScrollAnimations() {
        document.querySelectorAll('.animate__animated').forEach(function(element) {
            if (isInViewport(element) && !element.classList.contains('animate__fadeInUp')) {
                element.classList.add('animate__fadeInUp');
            }
        });
    }

//    Initial check for elements in viewport
    // handleScrollAnimations();

    // // Listen for scroll events
    // window.addEventListener('scroll', handleScrollAnimations);

    // // Animate skill levels when they come into view
    // const skillLevels = document.querySelectorAll('.skillLevelBox');
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.animation = 'fillSkill 1s ease-out forwards';
    //         }
    //     });
    // }, { threshold: 0.5 });

    // skillLevels.forEach(skill => observer.observe(skill));


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var headerDiv = document.querySelector('.headerDiv');
    var menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function() {
        headerDiv.classList.toggle('active');
    });

    var headerHeight = headerDiv.offsetHeight;

    document.querySelectorAll('.headContentDiv a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                headerDiv.classList.remove('active');
            }
        });
    });

    var downloadResumeBtn = document.getElementById('downloadResumeBtn');
    downloadResumeBtn.addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'assets/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    });

    var modal = document.getElementById('resumeModal');
    var viewBtn = document.getElementById('viewResumeBtn');
    var closeBtn = document.getElementsByClassName('close')[0];

    viewBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    var experience1DivMoreInfo = document.getElementById('experience1DivMoreInfo');
    var experience1ExpandBtn = document.getElementById('experience1ExpandBtn');
    var experience1ExpandDiv = document.getElementById('experience1ExpandDiv');
    var experience1CollapseDiv = document.getElementById('experience1CollapseDiv');
    var experience1CollapseBtn = document.getElementById('experience1CollapseBtn');

    experience1ExpandBtn.addEventListener('click', function() {
        experience1DivMoreInfo.style.display = 'flex';
        experience1ExpandDiv.style.display = 'none';
        experience1CollapseDiv.style.display = 'flex';
    });

    experience1CollapseBtn.addEventListener('click', function() {
        experience1DivMoreInfo.style.display = 'none';
        experience1ExpandDiv.style.display = 'flex';
        experience1CollapseDiv.style.display = 'none';
    });

    var experience2DivMoreInfo = document.getElementById('experience2DivMoreInfo');
    var experience2ExpandBtn = document.getElementById('experience2ExpandBtn');
    var experience2ExpandDiv = document.getElementById('experience2ExpandDiv');
    var experience2CollapseDiv = document.getElementById('experience2CollapseDiv');
    var experience2CollapseBtn = document.getElementById('experience2CollapseBtn');

    experience2ExpandBtn.addEventListener('click', function() {
        experience2DivMoreInfo.style.display = 'flex';
        experience2ExpandDiv.style.display = 'none';
        experience2CollapseDiv.style.display = 'flex';
    });

    experience2CollapseBtn.addEventListener('click', function() {
        experience2DivMoreInfo.style.display = 'none';
        experience2ExpandDiv.style.display = 'flex';
        experience2CollapseDiv.style.display = 'none';
    });

    var sendMailBtn = document.getElementById('sendMailBtn');

    sendMailBtn.addEventListener('click', function() {
        var mailtoLink = 'mailto:abhinavch017@gmail.com?subject=Portfolio&body=Hi Abhinav,';
        window.open(mailtoLink);
    });

    var copyLinkedinLink = document.getElementById('copyLinkedinLink');
    var linkedinLink = document.getElementById('linkedinLink').href;

    copyLinkedinLink.addEventListener('click', function() {
        navigator.clipboard.writeText(linkedinLink);
        var linkedinCopiedTick = document.getElementById('linkedinCopiedTick');
        linkedinCopiedTick.style.display = 'inline';

        setTimeout(function() {
            linkedinCopiedTick.style.display = 'none';
        }, 2000);
    });

    var copyGITLink = document.getElementById('copyGITLink');
    var gitLink = document.getElementById('gitLink').href;

    copyGITLink.addEventListener('click', function() {
        navigator.clipboard.writeText(gitLink);
        var gitCopiedTick = document.getElementById('gitCopiedTick');
        gitCopiedTick.style.display = 'inline';

        setTimeout(function() {
            gitCopiedTick.style.display = 'none';
        }, 2000);
    });

    var copyCCLink = document.getElementById('copyCCLink');
    var ccLink = document.getElementById('ccLink').href;

    copyCCLink.addEventListener('click', function() {
        navigator.clipboard.writeText(ccLink);
        var ccCopiedTick = document.getElementById('ccCopiedTick');
        ccCopiedTick.style.display = 'inline';

        setTimeout(function() {
            ccCopiedTick.style.display = 'none';
        }, 2000);
    });

    var copyHRLink = document.getElementById('copyHRLink');
    var hrLink = document.getElementById('hrLink').href;

    copyHRLink.addEventListener('click', function() {
        navigator.clipboard.writeText(hrLink);
        var hrCopiedTick = document.getElementById('hrCopiedTick');
        hrCopiedTick.style.display = 'inline';

        setTimeout(function() {
            hrCopiedTick.style.display = 'none';
        }, 2000);
    });


    var copyInstagramLink = document.getElementById('copyInstagramLink');
    var instagramLink = document.getElementById('instagramLink').href;

    copyInstagramLink.addEventListener('click', function() {
        navigator.clipboard.writeText(instagramLink);
        var instagramCopiedTick = document.getElementById('instagramCopiedTick');
        instagramCopiedTick.style.display = 'inline';

        setTimeout(function() {
            instagramCopiedTick.style.display = 'none';
        }, 2000);
    });
});