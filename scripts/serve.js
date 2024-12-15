require('dotenv').config(); // Add this at the top
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Debug logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Inject environment variables
app.get('/env-config.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.send(`window.process = {
        env: {
            GITHUB_TOKEN: "${process.env.GITHUB_TOKEN}"
        }
    };`);
});

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// Specific route for posts with slugs
app.get('/p/:slug', (req, res, next) => {
    try {
        const postPath = path.join(__dirname, '..', 'posts', 'p', req.params.slug, 'index.html');
        if (fs.existsSync(postPath)) {
            return res.sendFile(postPath);
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Handle other routes without .html extension
app.get('*', (req, res, next) => {
    try {
        let urlPath = req.path;
        
        // Remove trailing slash if present
        if (urlPath.endsWith('/') && urlPath !== '/') {
            urlPath = urlPath.slice(0, -1);
        }
        
        // Handle root path
        if (urlPath === '/') {
            return res.sendFile(path.join(__dirname, '..', 'index.html'));
        }
        
        // Try serving the path with .html extension
        const filePath = path.join(__dirname, '..', `${urlPath}.html`);
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
        
        // Legacy support for old post URLs
        const postMatch = urlPath.match(/^\/posts\/(\d+)$/);
        if (postMatch) {
            const postPath = path.join(__dirname, '..', 'posts', `${postMatch[1]}.html`);
            if (fs.existsSync(postPath)) {
                return res.sendFile(postPath);
            }
        }
        
        // If file doesn't exist, serve index.html
        res.sendFile(path.join(__dirname, '..', 'index.html'));
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Development server running at http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`GitHub token ${process.env.GITHUB_TOKEN ? 'is' : 'is not'} configured`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
