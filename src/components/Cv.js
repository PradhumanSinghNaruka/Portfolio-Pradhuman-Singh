import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 underline text-green-500">My Resume</h1>
        <a
          href="/Pradhuman.pdf.pdf"
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
          I am a dedicated MERN Stack Developer with experience in creating
          full-stack applications utilizing React.js, Node.js, and various
          databases. I have successfully built and deployed projects like
          NefTap, an NFC-based digital profile platform. My education in
          Computer Science and specialization in AI and Data Science equips me
          with the technical skills needed to thrive in innovative environments
        </p>
      </section>
      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-2">Certificate</h2>
        <ul className="space-y-4 text-white text-sm md:text-base">
          <li>
            <p className="text-md font-bols text-green-500">Google Cloud & Generative Al</p>
            Successfully completing the courses in Google cloud computing
            foundations and Generative AI.
          </li>
          <li>
            <p className="text-md font-bols text-green-500">Infosys</p>
            Successfully completing the course in Java Essentials in Infosys.
          </li>
          <li>
            <p className="text-md font-bols text-green-500">Microsoft</p>
            Successfully completing the Microsoft Learn AI skills challenge.
          </li>
          <li>
            <p className="text-md font-bols text-green-500">TATA</p>
            Successfully completing the certificate in Data Visualízation.
          </li>
        </ul>
      </section>
      {/* Social Links */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Show My GitHub and Linkdin
        </h2>
        <div className="flex justify-center gap-8 text-2xl text-green-500">
          <a
            href="https://github.com/PradhumanSinghNaruka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-green-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradhuman-singh-naruka-227030280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-green-500 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}
