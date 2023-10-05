javascript: var fullName = "your name 󱢏";
var firstName = "";
var middleName = "";
var lastName = "your name 󱢏";

alert("code by arnob ");

var spinr = require("SiteData").__spin_r;
var jazoest = require("SprinkleConfig").jazoest;
var fb_dtsg = require("DTSGInitialData").token;
var uid = require("CurrentUserInitialData").ACCOUNT_ID;
var lsd = require("LSD").token;
var s = require("SiteData").s;
var hsi = require("SiteData").hsi;
var dyn = require("SiteData").dyn;
var csr = require("SiteData").csr;
var clientMutationId = "f19ac02d-" + Math.random().toString(36).substr(2, 9);
var url = "https://accountscenter.facebook.com/api/graphql/";
var requestData = {
  av: uid,
  __user: uid,
  __a: 1,
  __req: "1a",
  __hs: "19619.HYP:accounts_center_pkg.2.1..0.0",
  dpr: 1.5,
  __ccg: "EXCELLENT",
  __rev: 1008717767,
  __s: s,
  __hsi: hsi,
  __dyn: dyn,
  __csr: csr,
  __comet_req: 5,
  fb_dtsg: fb_dtsg,
  jazoest: jazoest,
  lsd: lsd,
  __spin_r: spinr,
  __spin_b: "trunk",
  __spin_t: clientMutationId,
  fb_api_caller_class: "RelayModern",
  fb_api_req_friendly_name: "useFXIMUpdateNameMutation",
  variables: JSON.stringify({
    client_mutation_id: clientMutationId,
    family_device_id: "device_id_fetch_datr",
    identity_ids: [uid],
    full_name: fullName,
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    interface: "FB_WEB",
  }),
  server_timestamps: true,
  doc_id: "5763510853763960",
};
var data = Object.keys(requestData)
  .map(function (_0xb28exf) {
    return (
      encodeURIComponent(_0xb28exf) +
      "=" +
      encodeURIComponent(requestData[_0xb28exf])
    );
  })
  .join("&");
fetch(url, {
  method: "POST",
  body: data,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
})
  .then(function (_0xb28ex12) {
    return _0xb28ex12.text();
  })
  .then(function (_0xb28ex11) {
    console.log(_0xb28ex11);
  })
  .catch(function (_0xb28ex10) {
    console.error(_0xb28ex10);
  });
