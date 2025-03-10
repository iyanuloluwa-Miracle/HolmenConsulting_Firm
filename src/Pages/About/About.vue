<template>
  <div>
    <Navbar />

    <div
      class="flex flex-col md:flex-row justify-between items-center py-12 px-6 md:py-12 md:px-6"
    >
      <!-- Text Content -->
      <div class="w-full md:w-1/2 md:mr-12 md:ml-11">
        <h2 class="text-3xl md:text-4xl font-bold mt-6 md:mt-12">
          About <span class="text-purple-500">Us</span>
        </h2>
        <p
          class="text-gray-600 leading-relaxed mb-6 font-bold text-lg md:text-[22px]"
        >
          At Holmen, we are a technology professional services company dedicated
          to empowering clients across the financial, telecom, energy,
          manufacturing, and service industries. We specialize in delivering
          transformative digital solutions that drive innovation, operational
          excellence, and enhance value. With a focus on digital transformation,
          we leverage cutting-edge technology and strategic insights to enable
          our clients achieve greater productivity and sustainable growth in a
          rapidly evolving digital landscape.
        </p>
        <button
          class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-md transition duration-300 ease-in-out"
        >
          Meet the Team
        </button>
      </div>

      <!-- Image -->
      <div class="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:pt-11">
        <img
          src="../../assets/Images/aboutUs.svg"
          loading="lazy"
          alt="A diverse team of professionals working together at computers"
          class="w-full max-w-[480px] rounded-lg shadow-lg h-auto object-cover"
        />
      </div>
    </div>

    <div class="py-15 px-6 bg-[#FDEEFF]">
      <h2 class="text-5xl font-bold text-center mb-10 pt-10">What We Do</h2>
      <div class="container mx-auto px-4 py-12 bg-[#FDEEFF]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Digital Transformation Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/dt.svg"
                  alt="Digital Transformation"
                  loading="lazy"
                />
              </div>
            </div>
            <h2
              class="text-[33px] font-semibold text-gray-800 mb-4 text-center"
            >
              Digital Transformation
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We will define your digital IT architecture and design a
              transformation road-map to digitize your assets, align your people
              with your business goals, stimulate innovation, drive operational
              efficiency.
            </p>
          </div>

          <!-- Cloud Migration Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/CM.svg"
                  loading="lazy"
                  alt="Digital Transformation"
                  width="250px"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Cloud Infrastructure
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Business Process Re-Engineering (BPR) optimizes core processes by
              automating non-value-added tasks. Our team collaborates to analyze
              and redesign your workflows.
            </p>
          </div>

          <!-- ERP & Core Systems Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/erp.svg"
                  loading="lazy"
                  alt="Digital Transformation"
                  width="310px"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              ERP & Core Systems
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Leveraging modern technology to extend and improve core banking &
              business processes & rolling out IT Infrastructure.
            </p>
          </div>

          <!-- Business Process Re-engineering Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/bussiness.svg"
                  alt="Digital Transformation"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Implementation Management
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Designing Processes with Best Business Practices to mapping
              Business Requirements to Solution Designs & managing Resources,
              Materials & Technology.
            </p>
          </div>

          <!-- Data Analytics Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/it-infrastructure.svg"
                  alt="Digital Transformation"
                  width="280px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Data Management
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Transform your raw data into actionable insights with our advanced
              analytics solutions. We help you make data-driven decisions to
              drive business growth.
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/Data-security.svg"
                  alt="Digital Transformation"
                  width="360px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Cybersecurity Solutions
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We deploy end-to-end cybersecurity solutions, including NAC,
              encryption stacks, WAF, DAM, and more, as well as SOC solutions,
              managing complete security operations centers for our clients
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/qualityAssurance.svg"
                  alt="Digital Transformation"
                  width="260px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Quality Assurance
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We provide comprehensive quality assurance services to ensure that
              products and processes meet the highest standards of reliability,
              functionality, and user satisfaction.
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/consulting.svg"
                  alt="Digital Transformation"
                  width="260px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Consulting Services
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We offer expert project management services to ensure successful
              planning, execution, and delivery of projects, aligning outcomes
              with strategic business objectives
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/projectManagement.svg"
                  alt="Digital Transformation"
                  width="360px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Project Management
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We offer expert project management services to ensure successful
              planning, execution, and delivery of projects, aligning outcomes
              with strategic business objectives.
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/softwareDevelopment.svg"
                  alt="Digital Transformation"
                  width="360px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Software Development
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We deliver innovative,user-focused software solutions that fuel
              business growth and efficiency. With expertise in custom
              development, mobile and web applications, cloud integration, and
              data analytics.
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/advisoryService.svg"
                  alt="Digital Transformation"
                  width="360px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              Advisory Services
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Protect your digital assets with our comprehensive security
              solutions. We provide threat detection, prevention, and response
              services to keep your data safe.
            </p>
          </div>

          <!-- Cybersecurity Solutions Card -->
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-center mb-6">
              <div class="relative">
                <img
                  src="../../assets/Images/ITsupport.svg"
                  alt="Digital Transformation"
                  width="360px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 class="text-[33px] font-bold text-gray-800 mb-4 text-center">
              IT Organization Support
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              We specialize in IT organization restructuring, technology
              support, and implementing best practice process engineering to
              optimize operational efficiency and drive business growth.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-purple-700 text-center mb-2"
        >
          Meet Our Team
        </h1>

        <!-- Grid container with responsive layout -->
        <div
          class="flex flex-col lg:flex-row gap-8 justify-center items-center mt-8"
        >
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="flex flex-col items-center w-full lg:w-1/4"
          >
            <!-- Circular Image Container -->
            <div class="w-48 h-48 mb-6 rounded-full overflow-hidden">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Member Info -->
            <div class="text-center">
              <h3 class="text-2xl text-purple-700 font-bold mb-2">
                {{ member.name }}
              </h3>
              <p class="text-[18px] text-gray-700 max-w-[200px] font-semibold">
                {{ member.position }}
              </p>
            </div>

            <!-- View Profile Button -->
            <router-link
              :to="`/profile/${member.id}`"
              class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 mt-3 rounded-md transition duration-300 ease-in-out"
            >
              View Profile
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-vue-next";
import Yomi_Akinade from "../../assets/Images/YAA.svg";
import Niyi from "../../assets/Images/Niyi.svg";
import Yemi from "../../assets/Images/Yemi.svg";
import Michael from "../../assets/Images/michael.svg";
import Footer from "../../components/Footer/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
    MailIcon,
    LinkedinIcon,
    GithubIcon,
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Yomi Akinade",
          position: "Managing Partner",
          image: Yomi_Akinade,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
          ],
        },
        {
          id: 2,
          name: "Tayo Oyolola",
          position: "Partner: BUSINESS DEVELOPMENT & PROJECT MANAGEMENT",
          image: Niyi,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
          ],
        },
        {
          id: 3,
          name: "Yemi Keri",
          position: "Partner: Business Transformation and Program Management",
          image: Yemi,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
          ],
        },

        {
          id: 4,
          name: "MICHAEL J SCHMIDT",
          position: "Partner: INFRASTRUCTURE & WEB DEVELOPMENT",
          image: Michael,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
          ],
        },

        // {
        //   id: 3,
        //   name: "Yemi Kuti",
        //   position: "Partner - Business Transformation",
        //   image: Yemi,
        //   socials: [
        //     { type: "email", icon: "MailIcon", link: "#" },
        //     { type: "linkedin", icon: "LinkedinIcon", link: "#" },
        //   ],
        // },
      ],
    };
  },
};
</script>
