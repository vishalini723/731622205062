import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Log } from '../utils/log';

function Short() {
  return Math.random().toString(36).substring(2, 8);
}

export default function UrlShortenerForm() {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (!url.startsWith("http")) {
      Log("frontend", "error", "component", "Invalid URL");
      alert("Please enter a valid URL.");
      return;
    }

    const code = shortcode || Short();
    const mins = parseInt(validity) || 30;
    const expiry = new Date(Date.now() + mins * 60000).toISOString();

    const data = {
      original: url,
      short: `http://localhost:3000/${code}`,
      expiry
    };

    localStorage.setItem(code, JSON.stringify(data));
    setResult(data);
    Log("frontend", "info", "component", "URL shortened");
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField label="Long URL" value={url} onChange={e => setUrl(e.target.value)} />
      <TextField label="Validity (minutes)" value={validity} onChange={e => setValidity(e.target.value)} />
      <TextField label="Custom Shortcode" value={shortcode} onChange={e => setShortcode(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>

      {result && (
        <div>
          <p><b>Short URL:</b> {result.short}</p>
          <p><b>Expires:</b> {new Date(result.expiry).toLocaleString()}</p>
        </div>
      )}
    </Box>
  );
}