import { useState, useEffect } from 'react';
import './App.css';

interface ProfileData {
  name: string;
  title: string;
}

function App() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    if (chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((request) => {
        if (request.action === "PROFILE_DATA") {
          setProfileData(request.data);
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <h1>LinkedIn Time Machine</h1>
      {profileData ? (
        <div>
          <h2>{profileData.name}</h2>
          <p>{profileData.title}</p>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
}

export default App;
