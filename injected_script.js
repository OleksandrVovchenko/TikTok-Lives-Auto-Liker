let likerIntervalId = null;
let isLikerRunning = false;

function simulateKeyPressL() {
    const event = new KeyboardEvent('keydown', {
        key: 'l',
        code: 'KeyL',
        keyCode: 76,
        which: 76,
        bubbles: true
    });

    document.body.dispatchEvent(event);
}

window.startTikTokLiker = function() {
    if (isLikerRunning) {
        console.log('TikTok Auto Liker: Already running.');
        return;
    }

    isLikerRunning = true;
    likerIntervalId = setInterval(simulateKeyPressL, 100);

    console.log('TikTok Auto Liker: Started! Type stopTikTokLiker() to stop.');
};

window.stopTikTokLiker = function() {
    if (!isLikerRunning) {
        console.log('TikTok Auto Liker: Not running.');
        return;
    }

    clearInterval(likerIntervalId);
    likerIntervalId = null;
    isLikerRunning = false;

    console.log('TikTok Auto Liker: Stopped.');
};

console.log('TikTok Auto Liker: injected_script.js is active. Use startTikTokLiker() and stopTikTokLiker() in console.');
