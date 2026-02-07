import React from 'react'
import './App.css'

const App = () => {
  const streamers = [
    {
      id: 1,
      name: 'Kavya',
      views: '231,296',
      label: 'Lonely Beauty',
      labelColor: 'blue-purple',
      hasPromoText: true,
      promoText: ['REAL HOSTS STREAMERS', 'DATE CHAT INTERACT']
    },
    {
      id: 2,
      name: 'Priya',
      views: '93,224',
      label: 'Charming Lady',
      labelColor: 'orange'
    },
    {
      id: 3,
      name: 'Radhika',
      views: '981,665',
      label: 'Interactive Live Show',
      labelColor: 'pink'
    },
    {
      id: 4,
      name: 'Sneha',
      views: '156,432',
      label: 'Lonely Beauty',
      labelColor: 'blue-purple'
    },
    {
      id: 5,
      name: 'Meera',
      views: '89,123',
      label: 'Wild Girl',
      labelColor: 'orange'
    },
    {
      id: 6,
      name: 'Ananya',
      views: '234,567',
      label: 'Charming Lady',
      labelColor: 'pink'
    }
  ]

  return (
    <div className="app">
      {/* Top Header */}
      <header className="top-header">
        <div className="header-content">
          <div className="logo">CHAMAKZ</div>
          <div className="header-text">Meet beautiful streamers. Watch Anytime</div>
          <a 
            href="https://play.google.com/store/apps/details?id=com.chamakz.app&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="open-btn"
          >
            OPEN APP
          </a>
        </div>
      </header>

      {/* For You Section */}
      <section className="for-you-section">
        <h2 className="for-you-title">For You</h2>
      </section>

      {/* Main Content Grid */}
      <section className="content-grid">
        {streamers.map((streamer) => (
          <a 
            key={streamer.id} 
            href="https://play.google.com/store/apps/details?id=com.chamakz.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="streamer-card"
          >
            <div className="card-image">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="card-video"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = e.target.nextSibling
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              >
                <source src={`/images/streamer-${streamer.id}.mp4`} type="video/mp4" />
                <source src={`/images/streamer-${streamer.id}.webm`} type="video/webm" />
                <source src={`/images/streamer-${streamer.id}.ogg`} type="video/ogg" />
              </video>
              <div className="video-placeholder">
                <span>{streamer.name}</span>
              </div>
              
              {/* Label Overlay */}
              <div className={`card-label ${streamer.labelColor}`}>
                {streamer.label}
              </div>

              {/* Promotional Text Overlay */}
              {streamer.hasPromoText && (
                <div className="promo-text">
                  <div className="promo-line">{streamer.promoText[0]}</div>
                  <div className="promo-line">{streamer.promoText[1]}</div>
                </div>
              )}

              {/* User Info */}
              <div className="user-info">
                <div className="profile-section">
                  <div className="profile-pic">
                    <img 
                      src={`/images/profile-${streamer.id}.jpg`} 
                      alt={streamer.name}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="user-details">
                    <span className="user-name">{streamer.name}</span>
                    <span className="views">
                      <span className="flame-icon">🔥</span>
                      {streamer.views}
                    </span>
                  </div>
                </div>
                <div className="action-icons">
                  <span className="heart-icon">❤️</span>
                  <span className="audio-icon">🎵</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Bottom Banner */}
      <footer className="bottom-banner">
        <div className="banner-content">
          <div className="banner-left">
            <div className="banner-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#gradient1)"/>
                <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#FF6B35"/>
                    <stop offset="100%" stopColor="#9B59B6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="banner-text-small">chamakz.app</div>
          </div>
          <div className="banner-center">
            <div className="banner-text">Meet beautiful streamers.</div>
            <div className="banner-text">Watch Anytime for Free</div>
          </div>
          <a 
            href="https://play.google.com/store/apps/details?id=com.chamakz.app&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-btn"
          >
            DOWNLOAD
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
