import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" passHref legacyBehavior>
                <a className="nav-link">Catálogo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" passHref legacyBehavior>
                <a className="nav-link">Novo</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
