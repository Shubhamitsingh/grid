# Chamakz Landing Page

A mobile-first landing page for Chamakz app, built with React.js and Vite.

## Features

- Responsive mobile layout (max-width: 428px)
- Purple and orange gradient theme
- Streamer cards grid layout with auto-playing videos
- Interactive UI elements
- Video support with autoplay, loop, and muted playback

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Video Setup

Place your videos in the `public/images/` directory with the following naming:
- `streamer-1.mp4` to `streamer-6.mp4` - Main card videos (auto-playing, looped, muted)
- `profile-1.jpg` to `profile-6.jpg` - Profile pictures (optional)

**Video Requirements:**
- Format: MP4 (recommended for best browser compatibility)
- Videos will autoplay, loop, and be muted by default
- Videos should be optimized for web (compressed) for better performance
- The app will show placeholders if videos are not found

**Supported video formats:** MP4, WebM, OGG
