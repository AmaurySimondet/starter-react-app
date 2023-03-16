// This function will scroll the window to the top 
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
    });
};



// Function to update the countdown element every second
function updateCountdown() {
    // Get the current time
    const now = new Date();
    // Set the target date to count down to (year, month (0-based), day, hour, minute, second)
    const targetDate = new Date(2024, 6, 8, 15, 30, 0);

    // Calculate the time remaining until the target date
    const timeRemaining = targetDate.getTime() - now.getTime();

    // Calculate the days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // If the target date has passed, stop updating the countdown
    if (timeRemaining <= 0) {
        return 'Terminé !';
    }

    return `${days}j ${hours}h ${minutes}m ${seconds}s`;

}

function scrollTo(id) {
    return () =>
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


export { scrollToTop, updateCountdown, scrollTo };