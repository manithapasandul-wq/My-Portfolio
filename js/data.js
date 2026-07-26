/* ==========================================================================
   PORTFOLIO CONTENT DATA
   --------------------------------------------------------------------------
   All dummy/placeholder content lives in this single file so it can be
   swapped for real information later without touching markup or logic.

   >>> REPLACE-ME markers point to every spot that needs real data before
   >>> this site goes live: profile photo, CV file, social links, project
   >>> images/descriptions, and personal contact details.
   ========================================================================== */

// Small inline-SVG placeholder generator so every image on the page is a
// self-contained data URI (no external image requests, fast + offline-safe).
// REPLACE-ME: swap any call site of placeholderImage() with a real <img src="...">
function placeholderImage(label, hueA = 210, hueB = 172, w = 640, h = 480) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hueA} 70% 45%)"/>
          <stop offset="100%" stop-color="hsl(${hueB} 70% 40%)"/>
        </linearGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
      <rect width="${w}" height="${h}" fill="url(#grid)"/>
      <g fill="rgba(255,255,255,0.9)" font-family="Space Grotesk, Arial, sans-serif" text-anchor="middle">
        <circle cx="${w/2}" cy="${h/2 - 28}" r="34" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
        <path d="M ${w/2 - 14} ${h/2 - 28} l 8 -14 l 8 14 l 8 -8 l 6 10" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="${w/2}" y="${h/2 + 46}" font-size="20" font-weight="600" opacity="0.95">${label}</text>
        <text x="${w/2}" y="${h/2 + 70}" font-size="12" letter-spacing="2" opacity="0.65">PLACEHOLDER IMAGE</text>
      </g>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const PORTFOLIO_DATA = {
  // REPLACE-ME: swap intro copy, image, and links with the real profile.
  profile: {
    name: "Manitha Pasandul",
    title: "Mechanical Engineering Graduate | University of Moratuwa",
    tagline:
      "Recent BSc (Hons) Mechanical Engineering graduate with hands-on experience in CAD design, CFD simulation, and manufacturing process development.",
    intro:
      "Recent BSc (Hons) Mechanical Engineering graduate with hands-on experience in CAD design, CFD simulation, and manufacturing process development. This sample CV is generated for portfolio demonstration purposes.",
    location: "Colombo, Sri Lanka (Sample)",
    email: "manitha.pasandul@example.com",
    phone: "+94 77 000 0000",
    cvUrl: "assets/cv/Manitha_Pasandul_Sample_CV.pdf",
    profileImage: "assets/images/profile-placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com/in/example-profile", // REPLACE-ME
      github: "https://github.com/example-profile", // REPLACE-ME
      twitter: "https://twitter.com/example-profile", // REPLACE-ME
      instagram: "https://instagram.com/example-profile", // REPLACE-ME
    },
  },

  about: {
    paragraphs: [
      "I am a final-year Mechanical Engineering undergraduate at the University of Moratuwa, one of Sri Lanka’s leading engineering universities, specializing in Aeronautical Engineering.",
      "My interests lie in flight dynamics, aerospace propulsion, computational aerodynamics, and experimental aerospace engineering.",
      "My primary research is my final-year project on fixed-wing UAV flight dynamics, which combines aerodynamic modelling, dynamic stability analysis, simulation, and flight-test data to evaluate and fine-tune UAV behaviour.",
      "As part of this research framework, I designed, fabricated, instrumented, and flight-tested a complete fixed-wing UAV, enabling simulation results to be validated against actual flight performance.",
      "Other major projects include propeller design and performance analysis using Blade Element Theory, analytical structural design of a sailplane wing, and FEA modelling and experimental validation of an aircraft wing structure using a dedicated test apparatus.",
      "I also served as an aerodynamics engineer for Sri Lanka’s first Formula Student car project, leading the aerodynamic package development for the team’s second vehicle, E2.",
      "My current research focuses on refurbishing a small gas turbine model to investigate how biodiesel blends affect output power and overall performance, strengthening my interest in gas turbine engines, combustion, alternative aviation fuels, and experimental propulsion research.",
      "Together, these projects have provided a strong foundation in CFD, FEA, CAD, MATLAB, analytical modelling, data analysis, and experimental testing.",
      "Industrial training at SriLankan Airlines connected this academic experience with practical aircraft engineering through exposure to the engine module, NDT, structures, paint and composites, and wheels-and-brakes workshops.",
      "Looking ahead, I aim to build on this foundation through research in high-speed and hypersonic aerodynamics, aeroelasticity, propulsion and combustion systems, and flight dynamics and control, with a particular focus on combining computational and experimental methods to analyse and optimise advanced aerospace systems.",
      "I am currently seeking MSc or PhD opportunities where I can develop this expertise at a deeper and more specialised level.",
    ],
    stats: [
      { value: "3.7", label: "GPA (Sample)" },
      { value: "12+", label: "Projects Completed" },
      { value: "4", label: "Internships & Placements" },
      { value: "6", label: "Tools & Software" },
    ],
  },

  // Vertical timeline data — university + school education.
  education: [
    {
      level: "University",
      institution: "University of Moratuwa",
      program: "BSc (Hons) Mechanical Engineering",
      period: "2020 — 2024 (Sample Dates)",
      classification: "Second Class Upper Division (Sample Result)",
      highlights: [
        "Specialised coursework in Thermofluids, Manufacturing Systems, and Mechanical Design.",
        "Final year research project on optimising heat-exchanger performance using CFD (sample project).",
        "Active member of the Mechanical Engineering Students' Society (sample involvement).",
      ],
    },
    {
      level: "Advanced Level",
      institution: "Sample Central College, Colombo",
      program: "G.C.E. Advanced Level — Physical Science Stream",
      period: "2017 — 2019 (Sample Dates)",
      classification: "3A's (Sample Result)",
      highlights: [
        "Subjects: Combined Mathematics, Physics, Chemistry.",
        "Ranked among top performers in the school (sample achievement).",
      ],
    },
    {
      level: "Ordinary Level",
      institution: "Sample Central College, Colombo",
      program: "G.C.E. Ordinary Level",
      period: "2012 — 2016 (Sample Dates)",
      classification: "9A's (Sample Result)",
      highlights: [
        "Consistent top-of-class academic performance (sample achievement).",
        "Represented school in inter-school science quiz competitions (sample activity).",
      ],
    },
  ],

  // Skills grouped by category with dummy proficiency levels (0-100).
  skills: [
    {
      category: "CAD & Design",
      items: [
        { name: "SolidWorks", level: 92 },
        { name: "AutoCAD", level: 85 },
        { name: "Technical Drawing", level: 88 },
        { name: "Mechanical Design", level: 87 },
        { name: "Manufacturing", level: 76 },
      ],
    },
    {
      category: "Simulation & Analysis",
      items: [
        { name: "ANSYS", level: 80 },
        { name: "CFD", level: 78 },
        { name: "FEA", level: 82 },
        { name: "MATLAB", level: 75 },
      ],
    },
    {
      category: "Programming & Management",
      items: [
        { name: "Python", level: 70 },
        { name: "Project Management", level: 72 },
      ],
    },
  ],

  // Work / research / volunteer experience — timeline style.
  experience: [
    {
      type: "Internship",
      position: "Mechanical Design Intern",
      organisation: "Sample Engineering Works (Pvt) Ltd",
      period: "Jun 2023 — Aug 2023 (Sample)",
      responsibilities: [
        "Assisted in designing jigs and fixtures for a production line using SolidWorks.",
        "Prepared technical drawings and BOMs for manufacturing hand-off.",
        "Supported tolerance-stack analysis for an assembly redesign.",
      ],
      achievements: [
        "Reduced fixture assembly time by 15% through a simplified locating scheme (sample metric).",
      ],
    },
    {
      type: "Research Assistant",
      position: "Research Assistant — Thermofluids Lab",
      organisation: "University of Moratuwa, Dept. of Mechanical Engineering",
      period: "Jan 2023 — May 2023 (Sample)",
      responsibilities: [
        "Ran CFD simulations investigating airflow over finned heat sinks.",
        "Documented simulation methodology and validated results against experimental data.",
        "Assisted in preparing a conference-style research poster (sample activity).",
      ],
      achievements: [
        "Co-authored a sample technical report presented at a departmental symposium.",
      ],
    },
    {
      type: "Industrial Training",
      position: "Industrial Trainee",
      organisation: "Sample Manufacturing PLC",
      period: "Jul 2022 — Dec 2022 (Sample)",
      responsibilities: [
        "Rotated across production, quality assurance, and maintenance departments.",
        "Observed and documented preventive maintenance schedules for CNC machinery.",
        "Proposed a minor layout change to reduce material handling distance.",
      ],
      achievements: [
        "Layout proposal adopted for a pilot production cell (sample outcome).",
      ],
    },
    {
      type: "Volunteer Experience",
      position: "Volunteer Mentor — STEM Outreach",
      organisation: "Sample STEM for Schools Initiative",
      period: "2021 — 2022 (Sample)",
      responsibilities: [
        "Mentored school students in a beginner robotics and CAD workshop series.",
        "Helped design simple 3D-printed mechanism demos for outreach events.",
      ],
      achievements: [
        "Workshop series reached 5 schools and ~150 students (sample metric).",
      ],
    },
  ],

  // Projects grouped by category. Each project supports a detailed modal view.
  // REPLACE-ME: swap `image` / `gallery` and copy with real project material.
  projectCategories: [
    {
      category: "Design & Manufacturing",
      projects: [
        {
          id: "dm-1",
          title: "Modular Workbench Fixture System",
          summary:
            "A reconfigurable fixture platform designed to cut changeover time between small-batch production runs.",
          tools: ["SolidWorks", "DFM", "Sheet Metal"],
          image: placeholderImage("Fixture System", 210, 172),
          objectives: [
            "Design a fixture platform reconfigurable across 5 part families.",
            "Minimise changeover time between production batches.",
          ],
          challenges:
            "Balancing rigidity for machining loads against the need for tool-less reconfiguration was the core design tension — early prototypes flexed under clamping force.",
          methodology:
            "Iterated through 3 SolidWorks concepts, used FEA to validate stiffness under worst-case clamping load, then produced a sheet-metal + modular T-slot base for a 3D-printed proof-of-concept.",
          technologies: ["SolidWorks", "FEA (simulation study)", "Sheet Metal Design", "3D Printing"],
          outcomes:
            "Sample results: changeover time reduced from ~25 minutes to ~7 minutes across the tested part families in a lab demonstration.",
          gallery: [
            placeholderImage("Concept Sketch", 210, 172),
            placeholderImage("FEA Result", 172, 210),
            placeholderImage("Prototype", 200, 260),
          ],
        },
        {
          id: "dm-2",
          title: "Lightweight Bicycle Frame Redesign",
          summary:
            "Topology-optimised frame geometry exploring weight reduction while preserving stiffness targets.",
          tools: ["SolidWorks", "Topology Optimisation", "Aluminium 6061"],
          image: placeholderImage("Bike Frame", 190, 260),
          objectives: [
            "Reduce frame mass by at least 10% versus a baseline reference design.",
            "Maintain torsional stiffness within 5% of baseline.",
          ],
          challenges:
            "Topology-optimised organic shapes are difficult to manufacture with standard tube-and-lug methods, requiring a manufacturability pass after optimisation.",
          methodology:
            "Baseline model built in SolidWorks, topology optimisation study run to identify material-efficient regions, then manually re-interpreted into manufacturable tube profiles.",
          technologies: ["SolidWorks Simulation", "Topology Optimisation", "Aluminium 6061-T6"],
          outcomes:
            "Sample results: 12% mass reduction achieved with stiffness within 3% of the baseline target.",
          gallery: [
            placeholderImage("Baseline Model", 190, 260),
            placeholderImage("Optimised Shape", 190, 150),
          ],
        },
        {
          id: "dm-3",
          title: "Precision Gearbox Housing",
          summary:
            "A compact two-stage gearbox housing designed for a robotics drivetrain, optimised for assembly.",
          tools: ["AutoCAD", "SolidWorks", "GD&T"],
          image: placeholderImage("Gearbox Housing", 172, 210),
          objectives: [
            "Design a two-stage reduction housing within a 90x90x60mm envelope.",
            "Simplify assembly to fewer than 10 fasteners.",
          ],
          challenges:
            "Maintaining shaft alignment tolerances across a split-housing design while keeping the part count low.",
          methodology:
            "Developed GD&T scheme for bearing bore alignment, validated with a tolerance stack-up analysis, then produced full manufacturing drawings.",
          technologies: ["SolidWorks", "GD&T", "Tolerance Stack Analysis"],
          outcomes:
            "Sample results: final design used 8 fasteners and passed a simulated alignment tolerance check.",
          gallery: [placeholderImage("Housing Exploded View", 172, 210)],
        },
      ],
    },
    {
      category: "Fluid Dynamics",
      projects: [
        {
          id: "fd-1",
          title: "Finned Heat Sink Airflow Study",
          summary:
            "CFD investigation comparing airflow and thermal performance across three fin geometries.",
          tools: ["ANSYS Fluent", "CFD", "MATLAB"],
          image: placeholderImage("Heat Sink CFD", 200, 300),
          objectives: [
            "Compare thermal performance of straight, pin, and wavy fin geometries.",
            "Identify the geometry with the best performance-to-pressure-drop ratio.",
          ],
          challenges:
            "Mesh independence was difficult to achieve near fin boundary layers without excessive cell count and simulation time.",
          methodology:
            "Built parametric fin geometries, ran steady-state CFD in ANSYS Fluent with k-omega SST turbulence model, post-processed results in MATLAB.",
          technologies: ["ANSYS Fluent", "MATLAB", "Mesh Convergence Study"],
          outcomes:
            "Sample results: wavy fin geometry showed 18% better heat dissipation at a comparable pressure drop.",
          gallery: [
            placeholderImage("Mesh View", 200, 300),
            placeholderImage("Velocity Contours", 300, 200),
            placeholderImage("Temperature Field", 300, 200),
          ],
        },
        {
          id: "fd-2",
          title: "Centrifugal Pump Performance Analysis",
          summary:
            "Numerical modelling of a centrifugal pump impeller to predict head-flow performance curves.",
          tools: ["ANSYS CFX", "CFD", "Python"],
          image: placeholderImage("Pump Analysis", 300, 220),
          objectives: [
            "Predict pump head-flow curve numerically and compare against sample manufacturer data.",
            "Identify recirculation zones at off-design flow rates.",
          ],
          challenges:
            "Capturing rotor-stator interaction accurately required careful interface setup between rotating and stationary domains.",
          methodology:
            "Modelled impeller and volute in CAD, simulated using a multiple reference frame approach in ANSYS CFX, automated post-processing with a Python script.",
          technologies: ["ANSYS CFX", "Python", "Turbomachinery CFD"],
          outcomes:
            "Sample results: predicted head-flow curve within 6% of reference data across the tested flow range.",
          gallery: [
            placeholderImage("Impeller Model", 300, 220),
            placeholderImage("Streamlines", 300, 220),
          ],
        },
      ],
    },
    {
      category: "Mechanical Simulations",
      projects: [
        {
          id: "ms-1",
          title: "Vehicle Chassis Crash Simulation",
          summary:
            "Explicit dynamics simulation estimating chassis deformation under a simplified frontal impact.",
          tools: ["ANSYS Explicit Dynamics", "FEA"],
          image: placeholderImage("Crash Simulation", 300, 190),
          objectives: [
            "Estimate peak deformation and energy absorption under a simplified frontal impact load case.",
            "Compare two frame-rail thicknesses for crashworthiness.",
          ],
          challenges:
            "Explicit dynamics solves are computationally heavy — balancing mesh resolution with available compute time was a constant trade-off.",
          methodology:
            "Simplified chassis model built in SolidWorks, simulated in ANSYS Explicit Dynamics with a rigid-wall frontal impact boundary condition.",
          technologies: ["ANSYS Explicit Dynamics", "SolidWorks", "FEA"],
          outcomes:
            "Sample results: thicker frame rail reduced peak intrusion by 22% at the cost of 9% added mass.",
          gallery: [placeholderImage("Deformation Plot", 300, 190)],
        },
        {
          id: "ms-2",
          title: "Rotating Shaft Fatigue Life Estimation",
          summary:
            "Fatigue analysis of a stepped shaft under cyclic bending load using stress-life methods.",
          tools: ["ANSYS", "MATLAB", "FEA"],
          image: placeholderImage("Shaft Fatigue", 300, 200),
          objectives: [
            "Estimate fatigue life of a stepped shaft under a sample cyclic bending load.",
            "Evaluate the effect of fillet radius on stress concentration.",
          ],
          challenges:
            "Accurately capturing the stress concentration at the shaft step required local mesh refinement without destabilising the global solution.",
          methodology:
            "Static FEA in ANSYS to extract stress concentration factors, fatigue life estimated using stress-life (S-N) approach scripted in MATLAB.",
          technologies: ["ANSYS", "MATLAB", "Stress-Life Fatigue Method"],
          outcomes:
            "Sample results: increasing fillet radius by 2mm extended estimated fatigue life by roughly 3x.",
          gallery: [
            placeholderImage("Stress Contour", 300, 200),
            placeholderImage("S-N Curve", 300, 200),
          ],
        },
      ],
    },
    {
      category: "Academic Projects",
      projects: [
        {
          id: "ac-1",
          title: "Solar-Assisted Water Pumping System",
          summary:
            "Final-year coursework project sizing and modelling a small-scale solar water pumping setup.",
          tools: ["MATLAB", "System Modelling"],
          image: placeholderImage("Solar Pump", 300, 200),
          objectives: [
            "Size a solar PV array and pump combination for a sample rural irrigation case.",
            "Model daily output against sample regional solar irradiance data.",
          ],
          challenges:
            "Matching pump characteristic curves against variable solar input required an iterative sizing approach rather than a single calculation.",
          methodology:
            "Built a MATLAB model combining PV output estimation with pump performance curves, iterated component sizing against a sample demand profile.",
          technologies: ["MATLAB", "Renewable Energy Systems", "System Sizing"],
          outcomes:
            "Sample results: proposed system met 92% of sample daily water demand across a modelled dry season.",
          gallery: [placeholderImage("System Diagram", 300, 200)],
        },
        {
          id: "ac-2",
          title: "Low-Cost Prosthetic Hand Mechanism",
          summary:
            "Group coursework project designing a tendon-driven mechanism for an affordable prosthetic hand.",
          tools: ["SolidWorks", "3D Printing", "Mechanism Design"],
          image: placeholderImage("Prosthetic Hand", 300, 220),
          objectives: [
            "Design an underactuated tendon-driven gripping mechanism.",
            "Keep bill-of-materials cost within a sample low-cost target.",
          ],
          challenges:
            "Achieving adaptive grip across irregular object shapes with a minimal number of actuators was the central mechanism-design challenge.",
          methodology:
            "Designed an underactuated linkage in SolidWorks, 3D-printed functional prototype fingers, tested grip on a sample set of household objects.",
          technologies: ["SolidWorks", "3D Printing", "Underactuated Mechanisms"],
          outcomes:
            "Sample results: prototype successfully grasped 8 of 10 sample test objects in initial trials.",
          gallery: [
            placeholderImage("Hand Prototype", 300, 220),
            placeholderImage("Linkage Diagram", 300, 220),
          ],
        },
      ],
    },
  ],

  awards: [
    {
      title: "Dean's List Honours",
      organisation: "University of Moratuwa (Sample)",
      year: "2023",
      description:
        "Recognised for academic excellence, ranking in the top percentile of the Mechanical Engineering cohort (sample achievement).",
    },
    {
      title: "Best Final Year Project — Runner Up",
      organisation: "Dept. of Mechanical Engineering (Sample)",
      year: "2024",
      description:
        "Runner-up award for the CFD-based heat exchanger optimisation project at the departmental symposium (sample achievement).",
    },
    {
      title: "Inter-University CAD Design Challenge",
      organisation: "Sample National Engineering Association",
      year: "2022",
      description:
        "Placed 2nd nationally for a rapid CAD design and manufacturing-feasibility challenge (sample achievement).",
    },
    {
      title: "STEM Outreach Recognition Award",
      organisation: "Sample STEM for Schools Initiative",
      year: "2022",
      description:
        "Awarded for outstanding volunteer contribution mentoring school students in robotics and CAD (sample achievement).",
    },
  ],

  interests: [
    { name: "Automotive Engineering", icon: "car" },
    { name: "Robotics", icon: "robot" },
    { name: "Renewable Energy", icon: "sun" },
    { name: "Product Design", icon: "cube" },
    { name: "3D Printing", icon: "printer" },
    { name: "Aerodynamics", icon: "wind" },
    { name: "Photography", icon: "camera" },
    { name: "Hiking", icon: "mountain" },
  ],
};
