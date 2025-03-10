<template>
    <div>
      <Navbar />
      
      <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Profile Header with Name and Title -->
          <div class="mb-16 text-center mt-16">
            <h1 class="text-6xl font-bold text-gray-900 mb-4">Yomi Akinade</h1>
            <h2 class="text-4xl font-semibold text-gray-700 uppercase tracking-wider">MANAGING PARTNER</h2>
            <div class="mt-6 border-t-2 border-gray-200 w-24 mx-auto"></div>
          </div>
          
          <!-- Main Profile Section -->
          <div class="flex flex-col md:flex-row gap-12">
            <!-- Profile Image -->
            <div class="w-full md:w-2/5 lg:w-1/3">
              <div class="w-full rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  :src="profile.image"
                  :alt="profile.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Profile Bio -->
            <div class="w-full md:w-3/5 lg:w-2/3">
              <div class="prose max-w-none text-gray-600 text-xl leading-relaxed">
                <p class="mb-8 font-semibold">
                  Yomi Akinade attended Oklahoma State University, where he earned a Bachelor of Science in Economics and Business Administration, followed by an MBA from the University of Oklahoma. He furthered his education with an Advanced Management Diploma from Northwestern University's Kellogg School of Management and a Postgraduate Diploma in Project Management from the University of Wisconsin.
                </p>
                <p class="mb-8 font-semibold">
                  A certified member of the Project Management Institute in the USA, Yomi brings 40 years of experience in banking, finance, information technology, and management consulting. Throughout his career, he has held management positions in various industries, including banking, consulting, real estate, insurance, and financial services.
                </p>
                <p class="mb-8 font-semibold">
                  Yomi has provided consulting services in the USA, Europe, Africa, and Asia, working with numerous clients across diverse industries. He has been involved in over 150 IT projects that focus on restructuring and re-engineering processes, strategic planning, project management, cloud infrastructure, cybersecurity, middleware, and ERP software, contributing to firms such as Computech Corp, Whittman-Hart, marchFIRST, Divine Inc, Akinade Associates Inc, Union Bank, and Holmen Consulting.
                </p>
                <p class="font-semibold">
                  From 2010 to 2015, Yomi served as the Technology Consultant and CIO for Union Bank, where he was responsible for overhauling and transforming the bank's technology infrastructure, including its core banking system. Currently, he manages Holmen Consulting.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Contact Section -->
          <div class="mt-20 bg-purple-50 p-10 rounded-xl shadow-lg">
            <h2 class="text-4xl font-bold text-purple-700 mb-8 text-center">Get in Touch</h2>
            <div class="flex flex-wrap justify-center gap-6">
              <a 
                v-for="social in profile.socials" 
                :key="social.type"
                :href="social.link" 
                class="flex items-center bg-white px-6 py-4 rounded-lg text-purple-600 hover:text-purple-800 hover:bg-purple-100 transition-colors shadow-md hover:shadow-lg"
              >
                <component :is="social.icon" size="24" class="mr-3" />
                <span class="text-lg">{{ social.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "../../components/Navbar/Navbar.vue";
  import Footer from "../../components/Footer/Footer.vue";
  import { MailIcon, LinkedinIcon, PhoneIcon, GlobeIcon } from "lucide-vue-next";
  import Yomi_Akinade from "../../assets/Images/YAA.svg";
  
  export default {
    components: {
      Navbar,
      Footer,
      MailIcon,
      LinkedinIcon,
      PhoneIcon,
      GlobeIcon
    },
    data() {
      return {
        profile: {
          id: 1,
          name: "Yomi Akinade",
          position: "Managing Partner",
          image: Yomi_Akinade,
          education: [
            {
              degree: "Bachelor of Science in Economics and Business Administration",
              institution: "Oklahoma State University"
            },
            {
              degree: "MBA",
              institution: "University of Oklahoma"
            },
            {
              degree: "Advanced Management Diploma",
              institution: "Northwestern University's Kellogg School of Management"
            },
            {
              degree: "Postgraduate Diploma in Project Management",
              institution: "University of Wisconsin"
            }
          ],
          expertise: [
            {
              title: "Digital Transformation",
              description: "Leading enterprise-wide digital transformation initiatives, helping organizations reimagine their business models and processes through technology."
            },
            {
              title: "IT Infrastructure",
              description: "Designing and implementing robust IT infrastructure solutions including cloud services, networking, and system architecture."
            },
            {
              title: "ERP Implementation",
              description: "Extensive experience implementing and optimizing Enterprise Resource Planning systems across various industries."
            },
            {
              title: "Strategic Planning",
              description: "Developing comprehensive technology strategies aligned with business objectives to drive innovation and competitive advantage."
            },
            {
              title: "Project Management",
              description: "Certified project management professional with experience leading complex, multi-stakeholder technology programs."
            },
            {
              title: "Cybersecurity",
              description: "Implementing robust security frameworks and solutions to protect critical business assets and information."
            }
          ],
          projects: [
            {
              title: "Core Banking System Transformation",
              client: "Union Bank",
              description: "Led the complete overhaul of the bank's technology infrastructure and core banking system, modernizing operations and enabling digital banking capabilities."
            },
            {
              title: "Cloud Migration Strategy",
              client: "Financial Services Client",
              description: "Developed and executed a comprehensive cloud migration strategy, moving critical applications to secure cloud environments while ensuring compliance with financial regulations."
            },
            {
              title: "ERP Implementation",
              client: "Manufacturing Sector",
              description: "Managed the implementation of an enterprise-wide ERP system, integrating production, inventory, finance, and sales processes to improve operational efficiency."
            },
            {
              title: "Digital Transformation Roadmap",
              client: "Insurance Industry",
              description: "Created a multi-year digital transformation roadmap to modernize legacy systems, enhance customer experience, and implement data-driven decision making."
            }
          ],
          socials: [
            { type: "email", icon: "MailIcon", link: "mailto:yomi@holmen.com", label: "Email" },
            { type: "linkedin", icon: "LinkedinIcon", link: "https://linkedin.com/", label: "LinkedIn" },
            { type: "phone", icon: "PhoneIcon", link: "tel:+1234567890", label: "Call" },
          ]
        }
      };
    }
  };
  </script>