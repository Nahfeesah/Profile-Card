function updateTime() {
    const now = new Date();
   const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    document.querySelector('[data-testid="test-user-time"]').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();