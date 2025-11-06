import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from 'remotion';

const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleScale = spring({
    frame,
    fps,
    config: {
      damping: 100,
    },
  });

  const fadeOut = interpolate(frame, [280, 300], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1e3a8a',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
          textAlign: 'center',
          padding: '60px',
        }}
      >
        <div style={{
          fontSize: 80,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 30,
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
        }}>
          🏠
        </div>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            marginBottom: 20,
            lineHeight: 1.2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          राष्ट्रीय आवास सहायता कार्यक्रम
        </h1>
        <p
          style={{
            fontSize: 42,
            color: '#93c5fd',
            margin: 0,
          }}
        >
          नागरिकों के लिए आवास सहायता
        </p>
      </div>
    </AbsoluteFill>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20, 280, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const iconScale = spring({
    frame: frame - 10,
    fps: 30,
    config: {
      damping: 100,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0f766e',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px', maxWidth: '1400px' }}>
        <div style={{
          fontSize: 100,
          marginBottom: 40,
          transform: `scale(${iconScale})`,
        }}>
          📋
        </div>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 50,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          कार्यक्रम के बारे में
        </h2>
        <div style={{
          fontSize: 40,
          color: '#ccfbf1',
          lineHeight: 1.8,
          textAlign: 'left',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '40px',
          borderRadius: '20px',
        }}>
          <p style={{ margin: '20px 0' }}>✓ पात्र नागरिकों को आवास खरीदने या निर्माण में सहायता</p>
          <p style={{ margin: '20px 0' }}>✓ आर्थिक सहायता और सब्सिडी प्रदान करता है</p>
          <p style={{ margin: '20px 0' }}>✓ सभी के लिए किफायती आवास का लक्ष्य</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20, 280, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#7c2d12',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px', maxWidth: '1400px' }}>
        <div style={{ fontSize: 100, marginBottom: 40 }}>👥</div>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 50,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          कौन आवेदन कर सकता है?
        </h2>
        <div style={{
          fontSize: 40,
          color: '#fed7aa',
          lineHeight: 1.8,
          textAlign: 'left',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '40px',
          borderRadius: '20px',
        }}>
          <p style={{ margin: '20px 0' }}>✓ आर्थिक रूप से कमजोर वर्ग के नागरिक</p>
          <p style={{ margin: '20px 0' }}>✓ निम्न और मध्यम आय वाले परिवार</p>
          <p style={{ margin: '20px 0' }}>✓ जिनके पास पक्का मकान नहीं है</p>
          <p style={{ margin: '20px 0' }}>✓ आय प्रमाणपत्र और पहचान पत्र आवश्यक</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20, 280, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#4c1d95',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px', maxWidth: '1400px' }}>
        <div style={{ fontSize: 100, marginBottom: 40 }}>💻</div>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 50,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          ऑनलाइन आवेदन कैसे करें?
        </h2>
        <div style={{
          fontSize: 38,
          color: '#e9d5ff',
          lineHeight: 1.8,
          textAlign: 'left',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '40px',
          borderRadius: '20px',
        }}>
          <p style={{ margin: '20px 0' }}>1️⃣ आधिकारिक वेबसाइट पर जाएं</p>
          <p style={{ margin: '20px 0' }}>2️⃣ ऑनलाइन आवेदन फॉर्म भरें</p>
          <p style={{ margin: '20px 0' }}>3️⃣ आवश्यक दस्तावेज अपलोड करें</p>
          <p style={{ margin: '20px 0' }}>4️⃣ आवेदन जमा करें और रसीद प्राप्त करें</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20, 280, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#065f46',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px', maxWidth: '1400px' }}>
        <div style={{ fontSize: 100, marginBottom: 40 }}>⭐</div>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 50,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          प्रमुख लाभ
        </h2>
        <div style={{
          fontSize: 40,
          color: '#d1fae5',
          lineHeight: 1.8,
          textAlign: 'left',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '40px',
          borderRadius: '20px',
        }}>
          <p style={{ margin: '20px 0' }}>✓ वित्तीय सहायता और सब्सिडी</p>
          <p style={{ margin: '20px 0' }}>✓ कम ब्याज दर पर ऋण</p>
          <p style={{ margin: '20px 0' }}>✓ सरल और पारदर्शी प्रक्रिया</p>
          <p style={{ margin: '20px 0' }}>✓ सुरक्षित आवास का अधिकार</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 100,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1e40af',
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: '60px',
        transform: `scale(${scale})`,
      }}>
        <div style={{ fontSize: 120, marginBottom: 40 }}>🏡</div>
        <h2
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 40,
            lineHeight: 1.3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          अपने सपनों का घर पाएं
        </h2>
        <p style={{
          fontSize: 44,
          color: '#bfdbfe',
          marginBottom: 50,
        }}>
          आज ही ऑनलाइन आवेदन करें
        </p>
        <div style={{
          fontSize: 32,
          color: '#dbeafe',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '30px 60px',
          borderRadius: '15px',
          display: 'inline-block',
        }}>
          यह एक शैक्षिक वीडियो है<br/>
          अधिक जानकारी के लिए आधिकारिक वेबसाइट देखें
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const HousingExplainer: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={300}>
        <Scene1 />
      </Sequence>
      <Sequence from={300} durationInFrames={300}>
        <Scene2 />
      </Sequence>
      <Sequence from={600} durationInFrames={300}>
        <Scene3 />
      </Sequence>
      <Sequence from={900} durationInFrames={300}>
        <Scene4 />
      </Sequence>
      <Sequence from={1200} durationInFrames={300}>
        <Scene5 />
      </Sequence>
      <Sequence from={1500} durationInFrames={300}>
        <Scene6 />
      </Sequence>
    </AbsoluteFill>
  );
};
