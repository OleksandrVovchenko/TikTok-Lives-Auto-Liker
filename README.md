<div align="center">

  <h3 align="center">TikTok Lives Auto Liker</h3>

  <p align="center">
    TikTok Lives Auto Liker (Console Triggered)
    <br />
    <br />
    <br />
    <a href="https://github.com/OleksandrVovchenko/TikTok-Lives-Auto-Liker/issues">Report a bug</a>
    ·
    <a href="https://github.com/OleksandrVovchenko/TikTok-Lives-Auto-Liker/issues">Have an idea?</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project


TikTok Auto Liker (Console Triggered)

Tired of holding down or repeatedly tapping the 'L' key to show your appreciation during TikTok live streams? This simple Firefox extension offers a hands-free way to send likes by simulating the 'L' key press for you!

How it Works:

This add-on runs a script specifically on TikTok live stream pages (tiktok.com/*). When activated, it simulates the keydown event for the 'L' key at a set interval, effectively sending continuous likes as if you were holding the key yourself.

Important Activation Method:

For flexibility and manual control, this extension does not start automatically when you visit a live stream. You must manually trigger it using your browser's developer console.

How to Use:

    Go to a TikTok live stream page in your Firefox browser (the URL should look something like https://www.tiktok.com/...).
    Open your browser's developer tools. The quickest way is usually by pressing the F12 key.
    Navigate to the Console tab within the developer tools.
    Ensure the console context is set to the main page (it might say "Топы" or the page URL, not "Content script" or an iframe context).
    In the console's command line, type the following command exactly as shown and press Enter:
    JavaScript

    startTikTokLiker();

    The extension will immediately begin simulating the 'L' key press at regular intervals. You should see likes being sent!

To Stop Liking:

If you want to stop the automated liking before leaving the page, simply open the console again (if you closed it), type the following command, and press Enter:
JavaScript

stopTikTokLiker();


    Disclaimer: Using automated scripts to interact with websites may violate their Terms of Service, including TikTok's. Use this extension at your own discretion and risk. The developer is not responsible for any consequences resulting from its use.


<!-- LICENSE -->
## License

Distributed under the MAMNC License. See `LICENSE` for more information.


