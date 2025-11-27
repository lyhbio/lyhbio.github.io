---
layout: archive
title: "新闻与动态"
permalink: /news/
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
    <h3>课题组新闻</h3>
    <div class="news-scroll-box">
      <ul class="news-list">
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年10月:</span>恭喜牟桔隆论文已被 <em>Molecular Diversity</em> 接收。</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年10月:</span>24级研究生将前往南宁参加全国生物信息学大会。</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年9月:</span>欢迎甘肃中医药大学交流生杨安琪加入课题组。</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年8月:</span>恭喜 VARIDT 数据库网站论文成功发表。</div>
        </li>
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年8月:</span>热烈欢迎25级两名新成员加入我们课题组。</div>
        </li>
        <!-- 在此处添加更多新闻条目 -->
        <li>
          <span class="news-icon"></span>
          <div><span class="news-date">2025年7月:</span>实验室获得一项关于计算药物发现的新基金资助。</div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Right Column: Contact & Opportunities -->
  <div class="info-card">
    <h3>联系我们 & 加入我们</h3>
    <div class="contact-content">
      <p class="join-us-title">
        <!-- 假设您已安装 Font Awesome -->
        <i class="fas fa-users" style="margin-right: 0.75em;"></i>
        加入我们！
      </p>
      <p>
        我们正在寻找对生物信息学或计算生物学充满热情的研究生和本科生共同发展。
      </p>
      <p>
      招生计划：2-3人/年
      </p>
      <p>
        如果您对我们的研究方向感兴趣，请随时联系我们。
      </p>
      <hr style="border-top: 1px solid var(--card-border-light); margin: 1.5rem 0;">
      <p>
        <!-- 假设您已安装 Font Awesome -->
        <i class="fas fa-envelope" style="margin-right: 0.5em;"></i>
        <strong>电子邮箱:</strong> liyinghong@cqupt.edu.cn
      </p>
      <p>
        <i class="fas fa-map-marker-alt" style="margin-right: 0.5em;"></i>
        <strong>通讯地址:</strong> 重庆邮电大学生物信息学院1号楼402
      </p>
    </div>
  </div>

</div>