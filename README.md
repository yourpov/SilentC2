<!-- Based on Fun ways to animate CSS gradients by Kevin Powell (2019)
see: https://www.youtube.com/watch?v=f3mwKLXpOLk -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Coming Soon</title>
  </head>
  <body>
    <div class="container">
      <h1 class="title">Silent C2 / Coming Soon</h1>
      <button id="early-access-btn" class="btn">Early Access</button>
    </div>

    <script>
      const earlyAccessButton = document.getElementById("early-access-btn");

      earlyAccessButton.addEventListener("click", function() {
        window.location.href = "SOON.md";
      });
    </script>
  </body>
</html>
