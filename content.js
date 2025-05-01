const script = document.createElement('script');
script.src = browser.runtime.getURL('injected_script.js');
script.onload = function() {
};
(document.head || document.documentElement).appendChild(script);

console.log('TikTok Auto Liker: injected_script.js loaded.');
