
# YouTube Clone - Frontend

This project is a YouTube clone built with modern web technologies, aiming to replicate core features of the popular video-sharing platform.

## Features
- User authentication
- Video browsing and search
- Video playback with custom controls
- Video upload and management
- Channel pages
- Like, dislike, and comment on videos
- Subscribe to channels
- Responsive design for various screen sizes

## Technologies Used

### Frontend
- React.js
- TailwindCSS for styling
- ShadCN UI components
- Redux for state management
- Redux Toolkit for efficient Redux development
- Axios for API requests
- React Router for navigation
- React Player for video playback

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for object modeling
- JWT for authentication

### Additional Tools
- Vite for fast development and building

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/NarayananM264059/YT_MERN.git
```

### Install Dependencies
```bash
cd youtube-clone-client
npm install
```

### Start the Development Server
```bash
npm run dev
```

### Open in Browser
Open [http://localhost:5173](http://localhost:5173) in your browser.

# YouTube Clone - Backend

## Repository Deployment

### Description
This is the backend for the YouTube clone project.

## Installation

### Prerequisites
- Node.js v14.17.0 or higher
- MongoDB v4.2.0 or higher

### Install Dependencies
```bash
cd server
npm install
```



### Run the Server
```bash
npm start
```

## Usage

### Routes
You can use the following routes in your frontend:

- **Signup route**: `api/user/signup`
- **Login route**: `api/user/signin`
- **Upload video route**: `api/video/upload`
- **Get videos route**: `api/videos`
- **Get user videos route**: `api/videos/channel/:channelId`
- **Get video route**: `api/video/:videoId`
- **Delete video route**: `api/video/delete/:videoId`
- **Edit video route**: `api/video/edit/:videoId`
- **Get channel route**: `api/channel/:handle`
- **Get channels route**: `api/channel`
- **Get channel videos route**: `api/videos/channel/:channelId`
- **Create comment route**: `api/comment/create/:videoId`
- **Get comments route**: `api/comments/:videoId`
- **Edit comment route**: `api/comment/edit/:videoId`
- **Delete comment route**: `api/comment/delete/:commentId`
- **Like video route**: `api/video/like/:videoId`
- **Unlike video route**: `api/video/unlike/:videoId`
- **Dislike video route**: `api/video/dislike/:videoId`
- **Undislike video route**: `api/video/undodislike/:videoId`
- **Subscribe channel route**: `api/channel/subscribe/:channelId`
- **Unsubscribe channel route**: `api/channel/unsubscribe/:channelId`
- **Upload avatar route**: `api/upload/avatar`
- **Upload banner route**: `api/upload/banner/:channelId`
- **Increase view count route**: `api/video/view/:videoId`

### Route Method and Sign-in Requirement
| Route                              | Method | Sign-in Required |
|------------------------------------|--------|------------------|
| api/user/signup                     | POST   | No               |
| api/user/signin                     | POST   | No               |
| api/user                            | GET    | Yes              |
| api/channel/create                  | POST   | Yes              |
| api/channel/:handle                 | GET    | No               |
| api/channel                         | GET    | Yes              |
| api/channelbyid/:id                | GET    | No               |
| api/video/upload                    | POST   | Yes              |
| api/video/:videoId                  | GET    | No               |
| api/videos                          | GET    | No               |
| api/videos/channel/:channelId       | GET    | Yes              |
| api/video/delete/:videoId           | DELETE | Yes              |
| api/video/edit/:videoId             | PUT    | Yes              |
| api/comment/create/:videoId         | POST   | Yes              |
| api/comments/:videoId               | GET    | No               |
| api/comment/edit/:videoId           | PUT    | Yes              |
| api/comment/delete/:commentId       | DELETE | Yes              |
| api/video/like/:videoId            | POST   | Yes              |
| api/video/unlike/:videoId           | DELETE | Yes              |
| api/video/dislike/:videoId          | POST   | Yes              |
| api/video/undodislike/:videoId      | DELETE | Yes              |
| api/channel/subscribe/:channelId    | POST   | Yes              |
| api/channel/unsubscribe/:channelId   | DELETE | Yes              |
| api/upload/avatar                   | POST   | Yes              |
| api/upload/banner/:channelId        | POST   | Yes              |
| api/video/view/:videoId             | GET    | No               |

---


