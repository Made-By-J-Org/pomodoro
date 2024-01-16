const formatTime = (seconds: number): string =>
  new Date(seconds * 1000).toLocaleTimeString("en-GB", {
    timeZone:"Etc/UTC",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

export default formatTime;