import React from 'react';
import SplineScene from './_components/3d/SplineScene'  

const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Mission Section with Overlaid Hero */}
      <section className="relative py-16 px-4">
        {/* Reduced Hero Section with 3D Scene */}
        <div className="absolute top-0 left-0 right-0 min-h-[90vh] overflow-hidden vite-grid hero-glow mb-10">
          <div className="absolute inset-0">
            <SplineScene className="w-full h-full mb-5" />
          </div>
        </div>
        
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative z-10 max-w-4xl mx-auto mb-16 pt-32">
                  <div className="text-sm uppercase tracking-wider mb-4 bg-gradient-to-r text-glow bg-clip-text">
                    Realising that we cannot wait
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-glow bg-clip-text">
                    Our Mission
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Information technology is entering a transformative era, fueled by the convergence of blockchain and AI technologies.
                  </p>
                  
                </div>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Information technology is entering a transformative era, fueled by the convergence of blockchain and AI technologies with expanding distributed computational capacity.
                </p>
                <p>
                  As we embark on a new parabolic phase of technical innovation and societal development, technology influences every aspect of society more than ever before.
                </p>
                <p>
                  Our mission is to ensure this influence is positive and enduring. We are dedicated to honoring self-sovereign and regenerative principles, empowering individuals and communities to foster a thriving Earth.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="glass-effect rounded-lg p-1">
                <img 
                  src="/images/joshua-rivera-usmhPmT5sj0-unsplash.jpg" 
                  loading="lazy" 
                  alt="Mission" 
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-glow text-glow-green">
                2 Frameworks <br />Infinite Possibilities
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                Empowering a next generation developer ecosystem for high value industries with the most impactful technologies of our times.
                <br /><br />
                3D - AR - VR- IOT - AI - Blockchain _ All In One Ecosystem _
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plan Systems */}
            <div className="glass-effect rounded-lg p-8 border border-border/40">
              <div className="mb-6">
                <h4 className="text-glow text-sm uppercase tracking-wider mb-2">
                  Our Spatial Integration Layer
                </h4>
                <img 
                  src="/images/planheader.png" 
                  loading="lazy" 
                  alt="Plan Header" 
                  className="w-full h-auto mb-4 rounded"
                />
                <p className="text-muted-foreground">Delivering on the promise of ambient technology</p>
              </div>
              <h2 className="text-2xl font-bold mb-6">Plan Systems /AMP SDK</h2>
              <div className="space-y-4">
                <div className="text-lg font-semibold">
                  Bleeding Edge Tooling For RWA Visualization Management and Operation
                </div>
                <div className="text-muted-foreground">
                  Plan Systems introduces the AMP SDK, a robust peer-to-peer data layer designed for a high-performance 3D rendering interface and editor built with Go, Dgraph, and Unity, featuring cross-platform and Unreal Engine support. It includes an expanding library of hundreds of assets created by Art Is Information, enabling users to transform real-world assets into a 3D environment while tracking changes in real time across a peer-to-peer network.
                </div>
              </div>
            </div>

            {/* OASIS WEB4 */}
            <div className="glass-effect rounded-lg p-8 border border-border/40">
              <div className="mb-6">
                <h4 className="text-glow text-sm uppercase tracking-wider mb-2">
                  Bridged To The Hyper social DApps of Holochain
                </h4>
                <img 
                  src="/images/Entertheoasis.png" 
                  loading="lazy" 
                  alt="Enter the Oasis" 
                  className="w-full h-auto mb-4 rounded"
                />
                <p className="text-muted-foreground">Enabled With a Ecosystem of APIs to plug in to your tooling</p>
              </div>
              <h2 className="text-2xl font-bold mb-6">OASIS WEB4</h2>
              <div className="space-y-4">
                <div className="text-lg font-semibold">
                  Scalable Framework Providing Interoperability Across Web2 and Web3
                </div>
                <div className="text-muted-foreground">
                  Featuring 8 incredible APIs with SSI, cross-chain AI, and metaverse utilities, and the ability to connect seamlessly to Holochain's P2P framework, The OASIS is designed to build powerful, scalable, self-sovereign applications spanning all of web2 and web3. Its extension, STAR, facilitates no/low code dApp creation, and the ability to create interoperable products due to a new Holonic data architecture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-glow text-glow-green">The Result</h2>
            </div>
            <div className="text-lg text-muted-foreground">
              By combining these 2 novel frameworks we are unlocking a massive distributed data layer that's been missing for in our internet's infrastructure as it maps to our physical world.
              <br /><br />
              We can realize the promise of ambient technology embedded seamlessly into the places we thrive while giving spatial and device level context to AI.
            </div>
          </div>
          <div className="aspect-video glass-effect rounded-lg overflow-hidden border border-border/40">
            <iframe 
              src="https://cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBeixw6Rvw2U&type=text%2Fhtml&schema=youtube&display_name=YouTube&src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FBeixw6Rvw2U%3Ffeature%3Doembed" 
              className="w-full h-full"
              scrolling="no" 
              allowFullScreen 
              title="The Spatial Web"
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="glass-effect rounded-lg p-1">
                <img 
                  src="/images/howwework.png" 
                  loading="lazy" 
                  alt="How We Work" 
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-green-400 text-sm uppercase tracking-wider">
                Stewarding the new
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-glow text-glow-green">How we Work</h1>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  PrimusNeo collaborates with aligned and ambitious businesses across various industries, providing commercial integrations of several next-generation software offerings with which we are affiliated.
                </p>
                <p>
                  Our council-style model incorporates the expertise of different subject matter experts, creating a stable foundation for growth in any industry.
                </p>
                <p>
                  The goal is to cultivate a self-aware and intelligent commons growth engine, utilizing our own tools and tracking key decisions throughout the process. By the end, we aim to offer a turnkey solution that all organizations can benefit from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-glow text-glow-green">Our Partners So Far</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg border border-border/20 space-y-4">
              <h3 className="text-xl font-semibold text-glow">
                Quantum Street
              </h3>
              <p className="text-muted-foreground">
                The premier advanced crypto-backed financial strategists of the modern era create financial products, funding pools, and cash flow for organizations by leveraging what the new digital landscape has to offer. Specializing in real-world asset (RWA) tokenization and offerings, they are leading the charge to enable these organizations to self-finance.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg border border-border/20 space-y-4">
              <h3 className="text-xl font-semibold text-glow">
                TieCity
              </h3>
              <p className="text-muted-foreground">
                Leading Bastrop County in regenerative living solutions and real estate developments, we create spaces that promote belonging and community engagement by integrating emergent technologies into our efforts to cultivate thriving communities. We proudly showcase our first regenerative property in the heart of Texas.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg border border-border/20 space-y-4">
              <h3 className="text-xl font-semibold text-glow">
                Harrsoft Studio
              </h3>
              <p className="text-muted-foreground">
                Harrsoft Studio is a collective of developers, designers, and creators from diverse disciplines, united in their mission to build the next generation of communities, foundations, and software ecosystems. We embrace an open and equitable model for ownership, guided by Colorado's groundbreaking Article 56 cooperative law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
