<template>
  <div class="easter-egg">
    <img src="@/assets/logo.svg" alt="Easter Egg" @loadeddata="handleAudioLoaded">
    <audio ref="audio" :src="audioSrc" @loadeddata="handleAudioLoaded"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "./logo.svg",
      showEasterEgg: false,
      audioSrc: "./toasty.mp3",
      typedWord: "",
    };
  },
  methods: {
    playAudio() {
      const audio = this.$refs.audio;
      if (audio) {
        audio.play();
      }
    },
    handleAudioLoaded() {
      this.showEasterEgg = true;
      this.playAudio();
    },
    handleAudioEnded() {
      // Обработчик события окончания воспроизведения аудио
      this.showEasterEgg = false;
      this.typedWord = "";
    },
    handleKeyUp(event) {
      const keyword = "gipsy";

      // Добавляем текущую клавишу к набранному слову
      this.typedWord += event.key.toLowerCase();

      // Логируем текущее набранное слово
      console.log("Typed Word:", this.typedWord);

      // Проверяем, соответствует ли набранное слово ключевому слову
      if (this.typedWord === keyword) {
        // Если аудио еще не загружено, ожидаем его загрузки
        const audio = this.$refs.audio;
        if (audio && audio.readyState < 2) {
          audio.load();
        } else {
          // Иначе, сразу запускаем воспроизведение
          this.handleAudioLoaded();
        }
      } else {
        // Если набранное слово не совпадает, сбрасываем его через 2 секунды
        setTimeout(() => {
          this.typedWord = "";
        }, 2000);
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.handleKeyUp);
  },
}
</script>

<style scoped>
.easter-egg {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: transform 1s ease-in-out;
  transform: translateY(100%);
}

.easter-egg.show {
  transform: translateY(0);
}
</style>