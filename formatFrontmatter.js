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
  const parts = content.split('---').map(part => part.trim());

  if (parts.length < 3) {
    console.log(`Invalid format in file: ${filePath}`);
    return;
  }

  let frontmatter = parts[1];

  // Check if already formatted
  if (isFormatted(frontmatter)) {
    console.log(`File is already formatted: ${filePath}`);
    return;
  }

  // Format the frontmatter correctly
  const formattedFrontmatter = frontmatter
    // Add single quotes around unquoted values but respect already quoted strings
    .replace(/(\w+):\s*([^'\n]+)/g, (match, key, value) => {
      if (value.startsWith("'") && value.endsWith("'")) {
        return `${key}: ${value}`;
      }
      return `${key}: '${value}'`;
    })
    // Ensure tags are formatted as an array of strings
    .replace(/tags:\s*-?\s*(.*)/, (match, tagsContent) => {
      const tagsArray = tagsContent
        .split(',') // Split by comma
        .map(tag => tag.replace(/^-?\s*/, '').trim()) // Remove leading dashes or spaces and trim each tag
        .filter(tag => tag) // Filter out empty strings
        .map(tag => `'${tag.replace(/['"]/g, '')}'`); // Ensure tags are quoted properly and remove any extra quotes
      return `tags: [${tagsArray.join(', ')}]`;
    })
    .replace(/\s*:\s*'/g, ': \'') // Ensure there's no space before the colon in keys
    .replace(/'\s+/g, '\''); // Remove space before closing quote

  // Insert line breaks between each key-value pair
  const fields = formattedFrontmatter.split(/(?<=\])|(?<=\')/g); // Split after the end of tags array or closing quotes
  const formattedWithNewLines = fields
    .map(field => field.trim()) // Trim spaces
    .join('\n'); // Ensure newlines between fields

  // Combine formatted frontmatter and content
  const newContent = `---\n${formattedWithNewLines}\n---\n${parts.slice(2).join('\n---\n')}`;
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
