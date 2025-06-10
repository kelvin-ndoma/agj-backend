import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pdf = () => {
  // Data extracted from the PDF
  const regionsData = [
    {
      name: "CENTRAL REGION",
      counties: [
        {
          name: "NAIROBI",
          stations: ["Ruben fm", "Pamojafm", "Mtaani Radio", "Koch Fm", "Ghetto fm"]
        },
        {
          name: "KAJIADO",
          stations: ["Bus Radio", "Radio Domus"]
        },
        {
          name: "MURANG'A",
          stations: ["Kangema", "Radio Maria"]
        },
        {
          name: "KIRINYAGA",
          stations: ["Kirinyaga Radio"]
        }
      ]
    },
    {
      name: "TURKANA REGION",
      counties: [
        {
          name: "TURKANA",
          stations: ["Maata Radio", "Akicha", "Ekeyokon", "Imani", "Sayare", "Echami", "Ata Nayeche", "Ejko Fm"]
        },
        {
          name: "MERU",
          stations: ["Mugambo", "Radio Wega"]
        },
         {
          name: "EMBU",
          stations: ["Kimuri Fm"]
        },
        {
          name: "WEST POKOT",
          stations: ["Bibilia Husema", "Kalya Fm"]
        }
      ]
    },
    {
      name: "NORTHERN REGION",
      counties: [
        {
          name: "ISIOLO",
          stations: ["Radio Shahidi", "Baliti Fm"]
        },
        {
          name: "MARSABIT",
          stations: ["Sifa Fm", "Radio Jangwani"]
        },
        {
          name: "SAMBURU",
          stations: ["Serian FM", "Radio Mchungaji", "Radio Ashe"]
        },
        {
          name: "WAJIR",
          stations: ["Wajir Community Radio"]
        },
        {
          name: "TANA RIVER",
          stations: ["Amani FM"]
        }
      ]
    },
    {
      name: "NYANZA REGION",
      counties: [
        {
          name: "HOMA BAY",
          stations: ["Ekialo Kiona", "Gulf Radio", "Radio Arise"]
        },
          {
          name: "KISII",
          stations: ["Kisii Fm", "Vuna Fm", "Inka Fm"]
        },
        {
          name: "MIGORI",
          stations: ["Rameny FM", "Milambo Fm", "Radio Tarumbeta", "Togotane FM", "Radio Onagi"]
        },
        {
          name: "KISUMU",
          stations: ["Nyanam Radio", "Radio Lake Victoria", "Jowi Fm", "Dada Radio", "Manene Radio", "Dala Fm", "Namlolwe Fm", "Radio Maria"]
        },
        {
          name: "SIAYA",
          stations: ["Ratego Radio", "Radio Mikayi"]
        }
      ]
    },
    {
      name: "RIFT VALLEY REGION",
      counties: [
        {
          name: "NAKURU",
          stations: ["Radio Amani", "Hero Radio", "Radio Yetu", "Sauti ya Mwananchi"]
        },
        {
          name: "LAIKIPIA",
          stations: ["Sawanga Radio"]
        },
        {
          name: "KERICHO",
          stations: ["Radio Injili", "Konyon Fm", "Nlikop Fm", "Nyenyon FM", "BK Radio"]
        },
        {
          name: "NANDI",
          stations: ["Baraton FM"]
        },
        {
          name: "NAROK",
          stations: ["Olmaa Suswa FM", "Oltoitolemaa", "Gospo Fm"]
        }
      ]
    },
    {
      name: "WESTERN REGION",
      counties: [
        {
          name: "BUNGOMA",
          stations: ["Mukwano Radio"]
        },
        {
          name: "BUSIA",
          stations: ["Bulala", "Emuria"]
        },
        {
          name: "KAKAMEGA",
          stations: ["Lubao fm", "Radio Isukuti", "West Fm"]
        },
         {
          name: "TRANSNZOIA",
          stations: ["Imani Radio", "Radio Mitume"]
        },
        {
          name: "VIHIGA",
          stations: ["Radio ANYORE", "Sema radio"]
        }
      ]
    },
    {
      name: "COAST REGION",
      counties: [
        {
          name: "TAITA TAVETA",
          stations: ["Mwanedu"]
        },
         {
          name: "TANA RIVER",
          stations: ["VOX Radio"]
        },
        {
          name: "MOMBASA",
          stations: ["Radio Mvita", "Sheki Fm", "Radio Rahma", "Radio Tumaini"]
        },
        {
          name: "KILIFI",
          stations: ["Lulu", "Jahazi", "Radio Bayana"]
        },
        {
          name: "KWALE",
          stations: ["Kwaleranet", "Sifa Fm", "Kaya Radio"]
        }
      ]
    },
    {
      name: "EASTERN REGION",
      counties: [
        {
          name: "MAKUENI",
          stations: ["Ene FM", "Mang'elete FM"]
        },
        {
          name: "KITUI",
          stations: ["Thome FM", "Wikwatyo"]
        }
      ]
    }
  ];

  const [expandedRegion, setExpandedRegion] = useState(null);
  const [expandedCounty, setExpandedCounty] = useState(null);

  const toggleRegion = (index) => {
    setExpandedRegion(expandedRegion === index ? null : index);
    setExpandedCounty(null);
  };

  const toggleCounty = (countyIndex) => {
    setExpandedCounty(expandedCounty === countyIndex ? null : countyIndex);
  };

  return (
    <div className="mt-8 w-full max-w-lg">
      <h3 className="text-lg font-semibold text-[#640433] mb-4 text-left">
        Member Radio Stations by Region
      </h3>
      
      <div className="space-y-3">
        {regionsData.map((region, regionIndex) => (
          <motion.div 
            key={regionIndex}
            className="border border-[#640433]/20 rounded-lg overflow-hidden shadow-sm"
            initial={false}
            animate={{ 
              backgroundColor: expandedRegion === regionIndex ? '#f9fafb' : '#fff'
            }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center bg-[#640433]/5 hover:bg-[#640433]/10 transition-colors"
              onClick={() => toggleRegion(regionIndex)}
            >
              <span className="font-bold text-[#640433]">{region.name}</span>
              <motion.span
                animate={{ rotate: expandedRegion === regionIndex ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>

            {expandedRegion === regionIndex && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 space-y-2"
              >
                {region.counties.map((county, countyIndex) => (
                  <div key={countyIndex} className="mb-2">
                    <button
                      className="w-full text-left flex justify-between items-center py-2 px-3 bg-gray-50 rounded-md"
                      onClick={() => toggleCounty(countyIndex)}
                    >
                      <span className="font-medium text-gray-700">{county.name}</span>
                      <span className="text-sm text-gray-500">{county.stations.length} stations</span>
                    </button>

                    {expandedCounty === countyIndex && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-5 mt-1 space-y-1"
                      >
                        {county.stations.map((station, stationIndex) => (
                          <motion.li 
                            key={stationIndex}
                            className="py-1 px-3 bg-white rounded-md border border-gray-100 shadow-xs text-sm text-gray-600"
                            whileHover={{ scale: 1.02 }}
                          >
                            {station}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-left">
        Data provided by Association of Grassroot Journalists of Kenya
      </div>
    </div>
  );
};

export default Pdf;