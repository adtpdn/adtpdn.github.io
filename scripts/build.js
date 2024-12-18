const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const prism = require('prismjs');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-python');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');
require('prismjs/components/prism-markdown');

// Configure marked with syntax highlighting and other features
marked.use({
    mangle: false,
    headerIds: false,
    gfm: true,
    breaks: true,
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
        if (lang && prism.languages[lang]) {
            return prism.highlight(code, prism.languages[lang], lang);
        }
        return code;
    }
});

const CONFIG = {
    postsDir: path.join(__dirname, '..', '_gallery'),
    postsOutputDir: path.join(__dirname, '..', 'g'),
    galleryJsPath: path.join(__dirname, '..', 'assets', 'js', 'gallery.js'),
};

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Generate /g/*

function generatePostPage(post) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>@ADTPDN - ${post.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe.css">
    <style>
        * {
            font-family: 'JetBrains Mono', monospace;
            -webkit-text-size-adjust: 100%;
        }
        .pswp {
            --pswp-bg: #000000;
        }
        .gallery-item {
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .gallery-item:hover {
            opacity: 0.85;
        }
        .prose a {
            color: rgb(59 130 246);
            text-decoration: none;
            transition: opacity 0.2s;
        }
        .prose a:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
        .prose a:visited {
            color: rgb(59 130 246);
        }
        @media (max-width: 640px) {
            .prose h1 {
                font-size: 1.875rem;
                line-height: 2.25rem;
            }
            .prose h2 {
                font-size: 1.5rem;
                line-height: 2rem;
            }
            .prose h3 {
                font-size: 1.25rem;
                line-height: 1.75rem;
            }
            .prose p {
                font-size: 0.875rem;
                line-height: 1.5rem;
            }
            .prose a {
                word-break: break-word;
            }
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
    <nav class="bg-white shadow-lg fixed w-full z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="/" class="flex items-center">
                        <span class="font-semibold text-gray-500 text-base sm:text-lg">@ADTPDN</span>
                    </a>
                </div>
                <div class="flex items-center space-x-1">
                    <a href="/" class="px-2 py-2 sm:py-4 hover:text-blue-500 text-sm sm:text-base">/Dev</a>
                    <a href="/gallery" class="px-2 py-2 sm:py-4 text-blue-500 text-sm sm:text-base">/Design</a>
                </div>
            </div>
        </div>
    </nav>

    <main class="w-full max-w-4xl mx-auto pt-16 sm:pt-20 px-4 pb-8 flex-grow">
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-4 sm:p-6">
                <h1 class="text-2xl sm:text-3xl font-bold mb-4">${post.title}</h1>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-xs sm:text-sm">
                        ${post.category}
                    </span>
                    ${post.tags.map(tag => `
                        <span class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-xs sm:text-sm">
                            ${tag}
                        </span>
                    `).join('')}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-6">
                    ${post.images.map((image, index) => `
                        <figure class="gallery-item relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                            <img src="${image.url}" 
                                 alt="${image.caption || ''}"
                                 class="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                 loading="lazy">
                        </figure>
                    `).join('')}
                </div>

                <div class="prose max-w-none text-sm sm:text-base">
                    ${marked.parse(post.content)}
                </div>
            </div>
        </article>

        <div class="mt-6 text-center">
            <a href="/gallery" 
               class="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition-colors">
                Back to Gallery
            </a>
        </div>
    </main>

    <footer class="bg-white mt-auto">
        <div class="max-w-6xl mx-auto px-4 py-4 sm:py-6">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div class="text-xs sm:text-sm text-gray-500">
                    © ${new Date().getFullYear()} ADTPDN. All rights reserved.
                </div>
                <div class="flex space-x-4 sm:space-x-6">
                    <a href="https://github.com/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="mailto:hi@adt.wtf" 
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">Email</span>
                        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <button class="pswp__button pswp__button--share" title="Share"></button>
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>

    <script type="module">
        import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe-lightbox.esm.js'
        import PhotoSwipe from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.8/dist/photoswipe.esm.js'

        // Function to get image dimensions
        async function getImageDimensions(url) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    resolve({
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    });
                };
                img.src = url;
            });
        }

        // Initialize images with dimensions
        async function initPhotoSwipe() {
            const images = ${JSON.stringify(post.images)};
            const imagesWithDimensions = await Promise.all(
                images.map(async (image) => {
                    const dimensions = await getImageDimensions(image.url);
                    return {
                        src: image.url,
                        width: dimensions.width,
                        height: dimensions.height,
                        alt: image.caption || ''
                    };
                })
            );

            const lightbox = new PhotoSwipeLightbox({
                gallery: '.grid',
                children: '.gallery-item',
                pswpModule: PhotoSwipe,
                padding: { top: 0, bottom: 0, left: 0, right: 0 },
                bgOpacity: 0.9,
                showHideAnimationType: 'fade',
                imageClickAction: 'close',
                tapAction: 'close',
                dataSource: imagesWithDimensions,
            });
            
            lightbox.init();

            // Add click event listeners to gallery items
            document.querySelectorAll('.gallery-item').forEach((el, index) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    lightbox.loadAndOpen(index);
                });
            });
        }

        // Start initialization
        initPhotoSwipe();
    </script>
</body>
</html>`;
}

// Generate gallery.html

function generateGalleryPage(posts, categories) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@ADTPDN - Design Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap">
    <style>
        * {
            font-family: 'JetBrains Mono', monospace;
        }
        .prose {
            max-width: 65ch;
            color: #374151;
        }
        .prose h1 {
            font-size: 2.25em;
            margin-top: 0;
            margin-bottom: 0.8888889em;
            line-height: 1.1111111;
        }
        .prose p {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
        }
        .prose img {
            margin-top: 2em;
            margin-bottom: 2em;
        }
        .prose a {
            color: #2563eb;
            text-decoration: underline;
            font-weight: 500;
        }
        #gallery-grid {
            min-height: 200px;
        }
        .aspect-video {
            aspect-ratio: 16 / 9;
        }
        .max-w-6xl {
            width: 100%;
            max-width: 72rem;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
    <nav class="bg-white shadow-lg fixed w-full z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <a href="/" class="flex items-center py-4">
                        <span class="font-semibold text-gray-500 text-lg">@ADTPDN</span>
                    </a>
                </div>
                <div class="flex items-center space-x-1">
                    <a href="/" class="py-4 px-2 hover:text-blue-500">/Dev</a>
                    <a href="/gallery" class="py-4 px-2 text-blue-500">/Design</a>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 pt-20 flex-grow">
        <!-- Category Filter - Now wraps on small screens -->
        <div class="mb-8">
            <div id="category-buttons" class="flex flex-wrap gap-2 px-4">
                <!-- Categories will be inserted here -->
            </div>
        </div>

        <!-- Gallery Grid with bottom margin -->
        <div id="gallery-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <!-- Gallery items will be loaded here -->
        </div>
    </main>

    <footer class="bg-white mt-auto">
        <div class="max-w-6xl mx-auto px-4 py-6">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div class="text-sm text-gray-500">
                    © ${new Date().getFullYear()} ADTPDN. All rights reserved.
                </div>
                <div class="flex space-x-6">
                    <a href="https://github.com/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="mailto:hi@adt.wtf" 
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">Email</span>
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Add the posts and categories data directly to the page
        const posts = ${JSON.stringify(posts)};
        const categories = ${JSON.stringify(Array.from(categories))};
    </script>
    <script src="./assets/js/gallery.js"></script>
</body>
</html>`;
}

// Generate /assets/js/gallery.js

function generateGalleryJs(posts, categories) {
    return `
class GalleryBlog {
    constructor() {
        this.currentCategory = 'all';
        this.posts = ${JSON.stringify(posts)};
        this.categories = ${JSON.stringify(Array.from(categories))};
        this.setupCategories();
        this.renderGallery();
    }

    setupCategories() {
        const container = document.getElementById('category-buttons');
        if (!container) return;

        container.innerHTML = \`
            <button data-category="all" 
                    class="\${this.currentCategory === 'all' ? 
                        'bg-blue-500 text-white' : 
                        'bg-gray-200 text-gray-700'} 
                        px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">
                All
            </button>
            \${this.categories.map(category => \`
                <button data-category="\${category}" 
                        class="\${this.currentCategory === category ? 
                            'bg-blue-500 text-white' : 
                            'bg-gray-200 text-gray-700'} 
                            px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">
                    \${category}
                </button>
            \`).join('')}\`;

        container.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                this.currentCategory = button.dataset.category;
                this.updateActiveCategory();
                this.renderGallery();
            });
        });
    }

    updateActiveCategory() {
        document.querySelectorAll('[data-category]').forEach(button => {
            if (button.dataset.category === this.currentCategory) {
                button.classList.remove('bg-gray-200', 'text-gray-700');
                button.classList.add('bg-blue-500', 'text-white');
            } else {
                button.classList.remove('bg-blue-500', 'text-white');
                button.classList.add('bg-gray-200', 'text-gray-700');
            }
        });
    }

    renderGallery() {
        const container = document.getElementById('gallery-grid');
        if (!container) return;

        const filteredPosts = this.currentCategory === 'all'
            ? this.posts
            : this.posts.filter(post => post.category === this.currentCategory);

        container.innerHTML = filteredPosts.map(post => \`
            <a href="/g/\${post.slug}" class="block hover:shadow-lg transition-shadow duration-300">
                <div class="bg-white rounded-lg overflow-hidden h-full">
                    <div class="aspect-video w-full relative overflow-hidden">
                        <img src="\${post.thumbnail}" 
                             alt="\${post.title}"
                             class="w-full h-full object-cover absolute inset-0"
                             loading="lazy">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold mb-2">\${post.title}</h3>
                        <div class="mt-2 flex flex-wrap gap-1">
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
                                \${post.category}
                            </span>
                            \${post.tags.map(tag => \`
                                <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                                    \${tag}
                                </span>
                            \`).join('')}
                        </div>
                    </div>
                </div>
            </a>
        \`).join('');
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GalleryBlog();
});`;
}


// Generate index.html

function generateIndexPage() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@ADTPDN - Developer Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="./assets/css/style.css">
    <style>
        * {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
    <nav class="bg-white shadow-lg fixed w-full z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <a href="/" class="flex items-center py-4">
                        <span class="font-semibold text-gray-500 text-lg">@ADTPDN</span>
                    </a>
                </div>
                <div class="flex items-center space-x-1">
                    <a href="/" class="py-4 px-2 text-blue-500">/Dev</a>
                    <a href="gallery" class="py-4 px-2 hover:text-blue-500">/Design</a>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 pt-20 flex-grow">
        <section class="mb-8">
            <h2 class="text-3xl font-bold mb-6">GitHub Projects</h2>
            <div id="repo-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Repositories will be loaded here -->
            </div>
        </section>
    </main>

    <footer class="bg-white mt-auto">
        <div class="max-w-6xl mx-auto px-4 py-6">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div class="text-sm text-gray-500">
                    © ${new Date().getFullYear()} ADTPDN. All rights reserved.
                </div>
                <div class="flex space-x-6">
                    <a href="https://github.com/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">GitHub</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/adtpdn" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="mailto:hi@adt.wtf" 
                       class="text-gray-500 hover:text-gray-700 transition-colors">
                        <span class="sr-only">Email</span>
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <script src="/env-config.js"></script>
    <script src="./assets/js/github.js"></script>
</body>
</html>`;
}

// Start Build

function build() {

    // Remove existing posts directory if it exists
    if (fs.existsSync(CONFIG.postsOutputDir)) {
        fs.rmSync(CONFIG.postsOutputDir, { recursive: true, force: true });
        console.log('Removed existing posts directory');
    }

    // Ensure output directories exist
    ensureDirectoryExists(CONFIG.postsOutputDir);
    ensureDirectoryExists(path.join(CONFIG.postsOutputDir));
    ensureDirectoryExists(path.dirname(CONFIG.galleryJsPath));

    // Read all posts
    const posts = [];
    const categories = new Set();

    fs.readdirSync(CONFIG.postsDir).forEach(filename => {
        if (!filename.endsWith('.md')) return;

        const filePath = path.join(CONFIG.postsDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // Generate slug if not provided
        const slug = data.slug || generateSlug(data.title);

        // Add category to set
        categories.add(data.category);

        const post = {
            ...data,
            slug,
            content,
        };

        posts.push(post);

        // Create post page
        const postDir = path.join(CONFIG.postsOutputDir, slug);
        ensureDirectoryExists(postDir);
        fs.writeFileSync(
            path.join(postDir, 'index.html'),
            generatePostPage(post)
        );
    });

    // Generate gallery.html
    const galleryHtml = generateGalleryPage(posts, Array.from(categories));
    fs.writeFileSync(path.join(__dirname, '..', 'gallery.html'), galleryHtml);

    // Generate gallery.js
    const galleryJs = generateGalleryJs(posts, Array.from(categories));
    fs.writeFileSync(CONFIG.galleryJsPath, galleryJs);

    // Generate index.html
    const indexHtml = generateIndexPage();
    fs.writeFileSync(path.join(__dirname, '..', 'index.html'), indexHtml);

    console.log(`Built ${posts.length} posts`);
    console.log(`Categories: ${Array.from(categories).join(', ')}`);
}

build();
