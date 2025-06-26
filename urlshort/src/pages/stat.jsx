import React, { useEffect, useState } from 'react';
import { Log } from '../utils/log';

export default function StatsPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const all = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
    setUrls(all);
    Log("frontend", "info", "page", "Visited stats page");
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>URL Stats</h2>
      {urls.length === 0 ? <p>No data found</p> : urls.map((url, idx) => (
        <div key={idx}>
          <p><b>Original:</b> {url.original}</p>
          <p><b>Short:</b> {url.short}</p>
          <p><b>Expiry:</b> {url.expiry}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
