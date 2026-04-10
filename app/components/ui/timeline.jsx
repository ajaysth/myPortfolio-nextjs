"use client";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Timeline = () => {
  const timelineData = [
    {
      id: 3,
      type: "education",
      title: "BCA",
      duration: "2021 - Present",
      college: "Everest College, Thapathali Kathmandu",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: 2,
      type: "education",
      title: "+2",
      duration: "2018 - 2021",
      college: "Sainik Awasiya Magavidyalaya, Sallaghari bhaktapur",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: 1,
      type: "education",
      title: "SEE",
      duration: "2014-2018",
      college: "Sainik Awasiya Magavidyalaya, Sallaghari Bhaktapur",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full bg-transparent font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-center mb-24 tracking-tight text-black"
        >
          Educational Journey
        </motion.h2>

        <div className="relative">
          {/* Subtle monochrome line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-neutral-200 dark:bg-neutral-800" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } group`}
            >
              {/* Ultra-minimalist node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-neutral-900 dark:group-hover:border-neutral-300 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent transition-colors duration-500 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-300" />
              </div>

              {/* Monochrome Premium Card */}
              <div
                className={`w-5/12 ${index % 2 === 0 ? "pr-8 md:pr-14" : "pl-8 md:pl-14"}`}
              >
                <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800 p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-500 mb-0">
                  <div className="relative flex flex-col gap-5 z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                      <span className="inline-block px-3 py-1 bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 text-xs font-semibold rounded-md tracking-wider uppercase mb-3">
                        {item.duration}
                      </span>
                      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                        {item.college}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
