function getCurrentDate() {
  var today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  // 2021-01-09 format for Coronavirus tracker
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

export default getCurrentDate;