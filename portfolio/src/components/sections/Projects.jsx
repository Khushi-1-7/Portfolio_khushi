import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Sales Data Analysis
            </h3>
            <p className="text-gray-300 mb-4">
              Built a complete interactive dashboard in Microsoft Excel including data cleaning, analysis, and visualization of sales data.
            </p>
            <div className="text-sm text-blue-400 font-medium mb-4">
              Tools: Microsoft Excel
            </div>
            <a
              href="https://github.com/Khushi-1-7/OutriX_tasks/blob/9360c440a83cbb2bc404eef4e8c9df6defce8512/Sales%20dashboard.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">HR Analysis Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Developed a HR analysis dashboard using Excel with multiple tables, pivot charts, and slicers for interactive filtering.
            </p>
            <div className="text-sm text-blue-400 font-medium mb-4">
              Tools: Excel, PivotTables, Slicers
            </div>
            <a
              href="https://github.com/Khushi-1-7/OutriX_tasks/blob/9360c440a83cbb2bc404eef4e8c9df6defce8512/HR%20Analyst%20Dashboard.pbix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">EDA on Ecommerce Data</h3>
            <p className="text-gray-300 mb-4">
              Conducted exploratory data analysis on ecommerce data to identify trends, patterns, and insights for business decision-making.
            </p>
            <div className="text-sm text-blue-400 font-medium mb-4">
              Tools: Excel, Visualization, Matplotlib, Python
            </div>
            <a
              href="https://github.com/Khushi-1-7/OutriX_tasks/blob/9360c440a83cbb2bc404eef4e8c9df6defce8512/EDA%20on%20ecommerce%20data.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              View Project
            </a>
          </div>

          {/* Project 4 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">Pre Sales Forecast</h3>
            <p className="text-gray-300 mb-4">
              Created a dynamic sales pipeline forecast tool using Excel formulas, multipliers, and VLOOKUP for revenue projections.
            </p>
            <div className="text-sm text-blue-400 font-medium mb-4">
              Tools: Excel, VLOOKUP, Forecast Modeling
            </div>
            <a
              href="https://github.com/Khushi-1-7/Pre-Sales-data-forcasting/blob/4dfea69aa7b1dfa2d847d17ede7215c872b8e437/pre_sales_demo_dataset.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
            >
              View Project
            </a>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
