// js/commit.js
async function loadCommitHash() {
  try {
    const repo = "AnuradhaVIyer/mini_finance"; // change this
    const response = await fetch(`https://api.github.com/repos/${repo}/commits/feature-anuradha-iyer`);

    if (!response.ok) throw new Error("Failed to fetch commit");

    const data = await response.json();
    const shortHash = data.sha.substring(0, 7);

    const versionEl = document.getElementById("version-text");
    if (versionEl) {
      versionEl.innerHTML += ` (rev: ${shortHash})`;
    }
  } catch (err) {
    console.error("Error fetching commit hash:", err);
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadCommitHash);
