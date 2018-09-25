import { charities } from "./charities";

export function getUrlParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export function getDonationTarget(focus) {
  for (let charity of charities) {
    if (focus === charity.shortName) {
      return charity.donateLink;
    }
  }
  return "/donate";
}
