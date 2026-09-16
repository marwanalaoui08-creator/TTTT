<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <h1 id="app-logo" title="Click 10 times for secret gateway">LEAGUE ADMIN PORTAL</h1>
    </header>

    <div class="dashboard-layout">
      <!-- Sidebar Navigation -->
      <nav class="sidebar">
        <button class="nav-btn active" data-tab="security">Security</button>
        <button class="nav-btn" data-tab="ai-manager">AI Manager</button>
        <button class="nav-btn" data-tab="cinematic">Cinematic Intro</button>
        <button class="nav-btn" data-tab="content">Content Manager</button>
        <button class="nav-btn" data-tab="homepage">Homepage Architecture</button>
        <button class="nav-btn" data-tab="navigation">Navigation Manager</button>
      </nav>

      <!-- Main Content Area -->
      <main class="content-area">
        <!-- 1. Executive Security Tab -->
        <section id="security" class="tab-pane active">
          <h2>Executive Security Settings</h2>
          <form id="password-form" class="form-group">
            <h3>Update Executive Password</h3>
            <div id="security-message" class="message-box hidden"></div>
            <div class="field">
              <label for="new-pass">New Password</label>
              <input type="password" id="new-pass" placeholder="Enter new password" required>
            </div>
            <div class="field">
              <label for="confirm-pass">Confirm Password</label>
              <input type="password" id="confirm-pass" placeholder="Confirm new password" required>
            </div>
            <button type="submit" class="btn primary">Update Password</button>
          </form>

          <div class="secret-guide">
            <h3>Secret Executive Gateway Guide</h3>
            <p>To access the secret executive portal, click the primary application logo <strong>10 times consecutively</strong>. This secret gateway allows quick bypass authentication for authorized system administrators.</p>
          </div>
        </section>

        <!-- 2. AI Manager Tab -->
        <section id="ai-manager" class="tab-pane">
          <h2>AI Management Console</h2>
          <form id="ai-command-form" class="form-group">
            <label for="ai-input">Natural Language AI Command</label>
            <div class="input-inline">
              <input type="text" id="ai-input" placeholder="e.g., Generate summary for top 5 scorers...">
              <button type="submit" class="btn primary">Execute Command</button>
            </div>
          </form>

          <div class="button-group">
            <button id="btn-ai-report" class="btn success">Generate AI Match Report</button>
            <button id="btn-ai-ideas" class="btn purple">Generate Expansion Ideas</button>
          </div>

          <div class="console-box">
            <h4>AI Output Log</h4>
            <pre id="ai-output">No active output.</pre>
          </div>
        </section>

        <!-- 3. Cinematic Intro Tab -->
        <section id="cinematic" class="tab-pane">
          <h2>Cinematic Intro Settings</h2>
          <div class="grid-2col">
            <div class="form-group">
              <div class="field">
                <label for="bg-url">4K Background Video/Image URL</label>
                <input type="text" id="bg-url" placeholder="https://example.com/media.jpg">
              </div>
              <div class="field">
                <label for="overlay-text">Custom Overlay Text</label>
                <input type="text" id="overlay-text" value="WELCOME TO THE LEAGUE">
              </div>
              <div class="field">
                <label for="audio-vol">Audio Volume (<span id="vol-display">80</span>%)</label>
                <input type="range" id="audio-vol" min="0" max="100" value="80">
              </div>
            </div>

            <div class="preview-container">
              <label>Interactive Live Preview</label>
              <div id="preview-box" class="preview-box">
                <h1 id="preview-title">WELCOME TO THE LEAGUE</h1>
              </div>
            </div>
          </div>
        </section>

        <!-- 4. Content Manager Tab -->
        <section id="content" class="tab-pane">
          <h2>CMS & Editorial Manager</h2>
          <form id="cms-form" class="form-group">
            <div class="field">
              <label for="cms-title">Title</label>
              <input type="text" id="cms-title" placeholder="Headline title" required>
            </div>
            <div class="field">
              <label for="cms-category">Category</label>
              <select id="cms-category">
                <option value="News Bulletin">News Bulletin</option>
                <option value="Regulation">Regulation</option>
                <option value="Media Photo Studio">Media Photo Studio</option>
              </select>
            </div>
            <div class="field">
              <label for="cms-caption">Caption / Summary</label>
              <textarea id="cms-caption" rows="3" placeholder="Write content details..."></textarea>
            </div>
            <button type="submit" class="btn primary">Publish Article</button>
          </form>

          <div class="published-list-container">
            <h3>Published Items</h3>
            <div id="published-items" class="items-list">
              <p class="empty-text">No items published yet.</p>
            </div>
          </div>
        </section>

        <!-- 5. Homepage Manager Tab -->
        <section id="homepage" class="tab-pane">
          <h2>Homepage Architecture</h2>
          <div class="form-group">
            <div class="field">
              <label for="banner-text">Custom Spotlight Banner Text</label>
              <input type="text" id="banner-text" placeholder="e.g., Finals Registration Now Open!">
            </div>
          </div>

          <div class="layout-list-container">
            <h3>Section Layout & Priority</h3>
            <div id="homepage-sections" class="items-list"></div>
          </div>
        </section>

        <!-- 6. Navigation Manager Tab -->
        <section id="navigation" class="tab-pane">
          <h2>Navigation Manager</h2>
          <div class="layout-list-container">
            <div id="nav-items" class="items-list"></div>
          </div>
        </section>
      </main>
    </div>
  </div>

  <script src="app.js"></script>
</body>
 box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background-color: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.app-container {
  width: 100%;
  max-width: 1100px;
  background-color: #1e293b;
  border-radius: 12px;
  border: 1px solid #334155;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.app-header {
  padding: 20px;
  background-color: #0f172a;
  border-bottom: 1px solid #334155;
}

.app-header h1 {
  font-size: 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
  display: inline-block;
}

.dashboard-layout {
  display: flex;
  min-height: 600px;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background-color: #0f172a;
  border-right: 1px solid #334155;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
}

.nav-btn {
  background: none;
  border: none;
  color: #94a3b8;
  padding: 12px 16px;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-btn:hover {
  background-color: #1e293b;
  color: #f8fafc;
}

.nav-btn.active {
  background-color: #4f46e5;
  color: #ffffff;
}

/* Main Content */
.content-area {
  flex: 1;
  padding: 30px;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid #334155;
  padding-bottom: 10px;
}

h3 {
  font-size: 1.1rem;
  color: #cbd5e1;
  margin-bottom: 12px;
}

/* Form Styles */
.form-group {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 0.875rem;
  color: #94a3b8;
}

input[type="text"],
input[type="password"],
select,
textarea {
  background-color: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
  outline: none;
}

input:focus, select:focus, textarea:focus {
  border-color: #6366f1;
}

.input-inline {
  display: flex;
  gap: 10px;
}

.input-inline input {
  flex: 1;
}

/* Buttons */
.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.primary { background-color: #4f46e5; color: white; }
.success { background-color: #059669; color: white; }
.purple { background-color: #9333ea; color: white; }

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

/* Utilities */
.message-box {
  padding: 10px;
  border-radius: 6px;
  background-color: #312e81;
  color: #c7d2fe;
  font-size: 0.875rem;
  border: 1px solid #4338ca;
}

.hidden { display: none; }

.secret-guide {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #334155;
  font-size: 0.875rem;
  color: #94a3b8;
}

/* Console & Preview */
.console-box {
  background-color: #020617;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 15px;
  min-height: 100px;
}

.console-box h4 {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 8px;
}

pre {
  font-family: monospace;
  color: #cbd5e1;
  white-space: pre-wrap;
}

.grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.preview-box {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #020617;
  border: 1px solid #334155;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 10px;
}

.preview-box h1 {
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

/* Dynamic Item Lists */
.items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 500px;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f172a;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #334155;
}

.list-item.hidden-item span {
  text-decoration: line-through;
  color: #64748b;
}

.action-btns {
  display: flex;
  gap: 6px;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #334155;
  color: white;
}

.btn-status {
  background-color: #064e3b;
  color: #34d399;
  border: 1px solid #047857;
}

.btn-status.off {
  background-color: #334155;
  color: #94a3b8;
  border: none;
}

.cms-card {
  background-color: #0f172a;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #334155;
}

.cms-card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  background-color: #312e81;
  color: #c7d2fe;
  border-radius: 4px;
}

.empty-text {
  color: #64748b;
  font-size: 0.875rem;
}
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Routing Logic
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      navButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // 1. Executive Security Logic
  let logoClicks = 0;
  const logo = document.getElementById('app-logo');
  const passwordForm = document.getElementById('password-form');
  const securityMsg = document.getElementById('security-message');

  logo.addEventListener('click', () => {
    logoClicks++;
    if (logoClicks >= 10) {
      alert('Secret Executive Gateway Unlocked!');
      logoClicks = 0;
    }
  });

  passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPass = document.getElementById('new-pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;

    if (newPass !== confirmPass) {
      securityMsg.textContent = 'Passwords do not match.';
      securityMsg.classList.remove('hidden');
      return;
    }

    securityMsg.textContent = 'Admin password updated successfully!';
    securityMsg.classList.remove('hidden');
    passwordForm.reset();
  });

  // 2. AI Manager Logic
  const aiForm = document.getElementById('ai-command-form');
  const aiInput = document.getElementById('ai-input');
  const aiOutput = document.getElementById('ai-output');

  aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = aiInput.value.trim();
    if (!cmd) return;
    
    aiOutput.textContent = 'Processing request...';
    setTimeout(() => {
      aiOutput.textContent = `Processed AI Command: "${cmd}". Optimization complete.`;
    }, 800);
  });

  document.getElementById('btn-ai-report').addEventListener('click', () => {
    aiOutput.textContent = 'Generating AI Sports Report...';
    setTimeout(() => {
      aiOutput.textContent = 'AI Sports Report: High-intensity match with tactical setups leading to key breakthroughs late in the second half.';
    }, 800);
  });

  document.getElementById('btn-ai-ideas').addEventListener('click', () => {
    aiOutput.textContent = 'Generating Expansion Ideas...';
    setTimeout(() => {
      aiOutput.textContent = "Expansion Ideas:\n1. 64-team single elimination knockout format.\n2. Regional group stage bracket expansion.";
    }, 800);
  });

  // 3. Cinematic Intro Logic
  const bgUrlInput = document.getElementById('bg-url');
  const overlayInput = document.getElementById('overlay-text');
  const audioVolInput = document.getElementById('audio-vol');
  const volDisplay = document.getElementById('vol-display');
  const previewBox = document.getElementById('preview-box');
  const previewTitle = document.getElementById('preview-title');

  bgUrlInput.addEventListener('input', (e) => {
    const url = e.target.value;
    previewBox.style.backgroundImage = url ? `url('${url}')` : 'none';
  });

  overlayInput.addEventListener('input', (e) => {
    previewTitle.textContent = e.target.value || 'YOUR TITLE';
  });

  audioVolInput.addEventListener('input', (e) => {
    volDisplay.textContent = e.target.value;
  });

  // 4. Content Manager Logic
  const cmsForm = document.getElementById('cms-form');
  const publishedList = document.getElementById('published-items');

  cmsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('cms-title').value;
    const category = document.getElementById('cms-category').value;
    const caption = document.getElementById('cms-caption').value;

    const emptyText = publishedList.querySelector('.empty-text');
    if (emptyText) emptyText.remove();

    const card = document.createElement('div');
    card.className = 'cms-card';
    card.innerHTML = `
      <div class="cms-card-header">
        <strong>${title}</strong>
        <span class="badge">${category}</span>
      </div>
      <p style="font-size:0.875rem; color:#94a3b8;">${caption}</p>
    `;

    publishedList.prepend(card);
    cmsForm.reset();
  });

  // 5. Section Reordering Manager Engine
  function createManagerList(containerId, initialData) {
    let items = [...initialData];
    const container = document.getElementById(containerId);

    function render() {
      container.innerHTML = '';
      items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `list-item ${item.visible ? '' : 'hidden-item'}`;
        div.innerHTML = `
          <span>${item.name}</span>
          <div class="action-btns">
            <button class="btn-sm btn-status ${item.visible ? '' : 'off'}">${item.visible ? 'Visible' : 'Hidden'}</button>
            <button class="btn-sm btn-up" ${index === 0 ? 'disabled' : ''}>↑</button>
            <button class="btn-sm btn-down" ${index === items.length - 1 ? 'disabled' : ''}>↓</button>
          </div>
        `;

        div.querySelector('.btn-status').addEventListener('click', () => {
          items[index].visible = !items[index].visible;
          render();
        });

        div.querySelector('.btn-up').addEventListener('click', () => {
          if (index > 0) {
            [items[index - 1], items[index]] = [items[index], items[index - 1]];
            render();
          }
        });

        div.querySelector('.btn-down').addEventListener('click', () => {
          if (index < items.length - 1) {
            [items[index + 1], items[index]] = [items[index], items[index + 1]];
            render();
          }
        });

        container.appendChild(div);
      });
    }

    render();
  }

  // Initialize Homepage Sections
  createManagerList('homepage-sections', [
    { name: 'Spotlight Banner', visible: true },
    { name: 'Fixtures & Results', visible: true },
    { name: 'League Standings', visible: true },
    { name: 'Top Scorers', visible: true }
  ]);

  // Initialize Navigation Links
  createManagerList('nav-items', [
    { name: 'Home', visible: true },
    { name: 'Fixtures', visible: true },
    { name: 'Standings', visible: true },
    { name: 'Stats', visible: true },
    { name: 'Media', visible: false }
  ]);
});
      
