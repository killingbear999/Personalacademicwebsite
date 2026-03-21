import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { EducationCard } from './components/EducationCard';
import { PublicationCard } from './components/PublicationCard';
import { ExperienceCard } from './components/ExperienceCard';
import { AwardCard } from './components/AwardCard';
import { PresentationCard } from './components/PresentationCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* About Section */}
        <Section id="about" title="About">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback 
                  src="https://raw.githubusercontent.com/killingbear999/zihaowang21/main/IMG_5420.jpg"
                  alt="Academic Research"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a Ph.D. candidate in Lee Kong Chian School of Medicine at Nanyang Technological University, Singapore, specializing in 
                systems modeling and biostatistics.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                My current research focuses on developing mathematical models to understand and predict the spread of infectious 
                diseases, emergence of antimicrobial resistance, evaluate and optimize public health interventions. I work under the guidance 
                of Prof. Jue Tao Lim at NTU and Dr. Ian Wee Liang En at Singapore General Hospital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Previously, I earned my Bachelor's degree with Distinction in Computer Engineering from the National University 
                of Singapore and worked as a Research Engineer, specializing in deep learning for engineering.
              </p>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-6">
            <EducationCard
              institution="Nanyang Technological University, Singapore"
              degree="Ph.D. candidate, Medicine"
              gpa="GPA: 4.88/5.0"
              period="January 2025 - present"
              advisors={[
                'Prof. Jue Tao Lim',
                'Dr. Ian Wee Liang En (Singapore General Hospital)'
              ]}
              interests={['Systems Modeling', 'Biostatistics', 'Deep Learning']}
            />
            <EducationCard
              institution="National University of Singapore, Singapore"
              degree="B.Eng. (Hons), Computer Engineering (Distinction)"
              gpa="GPA: 4.35/5.0"
              period="August 2019 - June 2023"
              advisors={[
                'Dr. Ganesh Neelakanta Iyer',
                'Dr. Ravi Suppiah',
                'Prof. Deepu John (University College Dublin)'
              ]}
              program="University Town College Program"
            />
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications">
          <div className="space-y-4">
            <PublicationCard
              authors="Zihao Wang, Dariya Nikitin, Borame L. Dickens, Liang En Wee, Martin T.W. Chio, Rayner Kay Jin Tan, Keisuke Ejima, Yi Wang, David N. Fisman, Lilith K. Whittles, and Jue Tao Lim"
              title="Long-term public health impact of doxycycline post-exposure prophylaxis on syphilis transmission"
              venue="Nature Health, 2026"
              links={[
                { label: 'Paper', url: 'https://www.nature.com/articles/s44360-026-00092-3' },
                { label: 'GitHub', url: 'https://github.com/killingbear999/doxypep_syphilis' }
              ]}
            />
            <PublicationCard
              authors="Zihao Wang, Yuhan Li, Yao Shi, and Zhe Wu"
              title="Input convex lipschitz recurrent neural networks for robust and efficient process modeling and optimization"
              venue="arXiv"
              links={[
                { label: 'arXiv', url: 'https://doi.org/10.48550/arXiv.2401.07494' },
                { label: 'GitHub', url: 'https://github.com/killingbear999/ICLRNN' }
              ]}
            />
            <PublicationCard
              authors="Zihao Wang, and Zhe Wu"
              title="Towards foundation model for chemical reactor modeling: Meta-learning with physics-informed adaptation"
              venue="Chemical Engineering Research and Design, 218, 839-853, 2025. IF: 3.9, JCR Q2 (Engineering, Chemical)"
              links={[
                { label: 'Paper', url: 'https://doi.org/10.1016/j.cherd.2025.05.015' },
                { label: 'GitHub', url: 'https://github.com/killingbear999/chemical-reactor-foundation-model' }
              ]}
            />
            <PublicationCard
              authors="Zihao Wang, Donghan Yu, and Zhe Wu"
              title="Real-time machine-learning-based optimization using input convex long short-term memory network"
              venue="Applied Energy, 377, 124472, 2025. IF: 11.0, JCR Q1 (Engineering, Chemical; Energy & Fuels)"
              links={[
                { label: 'Paper', url: 'https://doi.org/10.1016/j.apenergy.2024.124472' },
                { label: 'GitHub', url: 'https://github.com/killingbear999/ICLSTM' }
              ]}
            />
            <PublicationCard
              authors="Zihao Wang, and Ravi Suppiah"
              title="Upper limb movement recognition utilising EEG and EMG signals for rehabilitative robotics"
              venue="Proceedings of Future of Information and Communication Conference, 676-695, San Francisco, California, USA, 2023"
              links={[
                { label: 'Paper', url: 'https://doi.org/10.1007/978-3-031-28076-4_49' },
                { label: 'GitHub', url: 'https://github.com/killingbear999/eeg-emg-lstm' }
              ]}
            />
            <p className="text-sm text-gray-500 italic mt-4">* denotes equal contribution</p>
          </div>
        </Section>

        {/* Presentations Section */}
        <Section id="presentations" title="Presentations">
          <div className="space-y-4">
            <PresentationCard
              authors="Zihao Wang*, and Jue Tao Lim"
              title="Modelling the interplay between doxycycline post-exposure prophylaxis, four-component meningococcal serogroup B (4CMenB) vaccine, and antimicrobial resistance in Neisseria gonorrhoeae"
              conference="European Congress of Clinical Microbiology and Infectious Diseases (ESCMID Global 2026)"
              location="Munich, Germany"
              year="2026"
              type="Poster"
              note="Top 2%"
            />
            <PresentationCard
              authors="Zihao Wang*, and Jue Tao Lim"
              title="Long-run public health impact of doxycycline post-exposure prophylaxis and behavioural factors on syphilis transmission: A modelling study in Singapore and England"
              conference="Epidemics: 10th International Conference on Infectious Disease Dynamics (Epidemics10)"
              location="San Diego, California, USA"
              year="2025"
              type="Oral"
            />
            <PresentationCard
              authors="Zihao Wang*, and Jue Tao Lim"
              title="Long-term public health impact of doxycycline post-exposure prophylaxis and behavioural factors on syphilis transmission: A modelling study in Singapore and England"
              conference="Singapore Health & Biomedical Congress (SHBC)"
              location="Singapore"
              year="2025"
              type="Poster"
            />
            <PresentationCard
              authors="Zihao Wang, Wenlong Wang*, and Zhe Wu"
              title="Accelerated modeling of various chemical processes using meta-learning-based foundation models: A few-shot learning approach using Reptile"
              conference="American Institute of Chemical Engineers (AIChE) Annual Meeting"
              location="San Diego, California, USA"
              year="2024"
              type="Oral"
            />
            <PresentationCard
              authors="Zihao Wang, Wenlong Wang*, and Zhe Wu"
              title="Input convex LSTM for fast machine learning-based optimization"
              conference="American Institute of Chemical Engineers (AIChE) Annual Meeting"
              location="San Diego, California, USA"
              year="2024"
              type="Poster"
            />
            <PresentationCard
              authors="Zihao Wang, and Zhe Wu*"
              title="Input convex LSTM: A convex approach for fast model predictive control"
              conference="Institute for Machine Learning, Johannes Kepler University"
              location="Linz, Austria"
              year="2023"
              type="Invited Talk"
            />
            <p className="text-sm text-gray-500 italic mt-4">* denotes presenting author</p>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Professional Experience">
          <div className="space-y-6">
            <ExperienceCard
              organization="National Centre for Infectious Diseases"
              position="Research Staff (Part-time)"
              location="Tan Tock Seng Hospital, Singapore"
              period="May 2025 - Present"
              advisors={['Prof. Kelvin Bryan Tan', 'Prof. Jue Tao Lim']}
              responsibilities={[
                'Conduct research on evaluating different methodological approaches to estimate the true infection fatality ratio (IFR) during pandemics, with the aim of informing early estimation of IFR under limited data to support timely, evidence-based policy decisions, under the Programme for Research in Epidemic Preparedness and REsponse (PREPARE)',
                'Conduct research on population-based retrospective cohort studies for respiratory syncytial virus (RSV) and dengue'
              ]}
            />
            <ExperienceCard
              organization="Department of Chemical & Biomolecular Engineering"
              position="Research Engineer (Full-time)"
              location="National University of Singapore, Singapore"
              period="July 2023 - January 2025"
              advisors={['Prof. Zhe Wu']}
              responsibilities={[
                'Conducted research on input convex neural networks, model predictive control, chemical process modeling, meta-learning, and physics-informed learning'
              ]}
            />
            <ExperienceCard
              organization="Department of Biomedical Engineering"
              position="Undergraduate Research Assistant (Internship)"
              location="National University of Singapore, Singapore"
              period="March 2023 - July 2023"
              advisors={['Prof. Yueming Jin']}
              responsibilities={[
                'Conducted research on computer vision for gastrectomy surgical video analysis and modality-cataract video segmentation'
              ]}
            />
            <ExperienceCard
              organization="Rolls-Royce@NTU Corporate Laboratory"
              position="Research Engineer (Internship)"
              location="Nanyang Technological University, Singapore"
              period="May 2022 - August 2022"
              advisors={['Dr. Aditya Venkataraman', 'Dr. Benjamin Cheong']}
              responsibilities={[
                'Worked on software engineering solutions for hybrid-electric power and propulsion design tools for marine and aero engines'
              ]}
            />
            <ExperienceCard
              organization="NUS Human-Computer Interaction (NUS-HCI) Lab"
              position="Undergraduate Research Assistant (Internship)"
              location="National University of Singapore, Singapore"
              period="March 2022 - May 2022"
              advisors={['Prof. Shengdong Zhao']}
              responsibilities={[
                'Conducted empirical research on human-computer interaction'
              ]}
            />
          </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" title="Awards & Honors">
          <div className="grid md:grid-cols-2 gap-4">
            <AwardCard
              title="Travel Grant"
              organization="ESCMID Global 2026"
              date="04/2026"
            />
            <AwardCard
              title="Top Rated Abstract"
              organization="ESCMID Global 2026"
              date="04/2026"
            />
            <AwardCard
              title="NTU Research Scholarship"
              organization="Nanyang Technological University"
              date="2025 - Present"
            />
            <AwardCard
              title="IEEE Singapore Computer Society Prize"
              organization="National University of Singapore"
              date="06/2023"
            />
            <AwardCard
              title="Outstanding Computing Project Prize"
              organization="National University of Singapore"
              date="06/2023"
            />
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">💻</span>
                Technical Skills
              </h3>
              <p className="text-gray-700">
                C, C++, Java, Python, R, Assembly Language, MATLAB, PostgreSQL, Verilog, Vensim, Gephi, LaTeX
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">🌍</span>
                Languages
              </h3>
              <p className="text-gray-700">
                Mandarin (native), English (bilingual), Cantonese (proficient), Korean (conversational)
              </p>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2026 Zihao Wang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
