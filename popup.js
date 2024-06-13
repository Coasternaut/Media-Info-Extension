var enableCheckbox = document.querySelector("#enableCheckbox");

enableCheckbox.addEventListener('change', () => {
    chrome.tabs.query({active: true, currentWindow: true}, sendMessage);
    function sendMessage(tabs) {
        let msg = enableCheckbox.checked
        chrome.tabs.sendMessage(tabs[0].id, msg)
    }
})