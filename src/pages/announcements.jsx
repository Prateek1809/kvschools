// File: Announcements.js
import React from 'react';

const announcements = [
  {
    title: 'Advertisement for the post of Bus Driver',
    date: '28th August 2025',
    description: 'Advertisement for the post of Bus Driver',
    links: [
      { text: 'advertisement bus driver 28082025', href: '#' }
    ]
  },
  {
    title: 'Advertisement for the Post of Doctor',
    date: '28th August 2025',
    description: 'Advertisement for the Post of Doctor',
    links: [
      { text: 'advertisement for the post of doctor', href: '#' }
    ]
  },
  {
    title: 'Admission Notice for Classes I to IX for Session 2025-26',
    date: '6th March 2025',
    description: 'Admission Notice for Classes I to IX for Session 2025-26',
    links: [
      { text: 'admission notice 2025-26', href: '#' },
      { text: 'admission form 2025-26', href: '#' },
      { text: 'registration form 2025-26', href: '#' }
    ]
  },
  {
    title: 'Registration Form Download',
    date: '6th March 2025',
    description: 'Registration Form Download',
    links: []
  }
];

const Announcements = () => {
  return (
    <div className="container mt-4">
      <div className="bg-secondary text-white p-2 mb-4">
        <h4>Announcements</h4>
      </div>

      {announcements.map((item, index) => (
        <div key={index} className="mb-4 border-bottom pb-3">
          <h5>{item.title}</h5>
          <small className="text-muted">Published on <strong>{item.date}</strong></small>
          <p className="mt-2">{item.description}</p>
          <ul>
            {item.links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
