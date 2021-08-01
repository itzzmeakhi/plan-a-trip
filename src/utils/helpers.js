export const remainingTime = () => {
    const endTime = new Date('2021', '07', '08', '18', '00');
    const currentTime = new Date();
    const diff = +endTime - +currentTime;

    let timeLeft = {};

    if (diff > 0) {
        timeLeft = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000)
      };
    }
    return timeLeft;
}