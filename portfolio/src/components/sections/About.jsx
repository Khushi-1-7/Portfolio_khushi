import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const DASkills = [
    "Excel", "Power BI", "SQL", "Python",
    "Matplotlib", "Seaborn", "Tableau",
    "Data Visualization", "Data Analysis",
    "Data Cleaning", "Statistical Analysis", "Machine Learning"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I’m Maahira, a BCA student with a curious mind and a deep passion for data.
            I love exploring datasets, uncovering patterns, and telling stories with visuals.
            Whether it’s Excel dashboards, Power BI reports, or SQL queries — I enjoy crafting insights that drive meaningful decisions.
          </p>
        </div>

        <div className="w-full md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {DASkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education Section */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-white mb-4">🏫 Education</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>
                <strong>Bachelor of Computer Application in Data Science</strong> – Maharaja Surajmal Institute, Delhi (2023–2026)
              </li>
              <li>
                <strong>Schooling:</strong> Bharat National Public School, Delhi (2009–2023)
              </li>
            </ul>
          </div>

          {/* Work Experience Section */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold text-white mb-4">🎒 Work Experience</h3>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Web Developer Intern – Goherit</h4>
                <p>Contributed to the development and maintenance of the company website for a growing startup.</p>
              </div>

              <div>
                <h4 className="font-semibold">Data Analyst Intern – SPNX Consulting</h4>
                <p>Supported data collection, cleaning, and analysis for client and internal projects.</p>
              </div>
              <div>
                <h4 className="font-semibold">Data Analyst Intern – Outrix</h4>
                <p>Created real world projects and displayed stunning informative dashboards </p>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
