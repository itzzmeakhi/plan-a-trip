export const remainingTime = (currentTime, endTime) => {
    const currentMonth = currentTime.getTime();
    const endMonth = endTime.getTime();

    const monthsRemaining = (endMonth - currentMonth) + 1;

    console.log("=> monthsRe", monthsRemaining)
}