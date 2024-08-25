chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "PROFILE_DATA") {
    console.log("Received profile data:", request.data);
    // Store or process the data as needed
  }
});
