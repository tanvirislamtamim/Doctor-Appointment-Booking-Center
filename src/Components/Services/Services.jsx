/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import {motion, useInView, animate } from 'framer-motion';

// Counter Animation Component
const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2, // 2 second dhore count hobe
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Services = () => {
  const stats = [
    { id: 1, label: "Total Doctors", value: 199, suffix: "+", icon: "📋" },
    { id: 2, label: "Total Reviews", value: 467, suffix: "+", icon: "⭐" },
    { id: 3, label: "Patients", value: 1900, suffix: "+", icon: "👥" },
    { id: 4, label: "Medical Staff", value: 300, suffix: "+", icon: "🧑‍⚕️" }, // "Stuffs" fixed to "Staff"
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f3f4f6', textAlign: 'center' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>We Provide Best Medical Services</h2>
        <p style={{ color: '#666' }}>Our platform connects you with verified, experienced doctors across various specialties.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#fff',
              padding: '40px 20px',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
            <h3 style={{ fontSize: '2.5rem', margin: '10px 0', color: '#1a1a1a' }}>
              <Counter from={0} to={stat.value} />{stat.suffix}
            </h3>
            <p style={{ color: '#777', fontWeight: '500' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;