<template>
    <div>
      <Navbar />
      
      <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Profile Header with Name and Title -->
          <div class="mb-12">
            <h1 class="text-5xl font-bold text-gray-800 mb-2">Yomi Akinade</h1>
            <h2 class="text-4xl text-gray-700 font-medium uppercase mb-10">MANAGING PARTNER</h2>
          </div>
          
          <!-- Main Profile Section -->
          <div class="flex flex-col md:flex-row gap-10">
            <!-- Profile Image -->
            <div class="w-full md:w-2/5 lg:w-1/3">
              <div class="w-full rounded-md overflow-hidden shadow-xl">
                <img
                  :src="profile.image"
                  :alt="profile.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Profile Bio -->
            <div class="w-full md:w-3/5 lg:w-2/3">
              <div class="prose max-w-none text-gray-600 text-[20px] leading-relaxed">
                <p class="mb-6 font-bold">
                  Yomi Akinade attended Oklahoma State University, where he earned a Bachelor of Science in Economics and Business Administration, followed by an MBA from the University of Oklahoma. He furthered his education with an Advanced Management Diploma from Northwestern University's Kellogg School of Management and a Postgraduate Diploma in Project Management from the University of Wisconsin.
                </p>
                <p class="mb-6 font-bold">
                  A certified member of the Project Management Institute in the USA, Yomi brings 40 years of experience in banking, finance, information technology, and management consulting. Throughout his career, he has held management positions in various industries, including banking, consulting, real estate, insurance, and financial services.
                </p>
                <p class="mb-6 font-bold">
                  Yomi has provided consulting services in the USA, Europe, Africa, and Asia, working with numerous clients across diverse industries. He has been involved in over 150 IT projects that focus on restructuring and re-engineering processes, strategic planning, project management, cloud infrastructure, cybersecurity, middleware, and ERP software, contributing to firms such as Computech Corp, Whittman-Hart, marchFIRST, Divine Inc, Akinade Associates Inc, Union Bank, and Holmen Consulting.
                </p>
                <p class=" font-bold">
                  From 2010 to 2015, Yomi served as the Technology Consultant and CIO for Union Bank, where he was responsible for overhauling and transforming the bank's technology infrastructure, including its core banking system. Currently, he manages Holmen Consulting.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Expertise Section -->


          <!-- <div class="mt-16">
            <h2 class="text-3xl font-bold text-purple-700 mb-8">Areas of Expertise</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="(expertise, index) in profile.expertise" 
                :key="index"
                class="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 class="text-xl font-semibold text-purple-700 mb-3">
                  {{ expertise.title }}
                </h3>
                <p class="text-gray-600">
                  {{ expertise.description }}
                </p>
              </div>
            </div>
          </div> -->
          
          <!-- Projects Section -->



          <!-- <div class="mt-16">
            <h2 class="text-3xl font-bold text-purple-700 mb-8">Notable Projects</h2>
            <div class="space-y-8">
              <div 
                v-for="(project, index) in profile.projects" 
                :key="index"
                class="border-l-4 border-purple-600 pl-6"
              >
                <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 class="text-xl font-semibold text-gray-800">
                    {{ project.title }}
                  </h3>
                  <span class="text-gray-500 mt-1 md:mt-0">
                    {{ project.client }}
                  </span>
                </div>
                <p class="text-gray-600">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div> -->
          
          <!-- Contact Section -->
          <div class="mt-16 bg-purple-50 p-8 rounded-lg">
            <h2 class="text-3xl font-bold text-purple-700 mb-6">Get in Touch</h2>
            <div class="flex flex-wrap gap-6">
              <a 
                v-for="social in profile.socials" 
                :key="social.type"
                :href="social.link" 
                class="flex items-center bg-white px-4 py-3 rounded-md text-purple-600 hover:text-purple-800 hover:bg-purple-100 transition-colors"
              >
                <component :is="social.icon" size="24" class="mr-2" />
                <span>{{ social.label }}</span>
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