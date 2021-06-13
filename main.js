const app = {
    data() {
      return { scene: "title", vulture: true, bag: { coins: false, tickets: false } };
    },
    methods: {
      go(scene) {
        console.log(`Move to scene ${scene}`);
        this.scene = scene;
      },
      findSection(el) {
        while (el.nodeName !== "SECTION") {
          el = el.parentElement;
        }
        return el;
      },
    //   playVideo(nextScene) {
    //     const section = this.findSection(event.target);
    //     const image = section.querySelector("img");
    //     const video = section.querySelector("video");
    //     image.style.display = "none";
    //     video.style.display = "block";
    //     video.play();
    //     video.addEventListener("ended", () => {
    //       image.style.display = "block";
    //       video.style.display = "none";
    //       if (nextScene) {
    //         this.scene = nextScene;
    //       }
    //     });
    //   },
    },
  };

  Vue.createApp(app).mount("main");