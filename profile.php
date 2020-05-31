<!DOCTYPE html>
<html>
    <head>
        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165298620-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-165298620-1');
        </script>

        <title>IntelliNote | Custom Sheet Music</title>

        <!-- bulma css -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">

        <!-- font awesome (for icons) -->
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

        <!-- custom css -->
        <link rel="stylesheet" href="assets/css/custom.css">

        <!-- tonejs -->
        <script src="https://unpkg.com/tone@13.8.25/build/Tone.js"></script>

        <!-- Google OAuth -->
          <meta name="google-signin-client_id" content="551645492483-lal6djpa0n6d64u6k2bvqmfvgoverdak.apps.googleusercontent.com">
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
                      <div class="g-signin2" data-onsuccess="onSignIn"></div>
                        <p class="navbar-item has-text-weight-light karla"><a class="has-text-white" href='profile.php?userID="hello@hello.com"'>Profile</a></p>
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
                    Home to <span class="tag is-normal has-text-weight-medium has-text-white gradient karla" id="totalSongs"></span> songs made by people like you.
                </p>
            </div>
        </footer>

        <!-- js files -->
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="assets/js/login.js"></script>
        <script src="assets/js/export.js"></script>
        <script src="assets/js/parseTextFromServer.js"></script>
        <script src="assets/js/displaySongs.js"></script>

        <script>
            window.onload = function () {
                // displaySongs(<?php echo $_GET["userID"] ?>);

                getTotalSongs();
            }
        </script>
    </body>
</html>
