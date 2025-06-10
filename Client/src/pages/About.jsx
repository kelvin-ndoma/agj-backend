import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import annete from '../assets/annete.webp';
import dennis from '../assets/dennis.webp';
import molly from '../assets/molly.webp';
import bosco from '../assets/bosco.webp';
import martin from '../assets/martin.webp';
import james from '../assets/james.webp';
import benja from '../assets/benja.webp';
import peris from '../assets/peris.webp';
import kioko from '../assets/Dennis.jpg';

const About = () => {
  const employeeInfo = [
    {
      employeePic: kioko,
      employeeName: 'Dennis Kioko',
      employeeRole: 'Board Chair',
    },
    {
      employeePic: dennis,
      employeeName: 'Dennis Beru',
      employeeRole: 'Team Lead',
    },
    {
      employeePic: molly,
      employeeName: "Molly Peter's",
      employeeRole: 'Coordinator',
    },
    {
      employeePic: martin,
      employeeName: 'Martin Kedenge',
      employeeRole: 'Operations Manager',
    },
    {
      employeePic: bosco,
      employeeName: 'Bosco Kathima',
      employeeRole: 'Programs Lead',
    },
    {
      employeePic: peris,
      employeeName: 'Peris',
      employeeRole: 'PR & Communications',
    },
    {
      employeePic: benja,
      employeeName: 'Benjamin Radonde',
      employeeRole: 'Finance Officer',
    },
    {
      employeePic: annete,
      employeeName: 'Annette Kimeu',
      employeeRole: 'Programs Assistant',
    },
    {
      employeePic: james,
      employeeName: 'James Mbulo Dolo',
      employeeRole: 'Project Officer',
    },
  ];

  const pillars = [
    {
      title: "Capacity Building",
      subtitle: "Trainings / Skills Development",
      description: "At the heart of AGJK's mission is the empowerment of community journalists through structured training, mentorship, and hands-on skills development. We invest in building the capacity of grassroots media practitioners by equipping them with critical knowledge in journalism ethics, digital storytelling, fact-checking, media law, and emerging technologies.",
      icon: "📚",
    },
    {
      title: "Advocacy",
      subtitle: "Campaigns",
      description: "AGJK works with over 80 community media outlets across Kenya to amplify underrepresented voices and advance social justice causes. We produce impactful campaign content around youth empowerment, gender equality, health rights, and environmental action.",
      icon: "📢",
    },
    {
      title: "Organizational Growth",
      subtitle: "Sustainability & Development",
      description: "AGJK strengthens internal governance systems and sustainability strategies through strategic planning, partnerships, and team development, ensuring long-term mission impact and organizational transparency.",
      icon: "🌱",
    }
  ];

  const interventions = [
    {
      title: "Gender",
      description: "AGJK promotes gender equality by empowering women, challenging stereotypes, and advocating for inclusive media representation across Kenyan communities.",
      icon: "♀️",
    },
    {
      title: "Health",
      description: "We partner with health experts to deliver culturally relevant health journalism on topics like reproductive health, hygiene, and disease prevention to underserved communities.",
      icon: "🏥",
    },
    {
      title: "Governance and Social Accountability",
      description: "We foster transparency and civic engagement by supporting investigative journalism and citizen participation in governance at the grassroots level.",
      icon: "⚖️",
    },
    {
      title: "Environment and Climate Change",
      description: "AGJK empowers journalists to cover climate change, conservation, and sustainability, building awareness and resilience in vulnerable communities.",
      icon: "🌍",
    },
    {
      title: "Technology and Artificial Intelligence",
      description: "AGJK trains community journalists on digital tools and ethical AI use to enhance storytelling, fact-checking, and media innovation.",
      icon: "🤖",
    },
    {
      title: "Peace and Reconciliation",
      description: "We foster peace and social cohesion through conflict-sensitive journalism and community dialogues, promoting healing and mutual understanding.",
      icon: "🕊️",
    }
  ];


  return (
    <div className="overflow-hidden bg-[#faf7f5]">
      <Helmet>
        <title>About AGJK – Empowering Community Journalists in Kenya</title>
        <meta name="description" content="Learn about AGJK's mission, leadership, and impact pillars in empowering grassroots journalists, promoting advocacy, and driving social change in Kenya." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-[#640433] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#f8b739]">AGJK</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering grassroots journalism for social transformation in Kenya
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#faf7f5] to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-8 border-[#640433]">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#640433] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">✊</div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-[#640433]">Mission</span>
            </h2>
          </div>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              AGJK supports media viability in Kenya by empowering community, citizen, and school journalists through skill-building, advocacy, and strategic partnerships.
            </p>
            <p>
              We are present in <span className="font-semibold text-[#640433]">42 counties</span> in Kenya, with a membership of over <span className="font-semibold text-[#640433]">500 registered members</span> and over <span className="font-semibold text-[#640433]">80 community media outlets</span> across the country.
            </p>
            <p>
              Despite financial and operational challenges, community media in Kenya continues to serve its audiences with impactful journalism, especially during critical moments like the pandemic and elections.
            </p>
          </div>
        </div>
      </section>

     
      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            The <span className="text-maroon-600">Faces</span> of Innovation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Every one of our team members is dedicated and passionate in seeing AGJK achieve its mission
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {employeeInfo.map((employee, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-52 h-52 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                <img
                  src={employee.employeePic}
                  alt={employee.employeeName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{employee.employeeName}</h3>
              <p className="text-gray-600 font-medium">{employee.employeeRole}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-[#640433]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-[#640433]">Strategic</span> Pillars
            </h2>
            <div className="w-24 h-1 bg-[#640433] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-8 h-full">
                  <div className="text-5xl mb-6 text-[#640433]">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <h4 className="text-lg font-medium text-[#640433] mb-4">{pillar.subtitle}</h4>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Key <span className="text-[#640433]">Intervention</span> Areas
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Creating impact where it matters most
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interventions.map((intervention, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-[#640433]/30 transition-all duration-300 group hover:shadow-md">
                <div className="text-4xl mb-4 text-[#640433]">{intervention.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#640433] transition-colors duration-300">
                  {intervention.title}
                </h3>
                <p className="text-gray-700">{intervention.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-[#640433]">Partners</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative excellence in grassroots journalism
            </p>
          </div>
          <Marquee />
        </div>
      </section>
    </div>
  );
};

export default About;