export function timeElapsed(timestamp) {
  const currentTime = new Date();
  const previousTime = new Date(timestamp);
  const elapsedTime = currentTime - previousTime;

  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  if (minutes < 1) {
    return "now";
  } else if (days > 0) {
    return days + " days ago";
  } else if (hours > 0) {
    return hours + " hours ago";
  } else {
    return minutes + " minutes ago";
  }
}
