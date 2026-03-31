"use client";
import { assets, projectData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const Project = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full px-[5%] md:px-[12%] py-10 scroll-mt-10 relative"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Outfit"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300"
      >
        These are my projects based on my skills.
      </motion.p>

      <div className="max-w-7xl mx-auto w-full">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-8"
          columnClassName="pl-8 bg-clip-padding space-y-8"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 dark:bg-gray-800"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Dynamic Image height to fake masonry effect if images are same ratio */}
                <div
                  className={`relative w-full overflow-hidden ${index % 3 === 0 ? "h-[350px]" : index % 3 === 1 ? "h-[450px]" : "h-[300px]"}`}
                >
                  <img
                    src={project.bgImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Shadow overlay for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Expanding Description Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h2 className="text-white font-bold text-2xl mb-1 shadow-black drop-shadow-md">
                      {project.title}
                    </h2>

                    {/* The description shows completely on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-gray-200 text-sm mt-3 leading-relaxed font-medium">
                          {project.description}
                        </p>

                        <div className="inline-flex items-center gap-2 text-lime-400 text-sm mt-4 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                          View Full Project{" "}
                          <img
                            src={assets.send_icon.src}
                            className="w-4 h-4 invert"
                            alt="go"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default Project;
