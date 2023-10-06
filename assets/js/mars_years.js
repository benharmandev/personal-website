document.addEventListener("DOMContentLoaded", function () {
    // Constants
    const MARTIAN_DAYS = 687;
    const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000; // 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
    const MARTIAN_YEAR_DURATION = MARTIAN_DAYS * MILLISECONDS_IN_DAY;

    // Function to calculate Martian age
    function calculateMartianYears() {
        // Get the current time
        const now = new Date();

        // Get the reference time: 11pm June 28 2001
        const referenceDate = new Date(2001, 5, 28, 23, 0, 0, 0); // Note: Months in JavaScript are 0-indexed, so June is 5.

        // Calculate time difference in milliseconds
        const timeDifference = now - referenceDate;

        // Calculate martian age
        const martianYears = timeDifference / MARTIAN_YEAR_DURATION;

        // Get the element by ID and update its text content
        document.getElementById('martianYears').textContent = martianYears.toFixed(8);
    }

    // Calculate Martian age immediately when the script runs
    calculateMartianYears();

    // Set interval to recalculate every 10 seconds
    setInterval(calculateMartianYears, 1000); // 10 seconds = 10,000 milliseconds
});