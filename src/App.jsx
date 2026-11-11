import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Enviando mensaje...', type: '' });

    emailjs.sendForm('service_xdxaqd4', 'template_uk3674o', formRef.current, 'enCJ5q933DobVphzb')
      .then(() => {
          setStatus({ loading: false, message: '¡Mensaje enviado con éxito!', type: 'success' });
          formRef.current.reset();
      }, () => {
          setStatus({ loading: false, message: 'Error al enviar el mensaje. Inténtalo de nuevo.', type: 'error' });
      });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f4f6f9', padding: '20px', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#1a365d' }}>Contacto - UPATECO</h1>
        <p style={{ color: '#4a5568' }}>Universidad Provincial de Administración de Tecnologías y Oficios</p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
        
        {/* Formulario */}
        <section>
          <h2 style={{ color: '#2b6cb0', marginBottom: '15px' }}>Envíanos un mensaje</h2>
          <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Nombre completo</label>
              <input type="text" name="from_name" required placeholder="Tu nombre" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Correo Electrónico</label>
              <input type="email" name="from_email" required placeholder="tu@email.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Mensaje</label>
              <textarea name="message" rows="5" required placeholder="Escribe tu consulta..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}></textarea>
            </div>

            <button type="submit" disabled={status.loading} style={{ background: '#3182ce', color: 'white', border: 'none', padding: '12px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
              {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status.message && (
              <div style={{ marginTop: '10px', padding: '10px', borderRadius: '6px', textAlign: 'center', background: status.type === 'success' ? '#c6f6d5' : '#fed7d7', color: status.type === 'success' ? '#22543d' : '#742a2a', fontWeight: 'bold' }}>
                {status.message}
              </div>
            )}
          </form>
        </section>

        {/* Mapa */}
        <section>
          <h2 style={{ color: '#2b6cb0', marginBottom: '15px' }}>Nuestra Ubicación</h2>
          <div style={{ width: '100%', height: '100%', minHeight: '350px', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe 
              title="Ubicación UPATECO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.579178229411!2d-65.39414212463065!3d-24.81028717795908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc39110b6d91f%3A0xe54497e16db2c730!2sUPaTeCO!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>

      </main>
    </div>
  );
}