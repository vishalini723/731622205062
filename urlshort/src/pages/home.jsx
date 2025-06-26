import React from 'react';
import UrlShortenerForm from '../components/form';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>URL Shortener</h2>
      <UrlShortenerForm />
    </div>
  );
}