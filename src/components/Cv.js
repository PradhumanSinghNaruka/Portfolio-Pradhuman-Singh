import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h1>
        <a
          href="/assets/Pradhuman-Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 transition text-sm md:text-base"
        >
          <FaDownload /> Download PDF
        </a>
      </div>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-2">Summary</h2>
        <p className="text-white leading-relaxed text-sm md:text-base">
          Full Stack Developer with 6+ months experience in MERN Stack / Full Stack Development.
          Passionate about building scalable web apps and clean UIs.
        </p>
      </section>
      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>
        <ul className="space-y-4 text-white text-sm md:text-base">
          <li>
            <strong>Full Stack Developer Intern at Full Stack Learning</strong> (May 2024 - July 2024)
            <br />
            Built Ecommerce Website using React.js, Express.js, MongoDB, Node.js.
          </li>
          <li>
            <strong> Full Stack Web Developer Intern at DigiRoket</strong> (May 2025 - July 2025)
            <br />
            Created NFC Card Website (NefTap) by the help of React, Express, MySQL, Node. QR-based profile & visit tracking using React, Node.js, MySQL.
          </li>
        </ul>
      </section>
      {/* Social Links */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Show My GitHub and Linkdin</h2>
        <div className="flex justify-center gap-8 text-2xl text-green-500">
          <a href="https://github.com/PradhumanSinghNaruka" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-green-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/pradhuman-singh-naruka-227030280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-green-500 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}

