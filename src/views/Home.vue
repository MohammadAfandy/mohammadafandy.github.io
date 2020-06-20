<template>
  <div class="home">
    <v-img
      dark
      max-height="600px"
      :src="image(backgroundImage)"
    >
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12" align="center" justify="center">
              <div class="display-2 font-weight-bold mt-5">About Me</div>
              <img
                width="200px"
                class="rounded-image my-5"
                :src="image(profileImage)"
              />
              <div class="headline">Web Developer | Tech Enthusiast | Kopites</div>
              <div class="mt-5">{{aboutText}}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <div class="part-container">
      <v-layout wrap my-5 mx-10>
        <v-flex xs12>
          <div class="display-1 font-weight-bold text-center" id="portfolio">My Portfolio</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
              <v-flex :key="i" mx-10 my-5 xs12 sm5 md5 lg5>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    <div class="part-container bg-grey">
      <v-layout wrap my-5 mx-10>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold text-center" id="contact">Contact</div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
    </div>
  </div>
</template>

<script>
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

export default {
  name: "home",
  components: {
    PPortfolioApp,
    PContactInfo
  },
  methods: {
    image(name) {
      return require("../assets/" + name);
    }
  },
  data() {
    return {
      backgroundImage: "background.jpg",
      profileImage: "avatar.png",
      aboutText: "I'm a Web Developer living in Tangerang, Banten, Indonesia and currently working in one of IT Company in Jakarta as PHP Programmer. In my free time, I usally learning about new technology related to programming. My hobby is playing futsal and watching movie",
      apps: [
        {
          name: "Decision Support System",
          images: ["spk1.png", "spk2.png", "spk3.png", "spk4.png", "spk5.png"],
          link: "https://spk-app.herokuapp.com",
          platforms: [
            {
              name: "web",
              icon: "mdi-web"
            }
          ],
          description: "Decision Support Systems Application with SAW and WP Method",
          technologies: [
            {
              name: "Yii2",
              icon: "mdi-language-php",
              link: "https://www.yiiframework.com/"
            },
            {
              name: "PostGreSQL",
              icon: "mdi-database",
              link: "https://www.postgresql.org/"
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MohammadAfandy/spk-app"
          }
        },
        {
          name: "Video App",
          images: ["video-app1.png", "video-app2.png", "video-app3.png"],
          link: "https://video-app-frontend.herokuapp.com",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "https://spk-app.herokuapp.com"
            }
          ],
          description: "Simple Video Management System",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-language-javascript",
              link: "https://vuejs.org/"
            },
            {
              name: "Lumen",
              icon: "mdi-language-php",
              link: "https://lumen.laravel.com/"
            },
            {
              name: "PostGreSQL",
              icon: "mdi-database",
              link: "https://www.postgresql.org/"
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "https://github.com/MohammadAfandy/Video-App"
          }
        }
      ],
      contactLinks: [
        {
          name: "Email",
          value: "afandy9895@gmail.com",
          link: "mailto:afandy9895@gmail.com",
          icon: "mdi-email"
        },
        {
          name: "LinkedIn",
          value: "Mohammad Afandy",
          link: "https://www.linkedin.com/in/mohammad-afandy-28700b137/",
          icon: "mdi-linkedin"
        },
        {
          name: "Github",
          value: "MohammadAfandy",
          link: "https://github.com/MohammadAfandy/",
          icon: "mdi-github"
        },
        {
          name: "Whatsapp",
          value: "Mohammad Afandy",
          link: "https://wa.me/089646433702",
          icon: "mdi-whatsapp"
        },
        {
          name: "Telegram",
          value: "Mohammad Afandy",
          link: "https://t.me/mohafandy",
          icon: "mdi-telegram"
        }
      ]
    };
  }
};
</script>

<style scoped>
  .rounded-image {
    border-radius: 50%;
  }
  .bg-grey {
    background-color: #eee;
  }
  .part-container {
    padding: 30px 0;
  }
</style>