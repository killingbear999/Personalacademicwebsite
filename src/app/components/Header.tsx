import { Mail, Phone, ExternalLink } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Zihao Wang</h1>
            <p className="text-xl text-gray-600 mb-4">Ph.D. Candidate in Medicine</p>
            <p className="text-gray-700 max-w-2xl">
              Researcher specializing in systems modeling, biostatistics, and deep learning 
              for healthcare and infectious disease dynamics.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:zihao014@e.ntu.edu.sg" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={18} />
              <span>zihao014@e.ntu.edu.sg</span>
            </a>
            <a href="tel:+6584507458" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={18} />
              <span>+65 8450 7458</span>
            </a>
            <a href="https://scholar.google.com/citations?user=3DEY6doAAAAJ&hl=en" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ExternalLink size={18} />
              <span>Google Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
