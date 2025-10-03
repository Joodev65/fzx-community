const axios = require("axios");

const pastebinUrl = "https://pastebin.com/raw/XSaws02b";

let cfg = {
  ownerId: "",
  botToken: ""
};

async function loadConfig() {
  try {
    const { data } = await axios.get(pastebinUrl);

    if (typeof data === "string") {
      cfg = JSON.parse(data);
    } else {
      cfg = data;
    }

    console.log("Config berhasil di-load:", cfg);
  } catch (err) {
    console.error("Gagal ambil config dari Pastebin:", err.message);
  }
}

module.exports = { cfg, loadConfig };