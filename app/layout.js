export const metadata = {
  title: "Pianohaus Trübger – Finanzierungsrechner",
  description: "Edle Finanzierung mit Stil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{
        margin: 0,
        fontFamily: 'sans-serif',
        background: '#fff9f5',
        color: '#2e2e2e',
        padding: '2rem'
      }}>
        <header style={{
          backgroundColor: '#8b0000',
          padding: '1rem',
          textAlign: 'center',
          color: 'gold',
          fontWeight: 'bold',
          fontSize: '2rem',
          borderRadius: '1rem',
          marginBottom: '2rem'
        }}>
          <img src="/logo.png" alt="Pianohaus Trübger" style={{ maxHeight: '80px', marginBottom: '1rem' }} />
          <div>Pianohaus Trübger – Finanzierungsrechner</div>
        </header>
        {children}
      </body>
    </html>
  );
}
