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
          We are a tightly focused professional services organization dedicated
          to empowering businesses with innovative, insightful, and
          results-driven solutions. Our expertise spans across strategy,
          technology, and creative services, enabling us to address complex
          challenges and drive measurable success.
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
          alt="A diverse team of professionals working together at computers"
          class="w-full max-w-[480px] rounded-lg shadow-lg h-auto object-cover"
        />
      </div>
    </div>

    <div class="py-15 px-6 bg-[#FDEEFF]">
      <h2 class="text-5xl font-bold text-center mb-10 pt-10">
        What we believe
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Digital Transformation -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/Transformation.svg"
              alt="Digital Transformation"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-4">Digital Transformation</h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Modernizing IT Infrastructure and System.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Enhancing Customer Experience with AI and Machine
                Learning.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Optimizing Operations through Automation.</span
              >
            </li>
          </ul>
        </div>

        <!-- Target Market -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/market.svg"
              alt="Target Market"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-4">Target Market</h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Companies or Institutions in Transition.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Fast growing Entities or Large Corporate Groups</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold">Start ups.</span>
            </li>
          </ul>
        </div>

        <!-- Improved Management Focus -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/Focus (2).svg"
              alt="Improved Management Focus"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-4">Improved Management Focus</h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2 font-semibold">•</span>
              <span class="font-semibold"
                >Delivering first class professional service to Clients.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Less bureaucracy promotes faster decision.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Independence ensures objectiveness.</span
              >
            </li>
          </ul>
        </div>

        <!-- Operating Model -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/operating-model.svg"
              alt="Operating Model"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-4">Operating Model</h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Management, sales and delivery aligned at a local/market
                level.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Market/Customer-focused model( vs a matrix or “corporate
                top-down model)”.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold">Privately held.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
        <!-- Focus on building strong customer relationships -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/award.svg"
              alt="Digital Transformation"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-2">
            Focus on building strong customer relationships
          </h3>

          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Provide superior customer service.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Customer feedback solicited on every assignment or project,
                with managerial follow-up.</span
              >
            </li>

            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Team and individual accountability</span
              >
            </li>
          </ul>
        </div>

        <!-- Target Market -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/market.svg"
              alt="Target Market"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-2">
            Commitment to employee personal and professional growth
          </h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Companies or Institutions in Transition</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Fast growing Entities or Large Corporate Groups</span
              >
            </li>

            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold">Start ups.</span>
            </li>
          </ul>
        </div>

        <!-- Improved Management Focus -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/focus.svg"
              alt="Improved Management Focus"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-2">Better Customer Focus</h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Business decisions made closet to the market/customer.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Offerings locally tailored to specific customer needs.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Dedication to ethical practices.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Fostering collaboration and teamwork.</span
              >
            </li>
          </ul>
        </div>

        <!-- Operating Model -->
        <div
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <div>
            <img
              src="../../assets/Images/user.svg"
              alt="Operating Model"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-[25px] font-bold mb-2">
            Excellence in management and leadership
          </h3>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold">Accountability for results.</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Accountability to those supervised</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Respect for diversity and inclusion.</span
              >
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span class="font-semibold"
                >Transparency in decision-making processes.</span
              >
            </li>
          </ul>
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
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <!-- Text Content -->
            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-900">
                {{ member.name }}
              </h3>
              <p class="text-gray-600 mt-1">{{ member.position }}</p>

              

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
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import { MailIcon, LinkedinIcon, GithubIcon } from 'lucide-vue-next'
import Yomi_Akinade from '../../assets/Images/YAA.svg'
import Niyi from '../../assets/Images/Niyi.svg'
import Yemi from '../../assets/Images/Yemi.svg'


export default {
  components: {
    Navbar,
    MailIcon,
    LinkedinIcon,
    GithubIcon
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Yomi Akinade',
          position: 'Managing Partner',
          image: Yomi_Akinade,
          socials: [
            { type: 'email', icon: 'MailIcon', link: '#' },
            { type: 'linkedin', icon: 'LinkedinIcon', link: '#' },
            { type: 'github', icon: 'GithubIcon', link: '#' }
          ]
        },
        {
          id: 2,
          name: 'Niyi Odunlami',
          position: 'Partner',
          image: Niyi,
          socials: [
            { type: 'email', icon: 'MailIcon', link: '#' },
            { type: 'linkedin', icon: 'LinkedinIcon', link: '#' },
            { type: 'github', icon: 'GithubIcon', link: '#' }
          ]
        },
        {
          id: 3,
          name: 'Yemi Kuti',
          position: 'Partner - Business Transformation',
          image: Yemi,
          socials: [
            { type: 'email', icon: 'MailIcon', link: '#' },
            { type: 'linkedin', icon: 'LinkedinIcon', link: '#' },
            { type: 'github', icon: 'GithubIcon', link: '#' }
          ]
        }
      ]
    }
  }
}
</script>
