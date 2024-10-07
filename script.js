    // Set the initial time for the countdown (in seconds)
    let totalTime = (9 * 60 * 60) + (56 * 60) + 11;

    // Function to start the countdown
    function startCountdown() {
        const interval = setInterval(() => {
            // Calculate hours, minutes, and seconds
            const hours = Math.floor(totalTime / 3600);
            const minutes = Math.floor((totalTime % 3600) / 60);
            const seconds = totalTime % 60;

            // Update the HTML elements with new values
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

            // Decrement total time by one second
            totalTime--;

            // Stop the countdown when time runs out
            if (totalTime < 0) {
                clearInterval(interval);
                alert("Countdown finished!");
            }
        }, 1000);
    }

    // Start the countdown when the page loads
    startCountdown();


    $('.product-image-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            
            },
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            
            }




        ]
    });

    // news and blogs

    $('.news-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            
            },
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            
            }




        ]
    });