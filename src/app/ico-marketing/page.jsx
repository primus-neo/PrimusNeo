"use client";
import { useState } from 'react';

const IcoMarketing = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const privateTiers = [
    {
      title: "Tier 1: Foundation Investor (50 - 999 tokens)",
      content: `• Property Updates: Quarterly development progress reports
• Digital Access: Exclusive investor portal access
• Community: Private Telegram/Discord investor group
• Documentation: Digital copies of all property blueprints and plans
• Early Access: 24-hour priority window for public property listings`
    },
    {
      title: "Tier 2: Property Patron (1,000 - 4,999 tokens)",
      content: `• All Tier 1 Benefits
• Rental Yield Sharing: 0.5% annual rental income from portfolio properties in QUSDC
• Event Access: Invitation to quarterly virtual investor meetups
• Property Tours: Virtual reality property walkthroughs
• Voting Rights: Limited voting on community amenity decisions`
    },
    {
      title: "Tier 3: Development Partner (5,000 - 19,999 tokens)",
      content: `• All Previous Tier Benefits
• Rental Yield Sharing: 1.5% annual rental income from portfolio properties in QUSDC
• Exclusive Events: Invitation to bi-annual in-person investor events
• Property Preview: 48-hour exclusive access to new property releases
• Design Input: Vote on property design and amenity upgrades
• Fee Waivers: 10% discount on all property-related services offered using QUSDC
• Priority Placement: Guaranteed allocation in oversubscribed property offerings`
    },
    {
      title: "Tier 4: Estate Visionary (20,000 - 49,999 tokens)",
      content: `• All Previous Tier Benefits
• Rental Yield Sharing: 3% annual rental income from portfolio properties in QUSDC
• Property Royalties: 1% share of gross sales from property flips in QUSDC
• VIP Treatment: Annual luxury property tour weekend (expenses covered)
• Advisory Role: Quarterly advisory board participation
• Direct Investment: First-right-of-refusal on co-investment opportunities
• Concierge Services: Personal property investment consultation (4 hours annually)`
    },
    {
      title: "Tier 5: Master Developer (50,000+ tokens)",
      content: `• All Previous Tier Benefits
• Rental Yield Sharing: 5% annual rental income from portfolio properties in QUSDC
• Property Royalties: 2.5% share of gross sales from property flips in QUSDC
• Profit Participation: 3% share of net development profits in QUSDC
• Exclusive Access: Private developer dinners and industry networking events
• Investment Authority: Voting rights on major property acquisitions ($1M+)
• Personal Benefits: Annual luxury accommodation at portfolio properties (1 week)
• Advisory Compensation: Token rewards for advisory board participation
• Ultimate Discounts: 25% discount on all services and priority contractor rates`
    }
  ];

  const publicTiers = [
    {
      title: "Tier 1: Community Member (10 - 499 tokens)",
      content: `• Market Reports: Monthly real estate market analysis reports
• Community Access: Public investor community forum
• Newsletter: Bi-weekly development and industry updates
• Educational Content: Access to real estate investment webinar library`
    },
    {
      title: "Tier 2: Property Enthusiast (500 - 1,999 tokens)",
      content: `• All Tier 1 Benefits
• Rental Sharing: 0.25% annual rental income from select properties
• Event Invites: Access to online investor education workshops
• Property Alerts: Email notifications for new property opportunities
• Portfolio Access: Quarterly portfolio performance reports
• Service Discounts: 5% discount on property-related services`
    },
    {
      title: "Tier 3: Active Investor (2,000 - 9,999 tokens)",
      content: `• All Previous Tier Benefits
• Rental Sharing: 0.75% annual rental income from select properties QUSDC
• Live Events: Invitation to annual investor conference
• Property Preview: 12-hour early access to new listings
• Voting Rights: Participate in community improvement polls
• Enhanced Discounts: 8% discount on all property services that are offered using QUSDC
• Market Intelligence: Access to proprietary market research`
    },
    {
      title: "Tier 4: Serious Stakeholder (10,000 - 29,999 tokens)",
      content: `• All Previous Tier Benefits
• Rental Sharing: 1.5% annual rental income from select properties QUSDC
• Property Royalties: 0.5% share of gross sales from select property flips in QUSDC
• Exclusive Tours: Semi-annual guided property development tours
• Investment Opportunities: Access to special property investment rounds
• Premium Services: Priority customer service and dedicated account manager
• Significant Discounts: 12% discount on all services offered in QUSDC
• NFT Rewards: Exclusive property-themed NFT collectibles`
    },
    {
      title: "Tier 5: Major Contributor (30,000+ tokens)",
      content: `• All Previous Tier Benefits
• Rental Sharing: 2.5% annual rental income from select properties in QUSDC
• Property Royalties: 1.5% share of gross sales from select property flips in QUSDC
• Development Input: Quarterly strategy consultation calls
• VIP Experiences: Annual exclusive property showcase events
• Co-Investment Rights: Opportunity to co-invest in premium developments
• Maximum Discounts: 20% discount on all services offered in QUSDC
• Legacy Benefits: Lifetime membership benefits and grandfathered rates
• Recognition: Name inscription on property development plaques/art`
    }
  ];

  const tokenPoolData = [
    { title: "Private Sale", percentage: "20%", tokens: "200M tokens" },
    { title: "Trading Partner Quantum Street", percentage: "5%", tokens: "50M tokens", note: "2-year vesting" },
    { title: "Marketing/Property Management/IT Infra Development", percentage: "18%", tokens: "180M tokens" },
    { title: "Legal Fees and Compliance", percentage: "10%", tokens: "100M tokens" },
    { title: "Reserve Fund", percentage: "5%", tokens: "50M tokens" },
    { title: "Liquidity Pool", percentage: "2%", tokens: "20M tokens" }
  ];

  const universalBenefits = [
    {
      title: "Token Utility Features",
      features: [
        "Governance Voting: Platform improvement and direction decisions",
        "Staking Rewards: Earn additional tokens through staking mechanisms",
        "Property Purchases: Use tokens for down payments on portfolio properties",
        "Service Payments: Pay for property management and maintenance with tokens",
        "Referral Bonuses: Earn bonus tokens for successful investor referrals"
      ]
    },
    {
      title: "Technology Integration",
      features: [
        "Mobile App: Exclusive investor mobile application",
        "Digital Twin: AMP SDK powered digital twin with IOT and Ambient Technologies",
        "Dashboard: Real-time portfolio tracking and analytics",
        "Smart Contracts: Automated rental distributions and royalty payments using OASIS",
        "Blockchain Transparency: Public ledger of all property transactions and developments"
      ]
    },
    {
      title: "Legal Protections",
      features: [
        "Investor Insurance: Protection fund for token holders",
        "Legal Representation: Access to legal consultation for property matters",
        "Regulatory Compliance: Full SEC and local real estate regulation compliance",
        "Exit Strategies: Clear token redemption and exit mechanisms"
      ]
    },
    {
      title: "Special Seasonal Bonuses",
      features: [
        "Holiday Bonuses: Additional rental distributions during peak seasons",
        "Performance Bonuses: Extra rewards when properties exceed performance targets",
        "Loyalty Rewards: Anniversary bonuses for long-term token holders",
        "Market Bonuses: Additional benefits during bull real estate markets"
      ]
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
                Real Estate ICO Marketing
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-300">
                Using an ICO as a mechanism to create tokens that are all placed in quantum street's trust, we ensure investors always get returns on token value while enabling project development through asset-backed loans. The private sale funds the initial phase of real estate development, creating a sustainable growth model.
              </p>
            </div>
          </div>

          {/* Token Pool Breakdown */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-glow">ICO Token Pool Breakdown</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenPoolData.map((item, index) => (
                <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-2xl text-glow mb-2">{item.percentage}</p>
                  <p className="text-gray-300">{item.tokens}</p>
                  {item.note && <p className="text-sm text-gray-400 mt-2">{item.note}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Private Sale Tiers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-glow">Private Sale Reward Tiers</h3>
            <div className="space-y-4">
              {privateTiers.map((tier, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(`private-${index}`)}
                    className="w-full flex justify-between items-center p-6 bg-black hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h4 className="text-xl font-semibold text-left">{tier.title}</h4>
                    <div className={`transform transition-transform duration-200 ${activeAccordion === `private-${index}` ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeAccordion === `private-${index}` ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 bg-gray-850 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{tier.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Public Sale Tiers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-glow">Public Sale Reward Tiers</h3>
            <div className="space-y-4">
              {publicTiers.map((tier, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(`public-${index}`)}
                    className="w-full flex justify-between items-center p-6 bg-black hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h4 className="text-xl font-semibold text-left">{tier.title}</h4>
                    <div className={`transform transition-transform duration-200 ${activeAccordion === `public-${index}` ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeAccordion === `public-${index}` ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 bg-gray-850 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{tier.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Universal Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-glow">Universal Benefits</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {universalBenefits.map((benefit, index) => (
                <div key={index} className="bg-black p-8 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-glow">{benefit.title}</h4>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcoMarketing;
