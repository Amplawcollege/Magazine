<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JURIS E-Magazine — AMPLC</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="data:,">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">

  <!-- jQuery FIRST -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- PDF.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
  <!-- Turn.js (pinned version) -->
  <script src="https://cdn.jsdelivr.net/npm/turn.js@4.1.0/turn.min.js"></script>
</head>
<body>

  <header>
    <div class="logo">
      <span class="logo-amp">AMPLC</span>
      <span class="logo-sep">|</span>
      <span class="logo-juris">JURIS</span>
    </div>
    <p class="tagline">Legal Magazine &mdash; Vol. 1</p>
  </header>

  <div class="controls">
    <button onclick="prevPage()" aria-label="Previous page">&#8592; Prev</button>
    <span id="page-num" class="page-indicator">Page 1</span>
    <button onclick="nextPage()" aria-label="Next page">Next &#8594;</button>
    <span class="divider"></span>
    <button onclick="zoomOut()" aria-label="Zoom out">&#8722; Zoom</button>
    <button onclick="zoomIn()" aria-label="Zoom in">&#43; Zoom</button>
    <button onclick="goFullscreen()" aria-label="Fullscreen">&#9974; Full</button>
    <a id="downloadBtn" href="magazine.pdf" download="JURIS-Vol1.pdf" aria-label="Download PDF">&#8595; Download</a>
  </div>

  <!-- Loading state -->
  <div id="loadingMsg">
    <div class="spinner"></div>
    <p>Loading magazine&hellip;</p>
  </div>

  <!-- Error state -->
  <div id="errorMsg" style="display:none;">
    <p>&#9888; Could not load the magazine. Please check your connection and try again.</p>
    <button onclick="location.reload()">Retry</button>
  </div>

  <!-- Rotate message (portrait mobile) -->
  <div id="rotateMsg" aria-live="polite">
    <div class="rotate-inner">
      <div class="rotate-icon">&#8635;</div>
      <p>Rotate to landscape for the best experience</p>
    </div>
  </div>

  <main>
    <div id="flipbook"></div>
  </main>

  <audio id="flipSound" src="flip.mp3" preload="auto"></audio>

  <script src="script.js"></script>
</body>
</html>
