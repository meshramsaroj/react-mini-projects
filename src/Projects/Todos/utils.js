export function getDate() {
  const currentDate = new Date();
  const datetime =
    currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
  return datetime;
}
