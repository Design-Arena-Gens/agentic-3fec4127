'use client';

import React from 'react';
import { Player } from '@remotion/player';
import { HousingExplainer } from './components/HousingExplainer';

export default function Home() {
  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        color: 'white',
        marginBottom: '20px',
        fontSize: '28px',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        आवास सहायता कार्यक्रम - जानकारी वीडियो
      </h1>
      <div style={{
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        borderRadius: '12px',
        overflow: 'hidden',
        maxWidth: '90%',
        maxHeight: '70vh'
      }}>
        <Player
          component={HousingExplainer}
          durationInFrames={1800}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          controls
          acknowledgeRemotionLicense
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
      <p style={{
        color: 'white',
        marginTop: '20px',
        fontSize: '14px',
        textAlign: 'center',
        opacity: 0.9
      }}>
        यह एक शैक्षिक वीडियो है • कोई राजनीतिक संबद्धता नहीं
      </p>
    </main>
  );
}
