const fadeIn = ((element) => {
    element.classList.add('show');
});

const fadeOut = ((element) => {
    element.classList.remove('show');
    setTimeout(() => {
        element.remove();
    }, 1000);
});

const sequenceIntroElementRendering = (() => {
    const hiElement = document.getElementById('hidden-intro-hi');
    const journeyElement = document.getElementById('hidden-intro-journey');
    const timelineElement = document.getElementsByClassName('hidden-element app-container')[0];
    fadeIn(hiElement);
    setTimeout(() => {
        fadeOut(hiElement);
        setTimeout(() => {
            fadeIn(journeyElement);
            setTimeout(() => {
                fadeOut(journeyElement);
                setTimeout(() => {
                    // parent.appendChild(timelineElement);
                    fadeIn(timelineElement);
                }, 1000);
            }, 2000)
        }, 1000);
    }, 2000);
});

sequenceIntroElementRendering();


