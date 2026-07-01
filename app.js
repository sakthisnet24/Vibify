// Vibify Music Player Logic

// Tracks Database
const tracks = [
    // 2025 Hits
    {
        id: "2025-kantara",
        title: "Kantara Chapter (Theme)",
        artist: "B. Ajaneesh Loknath",
        album: "Kantara Chapter 1",
        duration: "5:07",
        src: "2025/Kantara Chapter (Theme).mp3",
        cover: "assets/cover_2025.png",
        folder: "2025"
    },
    {
        id: "2025-karuppa",
        title: "Karuppa Kooda Va",
        artist: "Jakes Bejoy / Harris Jayaraj",
        album: "2025 Special",
        duration: "4:25",
        //src: "https://res.cloudinary.com/dlbicgmbt/video/upload/v1781680949/Karuppa_Kooda_Va_coknj9.mp3",
        src: "2025/Karuppa Kooda Va.mp3",
        cover: "assets/cover_2025.png",
        folder: "2025"
    },
    {
        id: "2025-monica",
        title: "Monica",
        artist: "Harris Jayaraj",
        album: "2025 Hits",
        duration: "3:50",
        src: "2025/Monica.mp3",
        cover: "assets/cover_2025.png",
        folder: "2025"
    },
    {
        id: "2025-vaenguzhalil",
        title: "Vaenguzhalil Ezhaindayadi",
        artist: "Haricharan",
        album: "Sree Krishna",
        duration: "3:43",
        src: "2025/Vaenguzhalil Ezhaindayadi.mp3",
        cover: "assets/cover_2025.png",
        folder: "2025"
    },
    {
        id: "2025-varaha",
        title: "Varaha Roopam",
        artist: "Sai Vignesh",
        album: "Kantara",
        duration: "4:39",
        //src: "https://res.cloudinary.com/dlbicgmbt/video/upload/v1781680950/Varaha_Roopam_pc7t8o.mp3",
        src: "2025/Varaha Roopam.mp3",
        cover: "assets/cover_2025.png",
        folder: "2025"
    },
    
    // Ilayaraja Classics
    {
        id: "ir-aagaya",
        title: "Aagaya Thamarai",
        artist: "Ilayaraja",
        album: "Ilayaraja Classics",
        duration: "5:10",
        src: "Ilayaraja/Aagaya Thamarai.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-kalaivaniyo",
        title: "Kalaivaniyo Raniyo",
        artist: "Ilayaraja",
        album: "Ilayaraja Gold",
        duration: "5:09",
        src: "Ilayaraja/Kalaivaniyo Raniyo.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-mannaiyum",
        title: "Mannaiyum Ponnaiyum",
        artist: "Ilayaraja",
        album: "Classic Hits",
        duration: "6:02",
        src: "Ilayaraja/Mannaiyum Ponnaiyum.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-mannar",
        title: "Mannar Mannane",
        artist: "Ilayaraja",
        album: "Ilayaraja Hits",
        duration: "2:51",
        src: "Ilayaraja/Mannar Mannane.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-rajadhi",
        title: "Rajadhi Raja",
        artist: "Ilayaraja",
        album: "Agni Natchathiram",
        duration: "5:07",
        src: "Ilayaraja/Rajadhi Raja.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-sandi",
        title: "Sandi Raniye",
        artist: "Ilayaraja",
        album: "Golden Instrumental",
        duration: "2:08",
        src: "Ilayaraja/Sandi Raniye.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },
    {
        id: "ir-vanamellam",
        title: "Vanamellam Shenbaga Poo",
        artist: "Ilayaraja",
        album: "Melody Collection",
        duration: "5:26",
        src: "Ilayaraja/Vanamellam Shenbaga Poo.mp3",
        cover: "assets/cover_ilayaraja.png",
        folder: "Ilayaraja"
    },

    // 1999 Melodies
    {
        id: "1999-vennila",
        title: "Vennila",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Vennila.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-innisai",
        title: "Innisai Paadi Varum Male",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Innisai Paadi Varum Male.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-monalisa",
        title: "Monalisa",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Monalisa.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-iruvathu",
        title: "Iruvathu Kodi Nilavugal Kudi",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Iruvathu Kodi Nilavugal Kudi.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-clio",
        title: "Clio Paattra",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Clio Paattra.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-parthu",
        title: "Parthu Parthu Male",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Parthu Parthu Male.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-duniya",
        title: "Duniya Hey Duniya",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Duniya Hey Duniya.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-thoda",
        title: "Thoda Thoda Enave Vanavil Ennai",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Thoda Thoda Enave Vanavil Ennai.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    },
    {
        id: "1999-thulli",
        title: "Thulli Thulli",
        artist: "Various Artists",
        album: "1999 Melodies",
        duration: "4:00",
        src: "1999 Melody/Thulli Thulli.mp3",
        cover: "assets/1999_melo_cover.png",
        folder: "1999melo"
    }
];

// App State
let state = {
    currentPlaylist: [...tracks], // default is all
    currentTrackIndex: 0,
    isPlaying: false,
    isShuffle: false,
    isRepeat: 'off', // 'off', 'all', 'one'
    volume: 0.7,
    likedTrackIds: new Set(JSON.parse(localStorage.getItem('vibify_liked_tracks') || '[]')),
    
    // View Management
    currentView: 'home', // 'home', 'search', 'playlist'
    activePlaylistId: null, // '2025', 'ilayaraja', '1999melo', 'liked'
    
    // History stacks for navigation
    history: ['home'],
    historyIndex: 0
};

// DOM Elements
const audio = document.getElementById('audioElement');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnShuffle = document.getElementById('btnShuffle');
const btnRepeat = document.getElementById('btnRepeat');
const timeCurrent = document.getElementById('timeCurrent');
const timeTotal = document.getElementById('timeTotal');
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBarFill = document.getElementById('progressBarFill');
const volumeBarContainer = document.getElementById('volumeBarContainer');
const volumeBarFill = document.getElementById('volumeBarFill');
const btnVolumeMute = document.getElementById('btnVolumeMute');
const btnToggleVisualizer = document.getElementById('btnToggleVisualizer');

// Player Left Info Elements
const playerTrackImg = document.getElementById('playerTrackImg');
const playerTrackInfo = document.getElementById('playerTrackInfo');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const playerTrackLike = document.getElementById('playerTrackLike');

// Views and Panels
const homeView = document.getElementById('homeView');
const searchView = document.getElementById('searchView');
const playlistView = document.getElementById('playlistView');
const visualizerOverlay = document.getElementById('visualizerOverlay');

// Navigation Items
const navHome = document.getElementById('navHome');
const navSearch = document.getElementById('navSearch');
const logoLink = document.getElementById('logoLink');
const libraryLikedSongs = document.getElementById('libraryLikedSongs');
const library2025 = document.getElementById('library2025');
const libraryIlayaraja = document.getElementById('libraryIlayaraja');
const library1999melo = document.getElementById('library1999melo');

// Mobile Navigation Items
const mobileNavHome = document.getElementById('mobileNavHome');
const mobileNavSearch = document.getElementById('mobileNavSearch');
const mobileNavLibrary = document.getElementById('mobileNavLibrary');

// History Buttons
const btnHistoryBack = document.getElementById('btnHistoryBack');
const btnHistoryForward = document.getElementById('btnHistoryForward');

// Grids
const grid2025 = document.getElementById('grid2025');
const gridIlayaraja = document.getElementById('gridIlayaraja');
const grid1999melo = document.getElementById('grid1999melo');

// Search Elements
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchResultsSection = document.getElementById('searchResultsSection');
const searchBrowseSection = document.getElementById('searchBrowseSection');
const searchResultsTableBody = document.getElementById('searchResultsTableBody');

// Playlist View Elements
const playlistHeaderImg = document.getElementById('playlistHeaderImg');
const playlistHeaderTitle = document.getElementById('playlistHeaderTitle');
const playlistHeaderDesc = document.getElementById('playlistHeaderDesc');
const playlistHeaderStats = document.getElementById('playlistHeaderStats');
const btnPlayPlaylist = document.getElementById('btnPlayPlaylist');
const btnLikePlaylist = document.getElementById('btnLikePlaylist');
const playlistTracksTableBody = document.getElementById('playlistTracksTableBody');
const playlistEmptyState = document.getElementById('playlistEmptyState');
const playlistBanner = document.getElementById('playlistBanner');
const sidebarLikedCount = document.getElementById('sidebarLikedCount');

// Quick Play Elements
const quickCardLiked = document.getElementById('quickCardLiked');
const quickCard2025 = document.getElementById('quickCard2025');
const quickCardIlayaraja = document.getElementById('quickCardIlayaraja');
const quickCard1999melo = document.getElementById('quickCard1999melo');
const quickPlayLiked = document.getElementById('quickPlayLiked');
const quickPlay2025 = document.getElementById('quickPlay2025');
const quickPlayIlayaraja = document.getElementById('quickPlayIlayaraja');
const quickPlay1999melo = document.getElementById('quickPlay1999melo');

// Browse Cards
const browseCard2025 = document.getElementById('browseCard2025');
const browseCardIlayaraja = document.getElementById('browseCardIlayaraja');

// Visualizer Elements
const vizCoverImg = document.getElementById('vizCoverImg');
const vizSongTitle = document.getElementById('vizSongTitle');
const vizSongArtist = document.getElementById('vizSongArtist');
const visualizerCanvas = document.getElementById('visualizerCanvas');
const visualizerCloseBtn = document.getElementById('visualizerCloseBtn');

// Web Audio API Variables
let audioContext = null;
let analyser = null;
let dataArray = null;
let visualizerAnimationId = null;
let isAudioContextInitialized = false;

// Initialize App
function init() {
    updateGreeting();
    renderHomeGrids();
    setupAudioListeners();
    setupControlListeners();
    setupNavigationListeners();
    setupSearchListeners();
    updateLikedSongsSidebar();
    
    // Set initial volume
    audio.volume = state.volume;
    updateVolumeSlider(state.volume);
    
    // Display Home View
    navigateTo('home');
}

// ----------------------------------------------------
// UI GREETING & UTILS
// ----------------------------------------------------
function updateGreeting() {
    const greetingText = document.getElementById('greetingText');
    const hr = new Date().getHours();
    let greet = "Good Day";
    
    if (hr < 12) greet = "Good Morning";
    else if (hr < 18) greet = "Good Afternoon";
    else greet = "Good Evening";
    
    greetingText.innerHTML = `${greet}, <span>Viber</span>!`;
}

// Helper: Convert seconds to mm:ss
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ----------------------------------------------------
// NAVIGATION MANAGEMENT
// ----------------------------------------------------
function navigateTo(view, playlistId = null) {
    // Hide all views
    homeView.style.display = 'none';
    searchView.style.display = 'none';
    playlistView.style.display = 'none';
    
    // Deactivate sidebars
    navHome.classList.remove('active');
    navSearch.classList.remove('active');
    libraryLikedSongs.classList.remove('active');
    library2025.classList.remove('active');
    libraryIlayaraja.classList.remove('active');
    library1999melo.classList.remove('active');
    
    // Deactivate mobile nav items
    mobileNavHome.classList.remove('active');
    mobileNavSearch.classList.remove('active');
    mobileNavLibrary.classList.remove('active');
    
    // Hide search bar from header unless on search page
    searchContainer.classList.remove('visible');
    
    state.currentView = view;
    state.activePlaylistId = playlistId;
    
    // Show selected view
    if (view === 'home') {
        homeView.style.display = 'flex';
        navHome.classList.add('active');
        mobileNavHome.classList.add('active');
    } else if (view === 'search') {
        searchView.style.display = 'flex';
        navSearch.classList.add('active');
        mobileNavSearch.classList.add('active');
        searchContainer.classList.add('visible');
        searchInput.focus();
    } else if (view === 'playlist') {
        playlistView.style.display = 'block';
        renderPlaylistView(playlistId);
        
        // Active states in sidebar
        if (playlistId === '2025') library2025.classList.add('active');
        else if (playlistId === 'ilayaraja') libraryIlayaraja.classList.add('active');
        else if (playlistId === '1999melo') library1999melo.classList.add('active');
        else if (playlistId === 'liked') libraryLikedSongs.classList.add('active');
        
        mobileNavLibrary.classList.add('active');
    }
    
    // Add to history stack (if not duplicate of top)
    const historyState = { view, playlistId };
    const currentTop = state.history[state.historyIndex];
    
    if (!currentTop || currentTop.view !== view || currentTop.playlistId !== playlistId) {
        // Truncate any forward history if we are in the middle of stack
        state.history = state.history.slice(0, state.historyIndex + 1);
        state.history.push(historyState);
        state.historyIndex = state.history.length - 1;
    }
    
    updateHistoryButtons();
}

function updateHistoryButtons() {
    btnHistoryBack.disabled = state.historyIndex <= 0;
    btnHistoryForward.disabled = state.historyIndex >= state.history.length - 1;
}

function navigateBack() {
    if (state.historyIndex > 0) {
        state.historyIndex--;
        const previousState = state.history[state.historyIndex];
        
        // Apply historical view
        applyState(previousState);
        updateHistoryButtons();
    }
}

function navigateForward() {
    if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        const nextState = state.history[state.historyIndex];
        
        // Apply historical view
        applyState(nextState);
        updateHistoryButtons();
    }
}

function applyState(historyState) {
    const { view, playlistId } = historyState;
    
    homeView.style.display = 'none';
    searchView.style.display = 'none';
    playlistView.style.display = 'none';
    
    navHome.classList.remove('active');
    navSearch.classList.remove('active');
    libraryLikedSongs.classList.remove('active');
    library2025.classList.remove('active');
    libraryIlayaraja.classList.remove('active');
    library1999melo.classList.remove('active');
    
    mobileNavHome.classList.remove('active');
    mobileNavSearch.classList.remove('active');
    mobileNavLibrary.classList.remove('active');
    
    searchContainer.classList.remove('visible');
    
    state.currentView = view;
    state.activePlaylistId = playlistId;
    
    if (view === 'home') {
        homeView.style.display = 'flex';
        navHome.classList.add('active');
        mobileNavHome.classList.add('active');
    } else if (view === 'search') {
        searchView.style.display = 'flex';
        navSearch.classList.add('active');
        mobileNavSearch.classList.add('active');
        searchContainer.classList.add('visible');
    } else if (view === 'playlist') {
        playlistView.style.display = 'block';
        renderPlaylistView(playlistId, false); // Don't push to history stack
        
        if (playlistId === '2025') library2025.classList.add('active');
        else if (playlistId === 'ilayaraja') libraryIlayaraja.classList.add('active');
        else if (playlistId === 'liked') libraryLikedSongs.classList.add('active');
        
        mobileNavLibrary.classList.add('active');
    }
}

// ----------------------------------------------------
// PLAYLIST VIEW RENDERING
// ----------------------------------------------------
function renderPlaylistView(playlistId) {
    let playlistTracks = [];
    let title = "";
    let desc = "";
    let coverSrc = "";
    let bannerGrad = "";
    
    if (playlistId === '2025') {
        playlistTracks = tracks.filter(t => t.folder === '2025');
        title = "2025 Hits";
        desc = "The most popular releases of 2025. Fresh rhythms, high energy, and modern vibes.";
        coverSrc = "assets/cover_2025.png";
        bannerGrad = "linear-gradient(to bottom, rgba(255, 59, 48, 0.4) 0%, rgba(10, 10, 12, 0) 100%)";
        playlistBanner.style.background = bannerGrad;
        playlistHeaderImg.style.display = 'block';
        playlistHeaderImg.src = coverSrc;
        
        // Remove liked class from playlist icon
        btnLikePlaylist.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else if (playlistId === 'ilayaraja') {
        playlistTracks = tracks.filter(t => t.folder === 'Ilayaraja');
        title = "Ilayaraja Classics";
        desc = "Timeless masterpieces composed by the Maestro Ilayaraja. Classic instrumentals and melodies.";
        coverSrc = "assets/cover_ilayaraja.png";
        bannerGrad = "linear-gradient(to bottom, rgba(255, 204, 0, 0.35) 0%, rgba(10, 10, 12, 0) 100%)";
        playlistBanner.style.background = bannerGrad;
        playlistHeaderImg.style.display = 'block';
        playlistHeaderImg.src = coverSrc;
        
        btnLikePlaylist.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else if (playlistId === '1999melo') {
        playlistTracks = tracks.filter(t => t.folder === '1999melo');
        title = "1999 Melodies";
        desc = "A collection of nostalgic melodic favorites from the 1999 era.";
        coverSrc = "assets/1999_melo_cover.png";
        bannerGrad = "linear-gradient(to bottom, rgba(255, 204, 0, 0.28) 0%, rgba(10, 10, 12, 0) 100%)";
        playlistBanner.style.background = bannerGrad;
        playlistHeaderImg.style.display = 'block';
        playlistHeaderImg.src = coverSrc;
        
        btnLikePlaylist.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else if (playlistId === 'liked') {
        playlistTracks = tracks.filter(t => state.likedTrackIds.has(t.id));
        title = "Liked Songs";
        desc = "Your personal collection of favorite tunes. Safe and saved vibes.";
        bannerGrad = "linear-gradient(to bottom, rgba(114, 28, 36, 0.7) 0%, rgba(10, 10, 12, 0) 100%)";
        playlistBanner.style.background = bannerGrad;
        
        // Replace image with a heart icon box
        playlistHeaderImg.style.display = 'none';
        
        // Create custom heart container
        let heartIconBox = document.getElementById('likedPlaylistIconBox');
        if (!heartIconBox) {
            heartIconBox = document.createElement('div');
            heartIconBox.id = 'likedPlaylistIconBox';
            heartIconBox.className = 'liked-songs-icon';
            heartIconBox.innerHTML = '<i class="fa-solid fa-heart"></i>';
            playlistBanner.insertBefore(heartIconBox, playlistHeaderImg);
        } else {
            heartIconBox.style.display = 'flex';
        }
        
        btnLikePlaylist.innerHTML = '<i class="fa-solid fa-heart" style="color: var(--accent-red);"></i>';
    }
    
    // Hide Liked Songs Icon Box if not liked view
    if (playlistId !== 'liked') {
        const heartIconBox = document.getElementById('likedPlaylistIconBox');
        if (heartIconBox) heartIconBox.style.display = 'none';
    }
    
    playlistHeaderTitle.textContent = title;
    playlistHeaderDesc.textContent = desc;
    playlistHeaderStats.textContent = `${playlistTracks.length} song${playlistTracks.length !== 1 ? 's' : ''}`;
    
    // Build table rows
    playlistTracksTableBody.innerHTML = '';
    
    if (playlistTracks.length === 0) {
        playlistTracksTableBody.parentElement.style.display = 'none';
        playlistEmptyState.style.display = 'block';
    } else {
        playlistTracksTableBody.parentElement.style.display = 'table';
        playlistEmptyState.style.display = 'none';
        
        playlistTracks.forEach((track, index) => {
            const row = document.createElement('tr');
            row.className = 'track-row';
            
            // Check if active
            const isCurrentlyPlayingThisTrack = state.isPlaying && getCurrentTrack() && getCurrentTrack().id === track.id;
            const isActiveTrack = getCurrentTrack() && getCurrentTrack().id === track.id;
            
            if (isActiveTrack) {
                row.classList.add('active-track');
            }
            
            const isLiked = state.likedTrackIds.has(track.id);
            
            row.innerHTML = `
                <td class="track-cell track-number">
                    <span class="number-text">${index + 1}</span>
                    <button class="row-play-btn" onclick="playTrackFromList('${track.id}', '${playlistId}')">
                        <i class="fa-solid ${isCurrentlyPlayingThisTrack ? 'fa-pause' : 'fa-play'}"></i>
                    </button>
                </td>
                <td class="track-cell track-meta-cell">
                    <img src="${track.cover}" alt="${track.title}" class="track-thumb">
                    <div class="track-details">
                        <span class="track-title">${track.title}</span>
                        <span class="track-artist">${track.artist}</span>
                    </div>
                </td>
                <td class="track-cell track-album album-col">${track.album}</td>
                <td class="track-cell track-actions">
                    <button class="track-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeTrack(event, '${track.id}')">
                        <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </td>
                <td class="track-cell track-duration">${track.duration}</td>
            `;
            
            // Double click to play
            row.addEventListener('dblclick', () => {
                playTrackFromList(track.id, playlistId);
            });
            
            playlistTracksTableBody.appendChild(row);
        });
    }
}

// ----------------------------------------------------
// PLAYBACK STATE MANAGEMENT
// ----------------------------------------------------
function getCurrentTrack() {
    if (state.currentPlaylist.length === 0) return null;
    return state.currentPlaylist[state.currentTrackIndex];
}

function playTrackFromList(trackId, playlistId) {
    let selectedPlaylist = [];
    
    if (playlistId === '2025') {
        selectedPlaylist = tracks.filter(t => t.folder === '2025');
    } else if (playlistId === 'ilayaraja') {
        selectedPlaylist = tracks.filter(t => t.folder === 'Ilayaraja');
    } else if (playlistId === '1999melo') {
        selectedPlaylist = tracks.filter(t => t.folder === '1999melo');
    } else if (playlistId === 'liked') {
        selectedPlaylist = tracks.filter(t => state.likedTrackIds.has(t.id));
    } else {
        selectedPlaylist = [...tracks]; // fallback
    }
    
    // Set playlist in state
    state.currentPlaylist = selectedPlaylist;
    
    // Find index of this track
    const index = selectedPlaylist.findIndex(t => t.id === trackId);
    
    if (index !== -1) {
        // If they click on the currently active track, just toggle play/pause
        const currentActive = getCurrentTrack();
        if (currentActive && currentActive.id === trackId) {
            togglePlayPause();
        } else {
            state.currentTrackIndex = index;
            loadAndPlayTrack();
        }
    }
}

function loadAndPlayTrack() {
    const track = getCurrentTrack();
    if (!track) return;
    
    // Setup Audio Src
    audio.pause();
    audio.currentTime = 0;
    audio.src = track.src;
    audio.load();
    
    // Reset Progress
    progressBarFill.style.width = '0%';
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = track.duration;
    
    // Enable left side player controls
    playerTrackImg.style.display = 'block';
    playerTrackInfo.style.display = 'flex';
    playerTrackLike.style.display = 'block';
    
    playerTrackImg.src = track.cover;
    playerTrackTitle.textContent = track.title;
    playerTrackArtist.textContent = track.artist;
    
    // Set Liked status in player
    const isLiked = state.likedTrackIds.has(track.id);
    if (isLiked) {
        playerTrackLike.className = 'player-track-like liked';
        playerTrackLike.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
        playerTrackLike.className = 'player-track-like';
        playerTrackLike.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
    
    // Visualizer Panel Now Playing info
    vizCoverImg.src = track.cover;
    vizSongTitle.textContent = track.title;
    vizSongArtist.textContent = track.artist;
    
    // Play audio
    playAudio();
    
    // Re-render current playlist view if visible to update active states
    if (state.currentView === 'playlist') {
        renderPlaylistView(state.activePlaylistId);
    } else if (state.currentView === 'search' && searchInput.value.trim() !== '') {
        performSearch(); // update search lists
    }
}

function playAudio() {
    // Initialize audio context for visualizer on user gesture
    initAudioContext();

    const track = getCurrentTrack();
    if (!track) return;

    const tryPlay = () => {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                state.isPlaying = true;
                updatePlayPauseUI(true);
                startVisualizerAnimation();
            }).catch(error => {
                console.log("Playback failed. Fallback to localSrc if available. Error:", error);

                if (track && track.localSrc && audio.src !== track.localSrc) {
                    console.log("Loading fallback local source:", track.localSrc);
                    audio.src = track.localSrc;
                    audio.load();
                    audio.play().then(() => {
                        state.isPlaying = true;
                        updatePlayPauseUI(true);
                        startVisualizerAnimation();
                    }).catch(e => {
                        console.error("Local fallback also failed:", e);
                        state.isPlaying = false;
                        updatePlayPauseUI(false);
                    });
                } else {
                    state.isPlaying = false;
                    updatePlayPauseUI(false);
                }
            });
        }
    };

    if (audio.readyState >= 2) {
        tryPlay();
    } else {
        const onReady = () => {
            audio.removeEventListener('canplay', onReady);
            audio.removeEventListener('canplaythrough', onReady);
            tryPlay();
        };

        audio.addEventListener('canplay', onReady, { once: true });
        audio.addEventListener('canplaythrough', onReady, { once: true });
        audio.addEventListener('error', () => {
            console.error('Audio load error:', audio.error);
            state.isPlaying = false;
            updatePlayPauseUI(false);
        }, { once: true });
    }
}

function pauseAudio() {
    audio.pause();
    state.isPlaying = false;
    updatePlayPauseUI(false);
    stopVisualizerAnimation();
    
    // Re-render playlist view to update small play buttons
    if (state.currentView === 'playlist') {
        renderPlaylistView(state.activePlaylistId);
    }
}

function togglePlayPause() {
    // If no source is loaded yet, load first song of current playlist
    if (!audio.src) {
        if (state.currentPlaylist.length > 0) {
            state.currentTrackIndex = 0;
            loadAndPlayTrack();
        }
        return;
    }
    
    if (state.isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function updatePlayPauseUI(isPlaying) {
    const playPauseIcon = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    btnPlayPause.innerHTML = playPauseIcon;
    
    // If in playlist detail view, update big play button
    const bigPlayBtn = document.getElementById('btnPlayPlaylist');
    if (bigPlayBtn) {
        bigPlayBtn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    }
}

function nextTrack() {
    if (state.currentPlaylist.length === 0) return;
    
    if (state.isShuffle) {
        // Pick random track
        state.currentTrackIndex = Math.floor(Math.random() * state.currentPlaylist.length);
    } else {
        state.currentTrackIndex = (state.currentTrackIndex + 1) % state.currentPlaylist.length;
    }
    
    loadAndPlayTrack();
}

function prevTrack() {
    if (state.currentPlaylist.length === 0) return;
    
    // If song is more than 3 seconds in, restart the song
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    
    if (state.isShuffle) {
        state.currentTrackIndex = Math.floor(Math.random() * state.currentPlaylist.length);
    } else {
        state.currentTrackIndex = (state.currentTrackIndex - 1 + state.currentPlaylist.length) % state.currentPlaylist.length;
    }
    
    loadAndPlayTrack();
}

function toggleShuffle() {
    state.isShuffle = !state.isShuffle;
    btnShuffle.classList.toggle('active', state.isShuffle);
}

function toggleRepeat() {
    if (state.isRepeat === 'off') {
        state.isRepeat = 'all';
        btnRepeat.className = 'control-btn active';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    } else if (state.isRepeat === 'all') {
        state.isRepeat = 'one';
        btnRepeat.className = 'control-btn active';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat"></i><span style="font-size: 8px; position: absolute; top: 12px; font-weight: 800;">1</span>';
    } else {
        state.isRepeat = 'off';
        btnRepeat.className = 'control-btn';
        btnRepeat.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    }
}

// ----------------------------------------------------
// VOLUME & PROGRESS SEEKING
// ----------------------------------------------------
function updateVolumeSlider(volumeVal) {
    volumeBarFill.style.width = `${volumeVal * 100}%`;
    const volIcon = btnVolumeMute.querySelector('i');
    
    if (volumeVal === 0) {
        volIcon.className = 'fa-solid fa-volume-xmark';
    } else if (volumeVal < 0.4) {
        volIcon.className = 'fa-solid fa-volume-low';
    } else {
        volIcon.className = 'fa-solid fa-volume-high';
    }
}

function seekVolume(e) {
    const rect = volumeBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    let newVolume = clickX / width;
    
    if (newVolume < 0) newVolume = 0;
    if (newVolume > 1) newVolume = 1;
    
    state.volume = newVolume;
    audio.volume = newVolume;
    updateVolumeSlider(newVolume);
}

function seekProgress(e) {
    if (!audio.src) return;
    
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = clickX / width;
    
    const duration = audio.duration;
    if (duration) {
        audio.currentTime = clickPercent * duration;
    }
}

// ----------------------------------------------------
// AUDIO LISTENERS
// ----------------------------------------------------
function setupAudioListeners() {
    // Timeupdate
    audio.addEventListener('timeupdate', () => {
        const curTime = audio.currentTime;
        const duration = audio.duration;
        
        if (duration) {
            const percent = (curTime / duration) * 100;
            progressBarFill.style.width = `${percent}%`;
            timeCurrent.textContent = formatTime(curTime);
        }
    });
    
    // Loaded Metadata
    audio.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(audio.duration);
    });
    
    // Track Ended
    audio.addEventListener('ended', () => {
        if (state.isRepeat === 'one') {
            audio.currentTime = 0;
            playAudio();
        } else {
            nextTrack();
        }
    });
}

// ----------------------------------------------------
// LIKE/FAVORITE MANAGEMENT
// ----------------------------------------------------
function toggleLikeTrack(event, trackId) {
    if (event) event.stopPropagation(); // prevent playing when double click or click row
    
    const isLiked = state.likedTrackIds.has(trackId);
    
    if (isLiked) {
        state.likedTrackIds.delete(trackId);
    } else {
        state.likedTrackIds.add(trackId);
    }
    
    // Save to localStorage
    localStorage.setItem('vibify_liked_tracks', JSON.stringify([...state.likedTrackIds]));
    
    // Update Sidebar & Current Views
    updateLikedSongsSidebar();
    
    // If we are currently playing this song, update player bar like status
    const currentActive = getCurrentTrack();
    if (currentActive && currentActive.id === trackId) {
        if (!isLiked) {
            playerTrackLike.className = 'player-track-like liked';
            playerTrackLike.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            playerTrackLike.className = 'player-track-like';
            playerTrackLike.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    }
    
    // If in playlist detail view (especially Liked Songs), redraw
    if (state.currentView === 'playlist') {
        renderPlaylistView(state.activePlaylistId);
    } else if (state.currentView === 'home') {
        // Redraw lists
    } else if (state.currentView === 'search') {
        performSearch();
    }
}

function updateLikedSongsSidebar() {
    sidebarLikedCount.textContent = state.likedTrackIds.size;
}

// ----------------------------------------------------
// SEARCH FUNCTIONALITY
// ----------------------------------------------------
function setupSearchListeners() {
    searchInput.addEventListener('input', () => {
        performSearch();
    });
}

function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        searchResultsSection.style.display = 'none';
        searchBrowseSection.style.display = 'grid';
        return;
    }
    
    searchBrowseSection.style.display = 'none';
    searchResultsSection.style.display = 'flex';
    
    const filteredTracks = tracks.filter(t => 
        t.title.toLowerCase().includes(query) || 
        t.artist.toLowerCase().includes(query) || 
        t.album.toLowerCase().includes(query)
    );
    
    searchResultsTableBody.innerHTML = '';
    
    if (filteredTracks.length === 0) {
        searchResultsTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="empty-state">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h3>No results found</h3>
                    <p>Try checking the spelling or typing another artist.</p>
                </td>
            </tr>
        `;
    } else {
        filteredTracks.forEach((track, index) => {
            const row = document.createElement('tr');
            row.className = 'track-row';
            
            const isCurrentlyPlayingThisTrack = state.isPlaying && getCurrentTrack() && getCurrentTrack().id === track.id;
            const isActiveTrack = getCurrentTrack() && getCurrentTrack().id === track.id;
            
            if (isActiveTrack) {
                row.classList.add('active-track');
            }
            
            const isLiked = state.likedTrackIds.has(track.id);
            
            row.innerHTML = `
                <td class="track-cell track-number">
                    <span class="number-text">${index + 1}</span>
                    <button class="row-play-btn" onclick="playSearchResult('${track.id}')">
                        <i class="fa-solid ${isCurrentlyPlayingThisTrack ? 'fa-pause' : 'fa-play'}"></i>
                    </button>
                </td>
                <td class="track-cell track-meta-cell">
                    <img src="${track.cover}" alt="${track.title}" class="track-thumb">
                    <div class="track-details">
                        <span class="track-title">${track.title}</span>
                        <span class="track-artist">${track.artist}</span>
                    </div>
                </td>
                <td class="track-cell track-album album-col">${track.album}</td>
                <td class="track-cell track-actions">
                    <button class="track-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeTrack(event, '${track.id}')">
                        <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </td>
                <td class="track-cell track-duration">${track.duration}</td>
            `;
            
            row.addEventListener('dblclick', () => {
                playSearchResult(track.id);
            });
            
            searchResultsTableBody.appendChild(row);
        });
    }
}

function playSearchResult(trackId) {
    // Playing from search puts all search results as the play queue
    const query = searchInput.value.trim().toLowerCase();
    const filteredTracks = tracks.filter(t => 
        t.title.toLowerCase().includes(query) || 
        t.artist.toLowerCase().includes(query)
    );
    
    state.currentPlaylist = filteredTracks;
    const index = filteredTracks.findIndex(t => t.id === trackId);
    
    if (index !== -1) {
        state.currentTrackIndex = index;
        loadAndPlayTrack();
    }
}

// ----------------------------------------------------
// VISUALIZER AND AUDIO PROCESSING
// ----------------------------------------------------
function initAudioContext() {
    if (isAudioContextInitialized) return;
    
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        
        // Create source node
        const sourceNode = audioContext.createMediaElementSource(audio);
        
        // Create analyser node
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        
        // Connect nodes
        sourceNode.connect(analyser);
        analyser.connect(audioContext.destination);
        
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        
        isAudioContextInitialized = true;
        console.log("AudioContext & AnalyserNode initialized successfully.");
    } catch (e) {
        console.warn("Could not initialize Web Audio Context (usually due to CORS or local environment restrictions):", e);
    }
}

function startVisualizerAnimation() {
    if (!visualizerCanvas) return;
    
    // Ensure animation is stopped before starting a new one
    stopVisualizerAnimation();
    
    const ctx = visualizerCanvas.getContext('2d');
    const width = visualizerCanvas.width = visualizerCanvas.parentElement.clientWidth;
    const height = visualizerCanvas.height = visualizerCanvas.parentElement.clientHeight;
    
    function draw() {
        visualizerAnimationId = requestAnimationFrame(draw);
        
        // Check if visualizer is open
        if (!visualizerOverlay.classList.contains('active')) return;
        
        // Clear canvas with subtle transparency for trails
        ctx.fillStyle = 'rgba(6, 6, 8, 0.2)';
        ctx.fillRect(0, 0, width, height);
        
        if (isAudioContextInitialized && analyser && state.isPlaying) {
            // Web Audio Visualizer
            analyser.getByteFrequencyData(dataArray);
            
            const barWidth = (width / dataArray.length) * 1.5;
            let x = 0;
            
            for (let i = 0; i < dataArray.length; i++) {
                const barHeight = (dataArray[i] / 255) * height * 0.8;
                
                // Color gradient (Red and Yellow)
                const percent = i / dataArray.length;
                const r = Math.floor(255 - percent * 100);
                const g = Math.floor(59 + percent * 170);
                const b = Math.floor(48 - percent * 48);
                
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                
                // Rounded bars
                ctx.beginPath();
                ctx.roundRect(x, height - barHeight, barWidth - 2, barHeight, [4, 4, 0, 0]);
                ctx.fill();
                
                x += barWidth;
            }
        } else {
            // Simulated beats visualizer when Web Audio fails (CORS fallback)
            const numBars = 32;
            const barWidth = width / numBars;
            let x = 0;
            const curTime = Date.now() * 0.005;
            
            for (let i = 0; i < numBars; i++) {
                let barHeight = 0;
                
                if (state.isPlaying) {
                    // Make a waving motion modulated by sine/cosine
                    const wave = Math.sin(curTime + i * 0.5) * Math.cos(curTime * 0.7 + i * 0.2);
                    barHeight = (Math.abs(wave) * 0.6 + 0.1) * height * 0.7;
                } else {
                    barHeight = 5; // Flat line when paused
                }
                
                const percent = i / numBars;
                const r = Math.floor(255 - percent * 100);
                const g = Math.floor(59 + percent * 170);
                const b = Math.floor(48 - percent * 48);
                
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                
                ctx.beginPath();
                ctx.roundRect(x, height - barHeight, barWidth - 4, barHeight, [4, 4, 0, 0]);
                ctx.fill();
                
                x += barWidth;
            }
        }
    }
    
    // Resume audio context if suspended
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    draw();
}

function stopVisualizerAnimation() {
    if (visualizerAnimationId) {
        cancelAnimationFrame(visualizerAnimationId);
        visualizerAnimationId = null;
    }
}

// ----------------------------------------------------
// DOM GENERATORS & GRID BUILDERS
// ----------------------------------------------------
function renderHomeGrids() {
    // 2025 Tracks Grid
    const tracks2025 = tracks.filter(t => t.folder === '2025');
    grid2025.innerHTML = '';
    tracks2025.forEach(track => {
        grid2025.appendChild(createMusicCard(track, '2025'));
    });
    
    // Ilayaraja Tracks Grid
    const tracksIlayaraja = tracks.filter(t => t.folder === 'Ilayaraja');
    gridIlayaraja.innerHTML = '';
    tracksIlayaraja.forEach(track => {
        gridIlayaraja.appendChild(createMusicCard(track, 'ilayaraja'));
    });

    // 1999 Melodies Grid
    const tracks1999melo = tracks.filter(t => t.folder === '1999melo');
    grid1999melo.innerHTML = '';
    tracks1999melo.forEach(track => {
        grid1999melo.appendChild(createMusicCard(track, '1999melo'));
    });
}

function createMusicCard(track, playlistId) {
    const card = document.createElement('div');
    card.className = 'music-card';
    
    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${track.cover}" alt="${track.title}" class="card-img">
            <button class="card-play-btn"><i class="fa-solid fa-play"></i></button>
        </div>
        <div class="card-title">${track.title}</div>
        <div class="card-artist">${track.artist}</div>
    `;
    
    // Card playing trigger
    card.addEventListener('click', () => {
        navigateTo('playlist', playlistId);
    });
    
    const playBtn = card.querySelector('.card-play-btn');
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop navigation
        playTrackFromList(track.id, playlistId);
    });
    
    return card;
}

// ----------------------------------------------------
// EVENT LISTENERS SETUP
// ----------------------------------------------------
function setupControlListeners() {
    // Play/Pause
    btnPlayPause.addEventListener('click', togglePlayPause);
    
    // Prev / Next
    btnPrev.addEventListener('click', prevTrack);
    btnNext.addEventListener('click', nextTrack);
    
    // Shuffle / Repeat
    btnShuffle.addEventListener('click', toggleShuffle);
    btnRepeat.addEventListener('click', toggleRepeat);
    
    // Seeking Progress Bar
    progressBarContainer.addEventListener('click', seekProgress);
    
    // Drag seeking progress (optional enhancement)
    let isProgressDragging = false;
    progressBarContainer.addEventListener('mousedown', () => { isProgressDragging = true; });
    document.addEventListener('mouseup', () => { isProgressDragging = false; });
    document.addEventListener('mousemove', (e) => {
        if (isProgressDragging) seekProgress(e);
    });
    
    // Volume Control Mute/Unmute
    let prevVolume = state.volume;
    btnVolumeMute.addEventListener('click', () => {
        if (audio.volume > 0) {
            prevVolume = state.volume;
            state.volume = 0;
            audio.volume = 0;
            updateVolumeSlider(0);
        } else {
            state.volume = prevVolume > 0 ? prevVolume : 0.7;
            audio.volume = state.volume;
            updateVolumeSlider(state.volume);
        }
    });
    
    volumeBarContainer.addEventListener('click', seekVolume);
    
    // Drag volume
    let isVolumeDragging = false;
    volumeBarContainer.addEventListener('mousedown', () => { isVolumeDragging = true; });
    document.addEventListener('mouseup', () => { isVolumeDragging = false; });
    document.addEventListener('mousemove', (e) => {
        if (isVolumeDragging) seekVolume(e);
    });
    
    // Player Like Button
    playerTrackLike.addEventListener('click', () => {
        const activeTrack = getCurrentTrack();
        if (activeTrack) {
            toggleLikeTrack(null, activeTrack.id);
        }
    });
    
    // Playlist big play button
    btnPlayPlaylist.addEventListener('click', () => {
        if (state.activePlaylistId) {
            const playlistTracks = tracks.filter(t => {
                if (state.activePlaylistId === '2025') return t.folder === '2025';
                if (state.activePlaylistId === 'ilayaraja') return t.folder === 'Ilayaraja';
                if (state.activePlaylistId === '1999melo') return t.folder === '1999melo';
                if (state.activePlaylistId === 'liked') return state.likedTrackIds.has(t.id);
                return false;
            });
            
            if (playlistTracks.length > 0) {
                // Check if currently playing a song from this playlist
                const activeTrack = getCurrentTrack();
                const belongsToPlaylist = activeTrack && playlistTracks.some(t => t.id === activeTrack.id);
                
                if (belongsToPlaylist) {
                    togglePlayPause();
                } else {
                    // Play first song of playlist
                    state.currentPlaylist = playlistTracks;
                    state.currentTrackIndex = 0;
                    loadAndPlayTrack();
                }
            }
        }
    });
}

function setupNavigationListeners() {
    // Navigation
    navHome.addEventListener('click', () => navigateTo('home'));
    navSearch.addEventListener('click', () => navigateTo('search'));
    logoLink.addEventListener('click', () => navigateTo('home'));
    
    // Library sidebar Shortcuts
    libraryLikedSongs.addEventListener('click', () => navigateTo('playlist', 'liked'));
    library2025.addEventListener('click', () => navigateTo('playlist', '2025'));
    libraryIlayaraja.addEventListener('click', () => navigateTo('playlist', 'ilayaraja'));
    library1999melo.addEventListener('click', () => navigateTo('playlist', '1999melo'));
    
    // Mobile Bottom Navigation Links
    mobileNavHome.addEventListener('click', () => navigateTo('home'));
    mobileNavSearch.addEventListener('click', () => navigateTo('search'));
    mobileNavLibrary.addEventListener('click', () => navigateTo('playlist', 'liked'));
    
    // History Back/Forward
    btnHistoryBack.addEventListener('click', navigateBack);
    btnHistoryForward.addEventListener('click', navigateForward);
    
    // Create Playlist (Alert placeholder for premium feel)
    document.getElementById('btnCreatePlaylist').addEventListener('click', () => {
        alert("Vibify Premium features: Creating custom playlists will be available in the next release!");
    });
    
    // Home view see all/quick play triggers
    document.getElementById('seeAll2025').addEventListener('click', () => navigateTo('playlist', '2025'));
    document.getElementById('seeAllIlayaraja').addEventListener('click', () => navigateTo('playlist', 'ilayaraja'));
    document.getElementById('seeAll1999melo').addEventListener('click', () => navigateTo('playlist', '1999melo'));
    
    browseCard2025.addEventListener('click', () => navigateTo('playlist', '2025'));
    browseCardIlayaraja.addEventListener('click', () => navigateTo('playlist', 'ilayaraja'));
    
    // Quick Cards play triggers
    quickCardLiked.addEventListener('click', () => navigateTo('playlist', 'liked'));
    quickCard2025.addEventListener('click', () => navigateTo('playlist', '2025'));
    quickCardIlayaraja.addEventListener('click', () => navigateTo('playlist', 'ilayaraja'));
    quickCard1999melo.addEventListener('click', () => navigateTo('playlist', '1999melo'));
    
    quickPlayLiked.addEventListener('click', (e) => { e.stopPropagation(); playPlaylistFirstTrack('liked'); });
    quickPlay2025.addEventListener('click', (e) => { e.stopPropagation(); playPlaylistFirstTrack('2025'); });
    quickPlayIlayaraja.addEventListener('click', (e) => { e.stopPropagation(); playPlaylistFirstTrack('ilayaraja'); });
    quickPlay1999melo.addEventListener('click', (e) => { e.stopPropagation(); playPlaylistFirstTrack('1999melo'); });
    
    // Visualizer overlay toggles
    btnToggleVisualizer.addEventListener('click', () => {
        visualizerOverlay.classList.toggle('active');
        if (visualizerOverlay.classList.contains('active')) {
            startVisualizerAnimation();
            btnToggleVisualizer.classList.add('active');
        } else {
            btnToggleVisualizer.classList.remove('active');
        }
    });
    
    visualizerCloseBtn.addEventListener('click', () => {
        visualizerOverlay.classList.remove('active');
        btnToggleVisualizer.classList.remove('active');
    });
}

function playPlaylistFirstTrack(playlistId) {
    let playlistTracks = [];
    if (playlistId === '2025') playlistTracks = tracks.filter(t => t.folder === '2025');
    else if (playlistId === 'ilayaraja') playlistTracks = tracks.filter(t => t.folder === 'Ilayaraja');
    else if (playlistId === '1999melo') playlistTracks = tracks.filter(t => t.folder === '1999melo');
    else if (playlistId === 'liked') playlistTracks = tracks.filter(t => state.likedTrackIds.has(t.id));
    
    if (playlistTracks.length > 0) {
        state.currentPlaylist = playlistTracks;
        state.currentTrackIndex = 0;
        loadAndPlayTrack();
    } else {
        alert("This playlist has no songs yet!");
    }
}

// Start application
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', () => {
    // Redraw visualizer on window resize if active
    if (visualizerOverlay.classList.contains('active')) {
        startVisualizerAnimation();
    }
});
