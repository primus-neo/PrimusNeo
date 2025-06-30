"use client";
import { useState } from 'react';

const OnePager = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const useCases = [
    {
      title: "Supply chain",
      content: "Real time augmented reality displays, agent-centric, IoT integrated architecture, an Avatar system that optimises the datasets generated across the entire ecosystem. Our system can provide better insights for supply chain teams, and more reassurance and context for their customers- with a fully distributed scalable data + compute supply."
    },
    {
      title: "RWA",
      content: "Plan Systems utilizes OASIS's Avatar API connectors to enhance Real-World Asset (RWA) management. This integration facilitates efficient tracking and tokenization of assets, streamlining workflows and improving interoperability. By bridging physical and digital environments, it empowers organizations to manage assets more effectively and unlock new opportunities for growth."
    },
    {
      title: "Regen communities",
      content: "Plan Systems and OASIS interop to cultivate enterprise class solutions for regenerative communities that thrive on circular economies. By focusing on resource efficiency, waste reduction, and collaborative governance, these frameworks empower communities to create sustainable ecosystems. This innovative approach promotes resilience, enhances local economies, and fosters a holistic environment where people and nature coexist harmoniously."
    },
    {
      title: "Artificial Intelligence",
      content: "This innovative technology enhances AI by enabling real-time insights and decision-making. By organizing data in a way that reflects real-world relationships, it allows AI systems to better understand context and adapt to changing conditions. This practical approach can improve applications like predictive analytics, personalized recommendations, and resource management, ultimately driving efficiency and effectiveness in every industry AI has an impact."
    },
    {
      title: "Construction",
      content: "This technology enhances construction operations by integrating seamlessly with existing systems. It provides real-time visibility into materials, equipment, and project status, leading to improved resource management and minimized delays. By linking on-site data with enterprise processes, it supports informed decision-making and boosts efficiency, ensuring projects are completed on time and within budget."
    },
    {
      title: "Agriculture",
      content: "Elevate regenerative agriculture with our advanced AI framework. By harnessing real-time data and predictive analytics, we empower farmers to implement sustainable practices that enhance soil health, boost crop yields, and minimize losses. Our modular, scalable solutions facilitate precision farming, optimizing resource use and promoting environmental stewardship."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-glow">
                The Primus Neo <br />Tech Stack
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                We are at the forefront of technology, merging cutting-edge frameworks that push the limits of what's possible. Our focus goes beyond mere buzzwords; we are dedicated to creating practical tools that empower developers and businesses to leverage these technologies for real-world applications.
              </p>
            </div>
          </div>

          {/* Tech Stack Image */}
          <div className="mb-16 flex justify-center">
            <img
              src="/images/PRIMUS-NEO-TECH-STACK2.png"
              loading="lazy"
              alt="Tech Stack"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-glow">
                Dynamic, real time virtual worlds <br />with Plan Systems
              </h4>
              <p className="text-gray-300">
                Plan Systems empowers creators to build dynamic and immersive virtual worlds through innovative tools and technologies. Our platform integrates advanced 3D rendering, real-time data, and a versatile asset library, enabling developers to graft technology into space.
                <br /><br />
                With seamless cross-platform support and a focus on easy to build modular user experiences, Plan Systems transforms the way virtual worlds are conceived, enabling endless possibilities for exploration and interaction.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-glow">
                Web2+web3, self-replicating Dapp capability with OASIS + STAR
              </h4>
              <p className="text-gray-300">
                OASIS bridges Web2 and Web3, empowering developers to build scalable, self-sovereign applications. Its integration with STAR introduces self-replicating dApp capabilities and comes with no/low-code development interop, enabling rapid creation of interoperable solutions.
                <br /><br />
                By focusing on modularity, and OASIS + STAR redefines how web infrastructure can scale, fostering innovation and limitless possibilities across decentralized ecosystems.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-glow">
                Porting to distributed, scalable DePIN with Hyperweave
              </h4>
              <p className="text-gray-300">
                Hyperweave enables seamless porting to distributed, scalable Decentralized Physical Infrastructure Networks (DePIN). By leveraging advanced networking and data layer technologies, it ensures reliable scalability and performance across decentralized systems.
                <br /><br />
                Hyperweave simplifies the transition to DePIN, unlocking new possibilities for interoperable, efficient, and future-proof infrastructure solutions.
              </p>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-black rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-bold">Use Cases</h2>
              </div>
              <div>
                <p className="text-lg text-gray-300">
                  This modular system can be used to disrupt a huge range of industries - providing radically new functionality, with flexibility and self-sovereignty baked in. Additional tech can easily be plugged in. Below are the first fields we are focused on.
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-6 bg-black hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h4 className="text-xl font-semibold text-left">{useCase.title}</h4>
                    <div className={`transform transition-transform duration-200 ${activeAccordion === index ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 bg-gray-850 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{useCase.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePager;
