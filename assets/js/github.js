const LANGUAGE_COLORS = {
    "1C Enterprise": "#814CCC",
    "ABAP": "#E8274B",
    "ActionScript": "#882B0F",
    "Ada": "#02f88c",
    "Agda": "#315665",
    "AGS Script": "#B9D9FF",
    "Alloy": "#64C800",
    "AMPL": "#E6EFBB",
    "ANTLR": "#9DC3FF",
    "API Blueprint": "#2ACCA8",
    "APL": "#5A8164",
    "Apollo Guidance Computer": "#0B3D91",
    "AppleScript": "#101F1F",
    "Arc": "#aa2afe",
    "ASP": "#6a40fd",
    "AspectJ": "#a957b0",
    "Assembly": "#6E4C13",
    "Asymptote": "#ff0000",
    "ATS": "#1ac620",
    "AutoHotkey": "#6594b9",
    "AutoIt": "#1C3552",
    "Awk": "#c30e9b",
    "Ballerina": "#FF5000",
    "Batchfile": "#C1F12E",
    "BlitzMax": "#cd6400",
    "Boo": "#d4bec1",
    "Brainfuck": "#2F2530",
    "C": "#555555",
    "C#": "#178600",
    "C++": "#f34b7d",
    "Ceylon": "#dfa535",
    "Chapel": "#8dc63f",
    "Cirru": "#ccccff",
    "Clarion": "#db901e",
    "Clean": "#3F85AF",
    "Click": "#E4E6F3",
    "Clojure": "#db5855",
    "CoffeeScript": "#244776",
    "ColdFusion": "#ed2cd6",
    "Common Lisp": "#3fb68b",
    "Component Pascal": "#b0ce4e",
    "Crystal": "#000100",
    "CSS": "#563d7c",
    "D": "#ba595e",
    "Dart": "#00B4AB",
    "DataWeave": "#003a52",
    "Dockerfile": "#384d54",
    "Dogescript": "#cca760",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "eC": "#913960",
    "ECL": "#8a1267",
    "Eiffel": "#946d57",
    "Elixir": "#6e4a7e",
    "Elm": "#60B5CC",
    "Emacs Lisp": "#c065db",
    "EmberScript": "#FFF4F3",
    "EQ": "#a78649",
    "Erlang": "#B83998",
    "F#": "#b845fc",
    "Factor": "#636746",
    "Fancy": "#7b9db4",
    "Fantom": "#14253c",
    "FLUX": "#88ccff",
    "Forth": "#341708",
    "Fortran": "#4d41b1",
    "FreeMarker": "#0050b2",
    "Frege": "#00cafe",
    "Game Maker Language": "#8fb200",
    "GDScript": "#355570",
    "Genie": "#fb855d",
    "Gherkin": "#5B2063",
    "Glyph": "#e4cc98",
    "Gnuplot": "#f0a9f0",
    "Go": "#00ADD8",
    "Golo": "#88562A",
    "Gosu": "#82937f",
    "Grammatical Framework": "#79aa7a",
    "Groovy": "#e69f56",
    "Hack": "#878787",
    "Harbour": "#0e60e3",
    "Haskell": "#5e5086",
    "Haxe": "#df7900",
    "HiveQL": "#dce200",
    "HTML": "#e34c26",
    "Hy": "#7790B2",
    "IDL": "#a3522f",
    "Io": "#a9188d",
    "Ioke": "#078193",
    "Isabelle": "#FEFE00",
    "J": "#9EEDFF",
    "Java": "#b07219",
    "JavaScript": "#f1e05a",
    "Jolie": "#843179",
    "JSONiq": "#40d47e",
    "Julia": "#a270ba",
    "Jupyter Notebook": "#DA5B0B",
    "Kotlin": "#F18E33",
    "KRL": "#28431f",
    "Lasso": "#999999",
    "Lex": "#DBCA00",
    "LiveScript": "#499886",
    "LLVM": "#185619",
    "LOLCODE": "#cc9900",
    "LookML": "#652B81",
    "LSL": "#3d9970",
    "Lua": "#000080",
    "Makefile": "#427819",
    "Mask": "#f97732",
    "MATLAB": "#e16737",
    "Max": "#c4a79c",
    "MAXScript": "#00a6a6",
    "Mercury": "#ff2b2b",
    "Metal": "#8f14e9",
    "Mirah": "#c7a938",
    "MQL4": "#62A8D6",
    "MQL5": "#4A76B8",
    "MTML": "#b7e1f4",
    "NCL": "#28431f",
    "Nemerle": "#3d3c6e",
    "nesC": "#94B0C7",
    "NetLinx": "#0aa0ff",
    "NetLinx+ERB": "#747faa",
    "NetLogo": "#ff6375",
    "NewLisp": "#87AED7",
    "Nim": "#37775b",
    "Nit": "#009917",
    "Nix": "#7e7eff",
    "Nu": "#c9df40",
    "Objective-C": "#438eff",
    "Objective-C++": "#6866fb",
    "Objective-J": "#ff0c5a",
    "OCaml": "#3be133",
    "Omgrofl": "#cabbff",
    "ooc": "#b0b77e",
    "Opal": "#f7ede0",
    "Oxygene": "#cdd0e3",
    "Oz": "#fab738",
    "P4": "#7055b5",
    "Pan": "#cc0000",
    "Papyrus": "#6600cc",
    "Parrot": "#f3ca0a",
    "Pascal": "#E3F171",
    "PAWN": "#dbb284",
    "Perl": "#0298c3",
    "Perl 6": "#0000fb",
    "PHP": "#4F5D95",
    "PigLatin": "#fcd7de",
    "Pike": "#005390",
    "PLSQL": "#dad8d8",
    "PogoScript": "#d80074",
    "Processing": "#0096D8",
    "Prolog": "#74283c",
    "Propeller Spin": "#7fa2a7",
    "Puppet": "#302B6D",
    "PureBasic": "#5a6986",
    "PureScript": "#1D222D",
    "Python": "#3572A5",
    "QML": "#44a51c",
    "R": "#198CE7",
    "Racket": "#22228f",
    "Ragel": "#9d5200",
    "RAML": "#77d9fb",
    "Rascal": "#fffaa0",
    "Rebol": "#358a5b",
    "Red": "#f50000",
    "Ren'Py": "#ff7f7f",
    "Ring": "#2D54CB",
    "Roff": "#ecdebe",
    "Rouge": "#cc0088",
    "Ruby": "#701516",
    "RUNOFF": "#665a4e",
    "Rust": "#dea584",
    "SaltStack": "#646464",
    "SAS": "#B34936",
    "Scala": "#c22d40",
    "Scheme": "#1e4aec",
    "Self": "#0579aa",
    "Shell": "#89e051",
    "Shen": "#120F14",
    "Slash": "#007eff",
    "Slim": "#2b2b2b",
    "Smalltalk": "#596706",
    "SourcePawn": "#5c7611",
    "SQF": "#3F3F3F",
    "SQL": "#e38c00",
    "SQLPL": "#e38c00",
    "Squirrel": "#800000",
    "Stan": "#b2011d",
    "Stata": "#1a5f91",
    "SuperCollider": "#46390b",
    "Swift": "#ffac45",
    "SystemVerilog": "#DAE1C2",
    "Tcl": "#e4cc98",
    "Terra": "#00004c",
    "TeX": "#3D6117",
    "TI Program": "#A0AA87",
    "Turing": "#cf142b",
    "TypeScript": "#2b7489",
    "UnrealScript": "#a54c4d",
    "Vala": "#fbe5cd",
    "VCL": "#148AA8",
    "Verilog": "#b2b7f8",
    "VHDL": "#adb2cb",
    "Vim script": "#199f4b",
    "Visual Basic": "#945db7",
    "Volt": "#1F1F1F",
    "Vue": "#2c3e50",
    "WebAssembly": "#04133b",
    "X10": "#4B6BEF",
    "xBase": "#403a40",
    "XC": "#99DA07",
    "XQuery": "#5232e7",
    "YAML": "#cb171e",
    "YARA": "#220000",
    "YASnippet": "#32AB90",
    "ZAP": "#0d665e",
    "Zephir": "#118f9e",
    "Zig": "#ec915c",
    "ZIL": "#dc75e5"
};


class GitHubAPI {
    constructor(username, token = null) {
        this.username = username;
        this.token = token;
        this.apiBase = 'https://api.github.com';
        console.log('GitHub API initialized:', {
            username,
            hasToken: !!token
        });
    }

    async makeRequest(url) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        if (this.token) {
            headers['Authorization'] = `token ${this.token}`;
        }

        const response = await fetch(url, { headers });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`GitHub API Error: ${response.status} - ${errorData.message}`);
        }

        return response.json();
    }

    async fetchWithAuth(url) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        const response = await fetch(url, { headers });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`GitHub API Error: ${response.status} - ${error.message}`);
        }

        return response.json();
    }

    // async calculateOverallLanguageStats(repositories) {
    //     const totalStats = new Map();
    //     let totalBytes = 0;

    //     // Collect language stats from all repositories
    //     for (const repo of repositories) {
    //         try {
    //             const headers = this.token ? {
    //                 'Authorization': `Bearer ${this.token}`
    //             } : {};

    //             const response = await fetch(repo.languages_url, { headers });
    //             const stats = await response.json();

    //             // Add up bytes for each language
    //             Object.entries(stats).forEach(([language, bytes]) => {
    //                 const currentBytes = totalStats.get(language) || 0;
    //                 totalStats.set(language, currentBytes + bytes);
    //                 totalBytes += bytes;
    //             });
    //         } catch (error) {
    //             console.error(`Error fetching language stats for ${repo.name}:`, error);
    //         }
    //     }

    //     // Convert to percentage
    //     return Array.from(totalStats.entries())
    //         .map(([language, bytes]) => ({
    //             language,
    //             percentage: ((bytes / totalBytes) * 100).toFixed(1)
    //         }))
    //         .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
    // }
    async calculateOverallLanguageStats(repositories) {
        const totalStats = new Map();
        let totalBytes = 0;

        for (const repo of repositories) {
            try {
                const stats = await this.makeRequest(repo.languages_url);
                Object.entries(stats).forEach(([language, bytes]) => {
                    const currentBytes = totalStats.get(language) || 0;
                    totalStats.set(language, currentBytes + bytes);
                    totalBytes += bytes;
                });
            } catch (error) {
                console.error(`Error fetching language stats for ${repo.name}:`, error);
            }
        }

        return Array.from(totalStats.entries())
            .map(([language, bytes]) => ({
                language,
                percentage: ((bytes / totalBytes) * 100).toFixed(1)
            }))
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
    }

    // async getRepositories() {
    //     try {
    //         const headers = this.token ? {
    //             'Authorization': `Bearer ${this.token}`
    //         } : {};

    //         const response = await fetch(`${this.apiBase}/users/${this.username}/repos?sort=updated&per_page=100`, {
    //             headers
    //         });
            
    //         if (!response.ok) {
    //             throw new Error(`GitHub API error: ${response.status}`);
    //         }
            
    //         const repos = await response.json();
    //         return repos
    //             .filter(repo => !repo.fork && !repo.private)
    //             .map(repo => ({
    //                 name: repo.name,
    //                 description: repo.description,
    //                 url: repo.html_url,
    //                 homepage: repo.homepage,
    //                 language: repo.language,
    //                 languages_url: repo.languages_url,
    //                 stars: repo.stargazers_count,
    //                 forks: repo.forks_count
    //             }));
    //     } catch (error) {
    //         console.error('Error fetching repositories:', error);
    //         throw error;
    //     }
    // }

    async getRepositories() {
        try {
            const repos = await this.makeRequest(
                `${this.apiBase}/users/${this.username}/repos?sort=updated&per_page=100`
            );

            return repos
                .filter(repo => !repo.fork && !repo.private)
                .map(repo => ({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    homepage: repo.homepage,
                    language: repo.language,
                    languages_url: repo.languages_url,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count
                }));
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    }

    // async getLanguageStats(languagesUrl) {
    //     try {
    //         const headers = this.token ? {
    //             'Authorization': `Bearer ${this.token}`
    //         } : {};

    //         const response = await fetch(languagesUrl, { headers });
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch language stats');
    //         }
            
    //         const stats = await response.json();
    //         const total = Object.values(stats).reduce((a, b) => a + b, 0);
            
    //         return Object.entries(stats)
    //             .map(([lang, bytes]) => ({
    //                 language: lang,
    //                 percentage: (bytes / total * 100).toFixed(1)
    //             }))
    //             .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
    //     } catch (error) {
    //         console.error('Error fetching language stats:', error);
    //         throw error;
    //     }
    // }

    async getLanguageStats(languagesUrl) {
        try {
            const stats = await this.makeRequest(languagesUrl);
            const total = Object.values(stats).reduce((a, b) => a + b, 0);
            
            return Object.entries(stats)
                .map(([lang, bytes]) => ({
                    language: lang,
                    percentage: (bytes / total * 100).toFixed(1)
                }))
                .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
        } catch (error) {
            console.error('Error fetching language stats:', error);
            throw error;
        }
    }
}

// Initialize GitHub projects
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('repo-list');
    const projectsSection = document.querySelector('section');
    
    // Show loading state
    container.innerHTML = `
        <div class="col-span-full text-center text-gray-500">
            <svg class="animate-spin h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading repositories...
        </div>
    `;

    try {
        // Check if token exists
        if (!window.process?.env?.GITHUB_TOKEN) {
            console.warn('GitHub token not found. Rate limiting may occur.');
        }

        const github = new GitHubAPI('adtpdn', window.process?.env?.GITHUB_TOKEN);
        const repos = await github.getRepositories();

        if (repos.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center text-gray-500">
                    No public repositories found.
                </div>
            `;
            return;
        }

        // Calculate and render overall stats
        const overallStats = await github.calculateOverallLanguageStats(repos);
        const overallStatsHTML = renderOverallStats(overallStats);

        // Insert overall stats after the heading
        const heading = projectsSection.querySelector('h2');
        heading.insertAdjacentHTML('afterend', overallStatsHTML);

        // Render repositories
        container.innerHTML = '';
        for (const repo of repos) {
            try {
                const languageStats = await github.getLanguageStats(repo.languages_url);
                container.innerHTML += renderRepository(repo, languageStats);
            } catch (error) {
                console.error(`Error rendering repository ${repo.name}:`, error);
                // Continue with next repository instead of failing completely
                continue;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = `
            <div class="col-span-full text-center text-red-500">
                <p class="font-bold mb-2">Error loading repositories</p>
                <p class="text-sm">${error.message}</p>
                <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Try Again
                </button>
            </div>
        `;
    }
});

function renderRepository(repo, languageStats) {
    const getLanguageColor = (language) => {
        return LANGUAGE_COLORS[language] || '#959da5'; // Default color if language not found
    };

    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6">
                <!-- Links section -->
                <div class="flex space-x-4 mb-3">
                    <a href="${repo.url}" 
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-blue-500 hover:text-blue-700 flex items-center text-sm">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    ${repo.homepage ? `
                        <a href="${repo.homepage}" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="text-green-500 hover:text-green-700 flex items-center text-sm">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Demo
                        </a>
                    ` : ''}
                </div>

                <!-- Repository name -->
                <h3 class="text-lg font-semibold mb-2">${repo.name}</h3>

                <!-- Description - smaller text size -->
                <p class="text-gray-600 mb-4 h-24 overflow-hidden text-xs leading-relaxed">
                    ${repo.description || 'No description available'}
                </p>

                <!-- Language stats -->
                <div class="mb-4">
                    <div class="relative h-2 rounded-full overflow-hidden bg-gray-100 mb-2">
                        ${languageStats.map((stat, index) => `
                            <div class="absolute h-full"
                                 style="background-color: ${getLanguageColor(stat.language)};
                                        width: ${stat.percentage}%;
                                        left: ${languageStats.slice(0, index).reduce((acc, curr) => acc + parseFloat(curr.percentage), 0)}%">
                            </div>
                        `).join('')}
                    </div>
                    <div class="flex flex-wrap gap-3">
                        ${languageStats.map(stat => `
                            <div class="flex items-center">
                                <span class="w-2.5 h-2.5 rounded-full mr-1" 
                                      style="background-color: ${getLanguageColor(stat.language)}">
                                </span>
                                <span class="text-xs text-gray-600">
                                    ${stat.language} ${stat.percentage}%
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderOverallStats(stats) {
    const getLanguageColor = (language) => {
        return LANGUAGE_COLORS[language] || '#959da5';
    };

    return `
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 class="text-xl font-semibold mb-4">Overall Language Distribution</h3>
            <div class="mb-4">
                <div class="relative h-3 rounded-full overflow-hidden bg-gray-100 mb-3">
                    ${stats.map((stat, index) => `
                        <div class="absolute h-full"
                             style="background-color: ${getLanguageColor(stat.language)};
                                    width: ${stat.percentage}%;
                                    left: ${stats.slice(0, index).reduce((acc, curr) => acc + parseFloat(curr.percentage), 0)}%">
                        </div>
                    `).join('')}
                </div>
                <div class="flex flex-wrap gap-4">
                    ${stats.map(stat => `
                        <div class="flex items-center">
                            <span class="w-3 h-3 rounded-full mr-1" 
                                  style="background-color: ${getLanguageColor(stat.language)}">
                            </span>
                            <span class="text-sm text-gray-600">
                                ${stat.language} ${stat.percentage}%
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}




