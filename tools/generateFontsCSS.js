import path from 'path';
import fs from 'fs';


// Function to generate CSS for @font-face
function generateFontFace(fontPath, fontName) {
    return `@font-face {
    font-family: '${fontName}';
    src: url('${fontPath}') format('woff2'); /* Update the format if needed */
    font-weight: normal;
    font-style: normal;
}\n`;
}

// Function to scan a directory for font files
function findFonts(directory) {
    const fontFiles = [];
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile() && /\.(woff2|woff|ttf|otf|eot)$/.test(file)) {
            fontFiles.push(filePath);
        } else if (stat.isDirectory()) {
            fontFiles.push(...findFonts(filePath)); // Recursively search subdirectories
        }
    });

    return fontFiles;
}

// Function to generate CSS file
function generateCSS(fontFiles) {
    const cssContent = fontFiles.map(filePath => {
        const fontName = path.basename(filePath, path.extname(filePath));
        //../webfonts/
        //OLD => filePath
        return generateFontFace('../style/webfonts/' + fontName+'.woff2', fontName.toLowerCase());
    }).join('');

    const cssFileName = 'fonts.css';
    fs.writeFileSync('./public/style/' + cssFileName, cssContent);

    console.log(`CSS file generated: ${cssFileName}`);
}

// Specify the directory where your font files are located
const fontDirectory = './public/style/webfonts';

// Find all font files in the specified directory
const fontFiles = findFonts(fontDirectory);

// Generate CSS file with @font-face rules
generateCSS(fontFiles);