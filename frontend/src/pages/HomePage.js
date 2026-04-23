import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.grid}></div>
      <div style={{...styles.orb, top: '20%', left: '15%', background: 'rgba(0,255,150,0.08)'}}></div>
      <div style={{...styles.orb, bottom: '20%', right: '15%', background: 'rgba(0,229,255,0.06)'}}></div>

      <div style={{...styles.content, animation: 'fadeInUp 0.8s ease forwards'}}>
        <div style={styles.badge}>⚡ SRM Institute · Full Stack Development</div>
        <h1 style={{...styles.title, animation: 'float 4s ease-in-out infinite'}}>TEAM FOUR</h1>
        <div style={styles.underline}></div>
        <p style={styles.subtitle}>Welcome to the FOUR Team Management System</p>
        <p style={styles.desc}>
          Manage your team members, track internships, certifications, and projects — all in one place.
        </p>

        <div style={styles.card}>
          <p style={styles.cardLabel}>🚀 Manage Team</p>
          <div style={styles.buttons}>
            <Link to="/add" className="btn-hover" style={styles.btnPrimary}>➕ Add Member</Link>
            <Link to="/view" className="btn-hover" style={styles.btnSecondary}>👥 View Members</Link>
          </div>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.stat}>
            <span style={styles.statNum}>React</span>
            <span style={styles.statLabel}>Frontend</span>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.stat}>
            <span style={styles.statNum}>Node.js</span>
            <span style={styles.statLabel}>Backend</span>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.stat}>
            <span style={styles.statNum}>MongoDB</span>
            <span style={styles.statLabel}>Database</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#070714', position: 'relative', overflow: 'hidden', padding: '2rem' },
  grid: { position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,255,150,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,150,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px', pointerEvents: 'none' },
  orb: { position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' },
  content: { position: 'relative', textAlign: 'center', maxWidth: '680px', width: '100%' },
  badge: { display: 'inline-block', background: 'rgba(0,255,150,0.08)', border: '1px solid rgba(0,255,150,0.25)', color: '#00ff96', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.78rem', letterSpacing: '1px', marginBottom: '1.5rem' },
  title: { fontFamily: "'Orbitron', sans-serif", fontSize: '4.5rem', fontWeight: '900', letterSpacing: '8px', background: 'linear-gradient(135deg, #00ff96 0%, #00e5ff 50%, #00ff96 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.8rem' },
  underline: { width: '80px', height: '3px', background: 'linear-gradient(90deg, #00ff96, #00e5ff)', margin: '0 auto 1.5rem', borderRadius: '2px' },
  subtitle: { color: '#888', fontSize: '1.05rem', letterSpacing: '1px', marginBottom: '0.8rem' },
  desc: { color: '#444', fontSize: '0.88rem', lineHeight: '1.7', margin: '0 auto 2.5rem', maxWidth: '480px' },
  card: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,255,150,0.15)', borderRadius: '20px', padding: '2rem 3rem', marginBottom: '2rem', backdropFilter: 'blur(10px)' },
  cardLabel: { color: '#555', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.2rem' },
  buttons: { display: 'flex', gap: '1rem', justifyContent: 'center' },
  btnPrimary: { background: 'linear-gradient(135deg, #00ff96, #00b894)', color: '#000', padding: '0.85rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' },
  btnSecondary: { background: 'transparent', color: '#00ff96', padding: '0.85rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', border: '1px solid rgba(0,255,150,0.4)', letterSpacing: '0.5px' },
  statsRow: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' },
  stat: { display: 'flex', flexDirection: 'column', gap: '0.3rem' },
  statNum: { color: '#00ff96', fontWeight: '700', fontSize: '0.95rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1px' },
  statLabel: { color: '#444', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' },
  statDivider: { width: '1px', height: '30px', background: 'rgba(0,255,150,0.15)' },
};

export default HomePage;