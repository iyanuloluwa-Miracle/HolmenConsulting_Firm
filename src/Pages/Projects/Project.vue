<template>
  <div>
    <Navbar />

    <div
      class="flex flex-col md:flex-row justify-between items-center py-12 px-6"
    >
      <div class="md:w-1/2 md:mr-12 ml-11">
        <h2 class="text-4xl font-bold mt-16 mb-6">
          Recents <span class="text-purple-500">Projects</span>
        </h2>
        <p class="text-gray-600 leading-relaxed mb-6 font-bold text-[22px]">
          At Holmen, we are more than just a consulting firm – we are a tightly
          focused professional services organization dedicated to empowering
          businesses with transformative solutions. With a passion for
          excellence and a commitment to innovation, we take pride in delivering
          insightful, creative, and results-driven services that elevate our
          clients to new heights of success..
        </p>
        <button
          class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Meet the Team
        </button>
      </div>

      <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center pt-11">
        <img
          src="../../assets/Images/recent-project.svg"
          alt="A diverse team of professionals working together at computers"
          class="w-full max-w-[480px] rounded-lg shadow-lg h-auto object-cover"
        />
      </div>
    </div>

    <div class="min-h-screen bg-[#FDEEFF] p-4 md:p-8">
      <!-- Main Container -->
      <div class="max-w-7xl mx-auto">
        <h1
          class="text-3xl md:text-4xl font-bold text-[#4B3F3E] text-center mb-12"
        >
          Highlights of Recent Projects
        </h1>

        <!-- Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div class="relative h-48 md:h-64">
              <img
                :src="project.image"
                :alt="project.description"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <p
                class="text-gray-700 text-sm md:text-base leading-relaxed font-semibold"
              >
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Some of Our Valued <span class="text-purple-600">Clients</span>
        </h2>

        <!-- Grid for client logos -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div
            v-for="(client, index) in clients"
            :key="index"
            class="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
          >
            <div
              class="w-full aspect-[3/2] relative flex items-center justify-center"
            >
              <img
                :src="client.logo"
                :alt="client.name"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />


  </div>
</template>

<script>
import Footer from "../../components/Footer/Footer.vue";
import Navbar from "../../components/Navbar/Navbar.vue";
import graphs from "../../assets/card-images/graphs.svg";
import collage from "../../assets/card-images/collage.svg";
import laptop from "../../assets/card-images/scrolling-laptop.svg";
import cloud_migration from "../../assets/card-images/social-clouds.svg";
import internet_security from "../../assets/card-images/internet-secuirty-badge.svg";
import software_image from "../../assets/card-images/3d-cryptocurrency-rendering-design.svg";

import Coronation_Merchant_Bank from '../../assets/card-images/CoronationBank.svg';
import Custodian from '../../assets/card-images/Custodian.svg'
import SterlingBank from '../../assets/card-images/Sterlingbank.svg'
import NIGERIAN_PORT_AUTHORITY from '../../assets/card-images/NIGERIANPORTAUTHORITY.svg'
import BOI from '../../assets/card-images/BOI.svg'
import Unity_Bank from '../../assets/card-images/UnionBank.svg'
import Bedc from '../../assets/card-images/BEDC.svg'
import  FSDH from '../../assets/card-images/Merchant.svg'


export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      projects: [
        {
          image: graphs,
          description:
            "Roll-out of various multi-layered security infrastructure for a Development bank (FDI) consisting of Web Application Firewall, Database Activity Monitoring, Encryption of Database and File & Network Access Control. These four initiatives has totally strengthened the protection of their database & Infrastructure.",
        },
        {
          image: collage,
          description:
            "Collaborated with four banks in migrating, integrating & outsourcing on premise security systems monitoring to MSSP Cybersoc. The end results are that our clients were able to get round the clock alert & monitoring, save significantly on system upgrades, minimize resource allocation and receive better security expertise.",
        },
        {
          image: laptop,
          description:
            "Assisted a major Insurance conglomerate in migrating on premise core servers with different databases to Azure Cloud Services. This has led to significant reduction in running cost of IT infrastructure and improve operations efficiency.",
        },
        {
          image: cloud_migration,
          description:
            "Currently working with a bank to integrate all 3rd party applications (using Oracle ESB) to Core Banking & develop a robust Business Intelligence tool that provides smart analytics (using single source of truth) into their customer's activities.",
        },
        {
          image: internet_security,
          description:
            "Collaborating with a major Utility company in integrating all their disparate 3rd party applications using middleware (ESB) to their new ERP to create a single source of truth and achieve greater efficiency in operations.",
        },
        {
          image: software_image,
          description:
            "Implemented encryption software to safeguard both data in motion and at rest through out the bank's network and databases.",
        },
      ],

      clients: [
        {
          name: 'Coronation Merchant Bank',
          logo: Coronation_Merchant_Bank
        },
        {
          name: 'Custodian',
          logo: Custodian
        },
        {
          name: 'Sterling Bank',
          logo: SterlingBank
        },
        {
          name: 'Nigerian Ports Authority',
          logo: NIGERIAN_PORT_AUTHORITY
        },
        {
          name: 'Bank of Industry',
          logo: BOI
        },
        {
          name: 'Union Bank',
          logo: Unity_Bank
        },
        {
          name: 'BEDC',
          logo: Bedc
        },
        {
          name: 'FSDH',
          logo: FSDH
        }
      ]
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
