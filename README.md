# React Redux Music Player

This project is a comprehensive React application that replicates a music player interface. Additionally, it includes a MusicUploadForm component for users to upload music files from their computer. The application is built with Create React App and utilizes Redux for state management.

## Overview
The application consists of several React components, including SongList, SongRow, PlayAllButton, AddAllButton, and MusicUploadForm. These components work together to create a cohesive music player interface with a simulated music upload feature.

## Component Structure
- SongList: Displays the list of songs.
- SongRow: A subcomponent to render individual song details within SongList.
- PlayAllButton: Initiates playing all songs (simulated).
- AddAllButton: Adds all songs to a queue (simulated).
- MusicUploadForm: A component below the song list for users to upload music files.
- Filter: Search songs by song name or artist
- Sort: Sorting songs by ascending or descending

## State Management
Redux is used for global state management. The state includes the list of songs. Actions and reducers are implemented to handle state updates based on user interactions.

## Features

- Browse and play your favorite music tracks.
- Pause, play, add to queue.
- Manage the playlist with ease.

## Technologies Used

- React.js
- Redux
- HTML
- CSS
- Javascript
- Jest

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-redux-music-player.git

2. Install dependencies:
   ```bash
   npm install
3. Start the development server: 
   ```bash
   npm start
4. Open your browser and go to http://localhost:3000 to view the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
