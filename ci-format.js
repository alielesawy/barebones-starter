const { execSync } = require('child_process');

execSync('git pull'); // Get latest commits
execSync('node formatFrontmatter.js'); // Run the format script
execSync('git add .'); // Stage the changes
execSync('git commit -m "Format Tina bot commit"'); // Commit the changes
execSync('git push'); // Push the changes back
