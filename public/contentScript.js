console.log("LinkedIn Time Machine content script loaded");

function extractProfileData() {
  const name = document.querySelector('.pv-top-card--list li:first-child')?.textContent.trim();
  const title = document.querySelector('.pv-top-card--list li:nth-child(2)')?.textContent.trim();
  
  return { name, title };
}

chrome.runtime.sendMessage({ action: "PROFILE_DATA", data: extractProfileData() });
