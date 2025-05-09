import React from 'react';

const projects = [
  {
    title: 'Car Racing Game',
    description: 'JavaScript Car Racing Game',
    link: 'https://github.com/hirwapatrick/Car-Race',
    image: '/images/pro3.png'
  },
  {
    title: 'Movie Website',
    description: 'Getagasobanuye Movie Web',
    link: 'https://github.com/hirwapatrick/onlinemovie',
    image: '/images/pro1.png'
  }, 
  {
    title: 'Library Management System',
    description: 'Library Managent System with Php and Bootstrap',
    link: 'https://github.com/hirwapatrick/not-available',
    image: '/images/pro2.png'
  }
];

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Bootstrap',
  'HTML5 & CSS3',
  'Git & GitHub',
  'Node.js basics',
  'PHP & Laravel'
];

function HirwaPatrickPortfolio() {
  return (
    <div>
      {/* Bootstrap CSS CDN */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />

      {/* Custom styles for black and green theme */}
      <style>{`
        body {
          background-color: #000000;
          color: #39b54a;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        a, a:hover, a:focus {
          color: #39b54a;
          text-decoration: none;
          outline: none;
        }
        a:hover, a:focus {
          text-decoration: underline;
        }

        .navbar, footer {
          background-color: #000000 !important;
        }

        .navbar-brand, .nav-link, footer small {
          color: #39b54a !important;
          font-weight: 700;
        }

        .nav-link:hover, .nav-link:focus {
          color: #7ee37f !important;
        }

        header#home {
          background: #000000;
          color: #39b54a;
          padding-top: 56px;
          height: 100vh;
          display: flex;
          align-items: center;
          text-align: center;
          flex-direction: column;
          justify-content: center;
        }

        header#home h1 {
          font-weight: 900;
          font-size: 3.5rem;
          text-shadow: 0 0 6px #39b54a;
          margin-bottom: 0.3rem;
        }
        header#home p.lead {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 0 0 4px #39b54a;
        }

        section {
          padding: 3rem 0;
        }
        section h2 {
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #39b54a;
          text-align: center;
          text-shadow: 0 0 5px #39b54a;
        }

        section#about p.lead {
          max-width: 700px;
          margin: 0 auto;
          color: #7ee37f;
          font-size: 1.2rem;
          line-height: 1.6;
          text-align: center;
        }

        section#about .profile-photo {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 100%;
          border: 3px solid #39b54a;
          margin: 1rem auto 2rem;
          display: block;
          box-shadow: 0 0 10px #39b54a;
        }

        section#skills .card {
          background-color: #121212;
          border: 1.5px solid #39b54a;
          color: #7ee37f;
          transition: background-color 0.3s ease;
        }
        section#skills .card:hover {
          background-color: #282828;
          color: #39b54a;
        }
        section#skills .card-title {
          color: #39b54a;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
        }

        section#projects .card {
          background-color: #121212;
          border: 1.5px solid #39b54a;
          color: #7ee37f;
          transition: box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        section#projects .card:hover {
          box-shadow: 0 0 12px #39b54a;
          color: #39b54a;
        }
        section#projects .card-title {
          font-weight: 700;
          font-size: 1.3rem;
          color: #39b54a;
          margin-bottom: 1rem;
        }
        section#projects .card-text {
          flex-grow: 1;
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #7ee37f;
        }
        section#projects a.btn {
          border-color: #39b54a;
          color: #39b54a;
          font-weight: 600;
          transition: background-color 0.3s, color 0.3s;
          text-align: center;
        }
        section#projects a.btn:hover {
          border-color:rgb(26, 31, 27);
          color: #000000;
          text-decoration: none;
        }
        section#projects img.project-img {
          border-radius: 6px 6px 0 0;
          border-bottom: 1.5px solid #39b54a;
          max-height: 160px;
          object-fit: cover;
          margin-bottom: 1rem;
          width: 100%;
          box-shadow: 0 0 8px #39b54a;
        }

        section#contact form {
          background-color: #121212;
          padding: 2rem;
          border-radius: 8px;
          border: 1.5px solid #39b54a;
          color: #7ee37f;
        }
        section#contact label {
          font-weight: 600;
          color: #39b54a;
        }
        section#contact .form-control {
          background-color: #000000;
          border: 1px solid #39b54a;
          color: #7ee37f;
        }
        section#contact .form-control:focus {
          background-color: #000000;
          border-color: #7ee37f;
          box-shadow: 0 0 8px #7ee37f;
          color: #7ee37f;
        }
        section#contact button.btn-primary {
          background-color: #39b54a;
          border: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: background-color 0.3s ease;
        }
        section#contact button.btn-primary:hover, section#contact button.btn-primary:focus {
          background-color: #7ee37f;
          color: #000000;
        }

        @media (max-width: 576px) {
          header#home h1 {
            font-size: 2.5rem;
          }
          header#home p.lead {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">Hirwa Patrick</a>
          <button
            className="navbar-toggler border border-green"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: '#39b54a' }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(100%)' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto font-weight-bold">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="home">
        <div className="container">
          <h1>Hello, I'm Hirwa Patrick</h1>
          <p className="lead">Full Stack Developer | React.js Enthusiast | Problem Solver</p>
          <a href="#projects" className="btn btn-lg" style={{ backgroundColor: '#39b54a', color: '#000' }}>View My Work</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" >
        <div className="container text-center">
          <img
            src="/images/3.jpg"
            alt="Hirwa Patrick Profile"
            className="profile-photo"
          />
          <h2>About Me</h2>
          <p className="lead">
            I am a passionate developer specialized in building efficient and scalable web applications using modern technologies like React.js and Bootstrap. I love crafting beautiful user interfaces and solving complex problems with clean and maintainable code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" >
        <div className="container">
          <h2>My Skills</h2>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <h5 className="card-title">{skill}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" >
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={project.image} alt={`${project.title} thumbnail`} className="project-img" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text flex-grow-1">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn"
                      aria-label={`View ${project.title} on GitHub`}
                      style={{borderColor: '#39b54a', color:'#39b54a'}}
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" >
        <div className="container">
          <h2>Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! I will get back to you soon.');
                  e.target.reset();
                }}
                aria-label="Contact form to send message"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required aria-required="true" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" required aria-required="true" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4" required aria-required="true" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} Hirwa Patrick. All rights reserved.</small>
        </div>
      </footer>

      {/* Bootstrap JS and dependencies */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default HirwaPatrickPortfolio;

