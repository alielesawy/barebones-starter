import fs from 'fs';
import path from 'path';

const directoryPath = './src/content/blog'; // Adjust this path as necessary

// Function to check if frontmatter is formatted
const isFormatted = (frontmatter) => {
  const formattedRegex = /^title: '.*'\ndescription: '.*'\npubDate: '.*'\nheroImage: '.*'\ncategory: '.*'\ntags: \[.*\]$/m;
  return formattedRegex.test(frontmatter);
};

// Function to format frontmatter
const formatFrontmatter = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const parts = content.split(/---\s*\n/);

  if (parts.length < 3) {
    console.log(`Invalid format in file: ${filePath}`);
    return;
  }

  let frontmatter = parts[1].trim();

  // Check if already formatted
  if (isFormatted(frontmatter)) {
    console.log(`File is already formatted: ${filePath}`);
    return;
  }

  // Format the frontmatter correctly
  const formattedFrontmatter = frontmatter
    // Add single quotes around unquoted values but only if not already quoted
    .replace(/(\w+):\s*([^'\n]+)/g, (match, key, value) => {
      if (!value.startsWith("'") && !value.endsWith("'")) {
        return `${key}: '${value.trim()}'`; // Add quotes only if not present
      }
      return `${key}: ${value.trim()}`; // Leave as is if already quoted
    })
    // Format the tags array
    .replace(/tags:\s*\[?(.*?)\]?/gs, (match, p1) => {
      // Split tags by newlines or commas, clean spaces, and remove any extra characters
      const tagsArray = p1.split(/[\n,]+/)
        .map(tag => tag.replace(/^-/, '').trim()) // Remove leading hyphens and trim spaces
        .filter(tag => tag.length > 0) // Remove empty strings
        .map(tag => tag.replace(/,$/, '').trim()) // Remove trailing commas and trim spaces
        .map(tag => tag.toLowerCase()) // Optional: lowercase tags
        .map(tag => `'${tag}'`); // Wrap each tag in single quotes

      // Return formatted tags array
      return `tags: [${tagsArray.join(', ')}]`; 
    })
    // Ensure each field is on a new line
    .replace(/\n+/g, '\n')
    .replace(/\n\s+/g, '\n'); // Remove any extra space after newlines

  // Combine formatted frontmatter and content
  const newContent = `---\n${formattedFrontmatter}\n---\n${parts.slice(2).join('---\n')}`;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Formatted file: ${filePath}`);
};

// Read the directory and format files
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.mdx')) {
      formatFrontmatter(path.join(directoryPath, file));
    }
  });
});
