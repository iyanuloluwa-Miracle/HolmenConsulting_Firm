<template>
  <div>
    <Navbar />

    <div
      class="flex flex-col md:flex-row justify-between items-center py-12 px-6"
    >
      <div class="md:w-1/2 md:mr-12 ml-11">
        <h2 class="text-4xl font-bold mt-12">
          About <span class="text-purple-500">Us</span>
        </h2>
        <p class="text-gray-600 leading-relaxed mb-6 font-bold text-[22px]">
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
          class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Meet the Team
        </button>
      </div>

      <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center pt-11">
        <img
          src="../../assets/Images/aboutUs.svg"
          loading="lazy"
          alt="A diverse team of professionals working together at computers"
          class="w-full max-w-[480px] rounded-lg shadow-lg h-auto object-cover"
        />
      </div>
    </div>

    <div class="py-15 px-6 bg-[#FDEEFF]">
      <h2 class="text-5xl font-bold text-center mb-10 pt-10">
        What We Do
      </h2>
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
              Cloud Migration
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
              Simple and effective implementation of ERP solutions with
              acceptable levels of customization to meet your needs.
              Understanding your requirements is critical.
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
              Business Process Re-engineering
            </h2>
            <p class="text-gray-600 text-center text-xl font-semibold">
              Our team helps analyze and redesign your workflows, automating
              processes where possible to enhance efficiency and reduce costs
              while maintaining quality.
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
              Data Analytics
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
              Protect your digital assets with our comprehensive security
              solutions. We provide threat detection, prevention, and response
              services to keep your data safe.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-[48px] md:text-[48px] font-bold text-center mb-12">
          Our <span class="text-purple-600">Team</span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="flex flex-col items-center group"
          >
            <!-- Image Container -->
            <div
              class="relative w-full aspect-square mb-4 overflow-hidden rounded-lg"
            >
              <a>
                <img
                  :src="member.image"
                  loading="lazy"
                  :alt="member.name"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            <!-- Text Content -->
            <div class="text-center">
              <h3 class="text-[30px] font-bold text-gray-900">
                {{ member.name }}
              </h3>
              <p class="text-gray-600 mt-1 font-semibold text-[20px]">
                {{ member.position }}
              </p>

              <!-- Social Links -->
              <div class="flex justify-center gap-4 mt-3">
                <a
                  v-for="social in member.socials"
                  :key="social.type"
                  :href="social.link"
                  class="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                  :aria-label="`${member.name}'s ${social.type}`"
                >
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
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
            { type: "github", icon: "GithubIcon", link: "#" },
          ],
        },
        {
          id: 2,
          name: "Niyi Odunlami",
          position: "Partner",
          image: Niyi,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
            { type: "github", icon: "GithubIcon", link: "#" },
          ],
        },
        {
          id: 3,
          name: "Yemi Kuti",
          position: "Partner - Business Transformation",
          image: Yemi,
          socials: [
            { type: "email", icon: "MailIcon", link: "#" },
            { type: "linkedin", icon: "LinkedinIcon", link: "#" },
            { type: "github", icon: "GithubIcon", link: "#" },
          ],
        },
      ],
    };
  },
};
</script>
