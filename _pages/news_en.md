---
layout: archive
title: "News & Opportunities"
permalink: /en/news/
author_profile: false
---

{% include base_path %}

<!-- 
================================================================================
// STYLES FOR THE DUAL-COLUMN LAYOUT (NEWS & CONTACT)
// Science & Engineering Theme: Clean, structured, blue/gray palette.
// All class names and variables are in English.
================================================================================
-->
<style>
  /* Define CSS variables for easy theming */
  :root {
    --sci-theme-blue: #0056b3;
    --sci-theme-blue-light: #58a6ff;
    --sci-theme-gray: #6c757d;
    --card-border-light: #e9ecef;
    --card-bg-light: #ffffff;
    --card-shadow-light: rgba(0, 8, 16, 0.05);

    --card-border-dark: #495057;
    --card-bg-dark: #212529;
    --card-shadow-dark: rgba(0, 0, 0, 0.2);
  }

  /* Main container for the two columns */
  .dual-column-container {
    display: flex;
    gap: 2rem; /* Space between the columns */
    align-items: stretch; /* Makes columns of equal height */
  }

  /* Shared style for both News and Contact cards */
  .info-card {
    flex: 1; /* Each card takes up equal space */
    min-width: 0; /* Prevents flexbox overflow */
    background-color: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px var(--card-shadow-light);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  /* Card titles */
  .info-card h3 {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--card-border-light);
    color: var(--sci-theme-blue);
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* --- NEWS CARD SPECIFIC STYLES --- */
  
  /* The container that will have the scrollbar */
  .news-scroll-box {
    height: 100%; /* Fixed height is required for scrolling */
    overflow-y: auto; /* Show scrollbar only when content overflows */
    padding-right: 15px; /* Space for the scrollbar */
    margin-right: -15px; /* Hides the extra space if no scrollbar */
  }

  .news-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .news-list li {
    display: flex;
    align-items: flex-start;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    line-height: 1.6;
    border-bottom: 1px solid var(--card-border-light);
  }

  .news-list li:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .news-icon {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    background-color: var(--sci-theme-blue);
    border-radius: 50%;
    margin-right: 1rem;
    margin-top: 0.5em;
  }
  
  .news-date {
    font-weight: 600;
    color: var(--sci-theme-blue);
    margin-right: 0.5em;
  }
  
  /* Custom scrollbar for a cleaner look */
  .news-scroll-box::-webkit-scrollbar {
    width: 6px;
  }
  .news-scroll-box::-webkit-scrollbar-track {
    background: transparent;
  }
  .news-scroll-box::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 3px solid transparent;
  }

  /* --- CONTACT CARD SPECIFIC STYLES --- */
  .contact-content {
    flex-grow: 1;
    line-height: 1.7;
  }
  
  .join-us-title {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--sci-theme-blue);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  /* --- DARK MODE STYLES --- */
  html[data-theme="dark"] .info-card {
    background-color: var(--card-bg-dark);
    border-color: var(--card-border-dark);
    box-shadow: 0 4px 12px var(--card-shadow-dark);
  }

  html[data-theme="dark"] .info-card h3,
  html[data-theme="dark"] .news-date,
  html[data-theme="dark"] .join-us-title {
    color: var(--sci-theme-blue-light);
  }
  
  html[data-theme="dark"] .info-card h3 {
    border-bottom-color: var(--card-border-dark);
  }

  html[data-theme="dark"] .news-list li {
    border-bottom-color: var(--card-border-dark);
  }

  html[data-theme="dark"] .news-icon {
    background-color: var(--sci-theme-blue-light);
  }

  html[data-theme="dark"] .news-scroll-box::-webkit-scrollbar-thumb {
    background-color: #555;
  }

  /* --- RESPONSIVE DESIGN for mobile --- */
  @media (max-width: 900px) {
    .dual-column-container {
      flex-direction: column; /* Stack columns vertically */
    }
    .news-scroll-box {
      height: auto; /* Remove fixed height */
      max-height: 400px; /* Set a max-height instead */
    }
  }
</style>

<!-- 
================================================================================
// HTML LAYOUT STARTS HERE
// A two-column container for News and Contact information.
================================================================================
-->

<div class="dual-column-container">

  <!-- Left Column: News -->
  <div class="info-card">
    <h3>News</h3>
    <div class="news-scroll-box">
      <ul class="news-list">
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Oct:</span>Congratulations to Mujilong, whose paper has been accepted by <em>Molecular Diversity</em>.</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Oct:</span>Our 2024-class graduate students will attend the National Conference on Bioinformatics in Nanning.</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Sep:</span>Welcome Yang Anqi, an exchange student from Gansu University of Chinese Medicine, to our group.</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Aug:</span>Congratulations on the successful publication of the VARIDT database paper.</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Aug:</span>A warm welcome to two new members of the 2025 class joining our research group.</div>
        </li>
        <!-- Add more news items here -->
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025 Jul:</span>Our lab received a new grant to study computational drug discovery.</div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Right Column: Contact & Opportunities -->
<!-- Right Column: Contact & Opportunities -->
  <div class="info-card">
    <h3>Contact & Opportunities</h3>
    <div class="contact-content">
      <p class="join-us-title">
        <!-- Font Awesome icon is unchanged -->
        <i class="fas fa-users" style="margin-right: 0.75em;"></i>
        Join us!
      </p>
      <p>
        We are looking for passionate graduate and undergraduate students in bioinformatics or computational biology to develop together.
      </p>
      <p>
        If you are interested in our research areas, please do not hesitate to contact us.
      </p>
      <hr style="border-top: 1px solid var(--card-border-light); margin: 1.5rem 0;">
      <p>
        <!-- Font Awesome icon is unchanged -->
        <i class="fas fa-envelope" style="margin-right: 0.5em;"></i>
        <strong>Email:</strong> liyinghong@cqupt.edu.cn
      </p>
      <p>
        <!-- Font Awesome icon is unchanged -->
        <i class="fas fa-map-marker-alt" style="margin-right: 0.5em;"></i>
        <strong>Address:</strong> Room 402, Building 1, School of Bioinformatics, Chongqing University of Posts and Telecommunications
      </p>
    </div>
  </div>

</div>