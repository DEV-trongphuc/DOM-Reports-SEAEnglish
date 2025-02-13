const quick_filter = [
  "Lead Form",
  "Message",
  "Awareness",
  "Engagement",
  "Traffic",
  "Pagelike",
];
const goalMapping = {
  "Lead Form": ["LEAD_GENERATION", "QUALITY_LEAD"],
  Message: ["REPLIES"],
  Awareness: ["REACH", "AD_RECALL_LIFT", "IMPRESSIONS"],
  Engagement: ["POST_ENGAGEMENT", "THRUPLAY", "EVENT_RESPONSES"],
  Traffic: [
    "OFFSITE_CONVERSIONS",
    "LINK_CLICKS",
    "PROFILE_VISIT",
    "LADING_PAGE_VIEWS",
  ],
  Pagelike: ["PAGE_LIKES"],
};


const accessToken =
  "EAAc7gNsIj8cBO2pWLpt97kgsyz8asflZA7Smwivuvxi8F203YWDznicZCHghqWUK9G6MKy1EYZBEXxY8zbdHhuGIhp8IwBveusxlJOIxqZAE28DVnfmLl3ejSbZBpxV8dvVJrC6aSAbOpu9oyZAvA64yxXOSu5sYp2EPXBljEHNHfqZB6F1usnQq70zCtZAI3ong"; // Token của bạn
const adAccountId = "1666500787177995"; // ID tài khoản quảng cáo
let oodo_view = false;
const NAME = "SEA English";
const LOGO_ACCOUNT = "./DOM-img/Logo.png";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dom_account_name").textContent = NAME;
  document.querySelector("#dom_account_name_r").textContent = NAME;
  document.querySelector("#dom_account_id").textContent = adAccountId;
  document.querySelector("#dom_account_src").src = LOGO_ACCOUNT;
  document.querySelector("#dom_account_src_r").src = LOGO_ACCOUNT;
  document.title = `${NAME} - Meta Ads Report by DOM Marketing`;
});
