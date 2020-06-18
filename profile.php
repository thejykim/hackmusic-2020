<!DOCTYPE html>
<html>
    <head>
        <title>Profile | IntelliNote</title>

        <!-- bulma css -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">

        <!-- bulma extension - tooltip -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-tooltip@3.0.2/dist/css/bulma-tooltip.min.css">

        <!-- font awesome (for icons) -->
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

        <!-- custom css -->
        <link rel="stylesheet" href="assets/css/custom.css">

        <!-- tonejs -->
        <script src="https://unpkg.com/tone@13.8.25/build/Tone.js"></script>

        <!-- Google OAuth -->
        <meta name="google-signin-client_id" content="551645492483-lal6djpa0n6d64u6k2bvqmfvgoverdak.apps.googleusercontent.com">

        <!-- Hotjar  -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1850543,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
    </head>

    <body>
        <nav class="navbar is-dark navbar-gradient" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <p class="navbar-item is-size-5 poppins" style="font-weight: 600;padding-right:0.3rem"><a
                            class="has-text-white" href="index.html">IntelliNote</a></p>
                    <p class="navbar-item is-size-6 poppins" style="font-weight: 400;padding-left:0px;top:0.1rem">Custom
                        Sheet Music</p>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarMain">

                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>

                <div id="navbarMain" class="navbar-menu">
                    <div class="navbar-start">
                    </div>

                    <div class="navbar-end">
                        <div class="g-signin2" data-theme="dark" data-longtitle="true" data-width="250" data-height="50" data-onsuccess="onSignIn"></div>
                        <p class="navbar-item has-text-weight-light karla is-hidden" id="signOutButton"><a class="has-text-white" href='index.html' onclick="signOut()">Sign Out</a></p>
                        <p class="navbar-item has-text-weight-light karla"><a class="has-text-white" href='profile.php'>Profile</a></p>
                        <p class="navbar-item has-text-weight-light karla"><a class="has-text-white" href="about.html">About us</a></p>
                    </div>
                </div>
        </nav>

        <section class="hero is-light is-medium is-bold">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title poppins" id = "titleName">
                    </h1>
                    <h2 class="subtitle karla">
                    music portfolio
                    </h2>
                </div>
            </div>
        </section>

        <button class="button is-info is-rounded karla gradient" onclick="location.href='https://google.com';" value="Go to Google" />

        <div class="empty-padding"></div>

        <section class="container" id="recentSongs"></section>

        <div class="container empty-padding"><hr></div>

        <section class="container" id="allSongs"></section>

        <div class="empty-padding"></div>

        <!-- footer -->
        <footer class="footer" style="padding-top: 4rem; padding-bottom: 4rem;">
            <div class="content has-text-centered">
                <p class="karla">
                    <b>IntelliNote</b> &copy 2020. Source code available on <a class="has-text-info"
                        href="https://github.com/thejykim/intellinote"><i class="fab fa-github"></i> GitHub</a>. Built
                    with <a class="has-text-info" href="https://tonejs.github.io/">Tone.js</a> and <a class="has-text-info"
                        href="https://bulma.io/">Bulma</a>.
                </p>

                <p class="karla is-inline-block">
                    Home to <span class="tag is-normal has-text-weight-medium has-text-white gradient karla" id="totalSongs">
                        <i class="fas fa-sync-alt fa-pulse"></i>
                    </span> songs made by people like you.
                </p>
                <p class="karla is-size-7"><a class="has-text-info" href="privacy.html">Privacy Policy</a></p>
            </div>
        </footer>

        <!-- js files -->
        <script src="assets/js/globalVars.js"></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="assets/js/login.js"></script>
        <script src="assets/js/userMap.js"></script>
        <script src="assets/js/export.js"></script>
        <script src="assets/js/parseTextFromServer.js"></script>
        <script src="assets/js/displaySongs.js"></script>

        <script>
            window.onload = function () {
                isProfile = true;

                getTotalSongs();
                if (<?php
                        if (isset($_GET["username"])) {
                            echo true;
                        } else {
                            echo "0";
                        }
                    ?> == true) {
                    isVisitor = true;
                    displaySongs(<?php echo $_GET["username"] ?>);
                } else if (email == null) {
                    displaySongs(null);
                }
            }
        </script>

        <!-- cookies -->
        <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
        <script>
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#edeff5",
              "text": "#838391"
            },
            "button": {
              "background": "#4b81e8"
            }
          },
          "theme": "classic",
          "position": "bottom-left",
          "content": {
            "message": "Our login system uses cookies so that you don't have to sign in as often.",
            "dismiss": "Got it!",
            "href": "https://www.thejyk.com/intellinote/privacy.html"
          }
        });
        </script>
    </body>
</html>
