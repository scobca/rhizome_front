<template>
  <form class="animate__animated animate__fadeInUp form-wrapper" @submit.prevent="submitFeedbackForm">
    <button @click="goBack" class="back-btn-dark animate__animated animate__fadeInUp"><IconArrowLeft  data-aos="fade-up" color="#3987da" :size="20" stroke-width="2" /></button>
    <h1 class="form-heading-dark animate__animated animate__fadeInUp">Вводная консультация</h1>
    <p class="form-subtext-dark animate__animated animate__fadeInUp">Команда студии Rhizome в данном формате сотрудничества закрывает все процессы: product-management, дизайн и разработка. Вы получаете готовый IT-продукт</p>
    <div class="container form-container">
      <div class="form-col1 animate__animated animate__fadeInUp">
        <label for="fullName" class="label-dark">ФИО:</label>
        <input v-model="reqData.name" type="text" id="fullName" name="fullName" required>

        <label for="phoneNumber" class="label-dark">Номер телефона:</label>
        <input v-model="reqData.phone" type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Например, 123-45-678" required>

        <label for="email" class="label-dark">Email:</label>
        <input v-model="reqData.email" type="email" id="email" name="email" required>

        <label class="label-dark">Предпочтительный способ связи:</label>
        <div class="radio-row">
          <label for="contactPhone" class="phone-label-dark"><input v-model="reqData.type" type="radio" id="contactPhone" name="contactMethod" value="phone" > Телефон</label>
          <label for="contactEmail" class="email-label-dark"><input v-model="reqData.type" type="radio" id="contactEmail" name="contactMethod" value="email"> Почта</label>
        </div>
      </div>
      <div class="form-col2 animate__animated animate__fadeInUp">
        <label for="comments" class="label-dark">Комментарии:</label>
        <textarea v-model="reqData.context" id="comments" name="comments" rows="4"></textarea>
        <input type="submit" value="Отправить" @click="sendMail">
      </div>

    </div>
  </form>
</template>

<script>

  import {MailModel} from "@/API/mailModel";

  export default {
    name: "DarkModal",

    props:{},

    data() {
      return {
        reqData:{
          name: null,
          phone: null,
          email: null,
          context: null,
          type: null
        }
      }
    },

    methods:{
      pullData(){

      },

      sendMail(){
        console.log(this.reqData)
        // const mailer = new MailModel()
        // mailer.sendMail(this.reqData)
      }

    }
  }

</script>


<style scoped>
@media only screen and (max-width: 415px) {
  .terminal-uni {
    max-width: 90vw!important;
  }
  .form-heading-light {
    font-size: 2rem!important;
  }
  .h2 {
    font-size: 1rem!important;
  }
  .card-dark {
  }
  .steps-container {
  //flex-wrap: wrap!important;
  }
  .terminal-text-dark {
    font-size: 1rem!important;
  }
  .step-card-dark {
    background-color: transparent!important;
    padding: 0!important;
    border: none!important;
  }
  .step-card-light {
    background-color: transparent!important;
    padding: 0!important;
    border: none!important;
  }
  .terminal-container {
    align-items: center!important;
  }
  .card-light {
    min-height: 4rem!important;
  }
  .terminal-container-dark {
    justify-content: space-between!important;
    align-items: center!important;
  }
  .h1-light {
    font-size: 1.5rem!important;
  }
  .h2-light {
    margin: 0!important;
    font-size: 1rem!important;
  }
  .terminal-text-light {
    font-size: 1rem!important;
  }
  .form-subtext-dark {
    font-size: 1rem!important;
  }
  .form-container {
    gap: 1rem!important;
  }
  .h1-dark {
    font-weight: 700!important;
    font-size: 1.5rem!important;
  }
  .modal-row {
    padding: 0!important;
    align-items: flex-start!important;
    flex-direction: column!important;
  }
}

.radio-row {
  display: flex;
  justify-content: center;
}
.phone-label {
  text-align: center;
}
.phone-label-dark {
  text-align: center;
  color: white;
}
.email-label-dark {
  text-align: center;
  color: white;
}
.disclaimer-row {
  width: 100%;
}
.disclaimer {
  text-align: center;
  opacity: 0.4;
}
.email-label {
  text-align: center;
}
.form-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
}
#comments {
  height: 70%;
}
form {
  font-family: Point, sans-serif;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

.label-dark {
  display: block;
  margin-bottom: 8px;
  color: #e1e1e1;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.radio-group {
  margin-bottom: 15px;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.radio-label input[type="radio"] {
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #2196F3;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

.radio-label input[type="radio"]:checked {
  background-color: #2196F3;
}

.radio-label span {
  color: #333;
}

input[type="submit"] {
  background-color: #274c77;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #0b7dda;
}

.back-btn {
  background-color: transparent;
  border: 2px solid #274c77;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
}
.back-btn-dark {
  background-color: transparent;
  border: 2px solid #3987da;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
}
.back-btn-dark:hover {
  background-color: transparent;
  border: 2px solid #3987da;
  border-radius: 1rem;
  cursor: pointer;
}

.back-btn:hover {
  background-color: white;
  border: 2px solid #274c77;
  border-radius: 1rem;
  cursor: pointer;
}
.form-subtext {
  font-family: Point, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #161616;
}
.form-subtext-dark {
  font-family: Point, sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #dadada;
}
.btn {
  padding: 1.3rem;
  font-size: 1.2rem;
  text-transform: lowercase;
  font-family: Point, sans-serif;
  border-radius: 50px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  display: flex;
}
.btn-primary {
  background-color: #274c77;
}
.form-heading-light {
  color: #274c77;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: Point, sans-serif;
}
.form-heading-dark {
  color: #3987da;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: Point, sans-serif;
}
.modal-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-right: 2rem;
  padding-left: 2rem;
}
.modal-col-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.h2 {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: lowercase;
  color: #3987da;
  margin-bottom: 0;
  font-family: Point, sans-serif;
}
.h1-dark {
  font-size: 2.5rem;
  color: white;
}
.h1-light {
  font-size: 2rem;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2rem;
}
.yellow {
  background-color: #FFB429;
  border: 1px solid #F0A318;
  border-radius: 50%;
  width: 13px;
  height: 13px;
}
.green {
  border: 1px solid #12A025;
  background-color: #25C63A;
  border-radius: 50%;
  width: 13px;
  height: 13px;
}
.red {
  background-color: #FF544D;
  border: 1px solid #DA3C37;
  border-radius: 50%;
  color: #DA3C37;
  font-family: Point, sans-serif;
  padding: 0;
  line-height: 1.3;
  font-weight: 800;
  text-align: center;
  font-size: 0.8rem;
  width: 13px;
  height: 13px;
  transition: all 0.2s ease-in-out;
}
.red:hover {
  background-color: #641f1c;
  cursor: pointer;
}
.steps-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}
.btn-primary:hover {
  background-color: #6096ba;
  color: white!important;
}
.step-card-dark {
  background-color: #1e1e1e;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  font-weight: 600;
  max-width: 14rem;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.step-card-light {
  background-color: #f8f8f8;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  font-weight: 600;
  max-width: 14rem;
  border-radius: 1.3rem;
  border: 2px solid #274c77;
}
.terminal-buttons-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
  max-width: 4rem;
  justify-content: center;
  align-items: center;
}
.appname-dark {
  width: 100%;
  max-width: 44rem;
  color: white;
  background-color: #1e1e1e;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-family: 'Ubuntu Mono', monospace;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.appname-light {
  width: 100%;
  max-width: 44rem;
  color: #1e1e1e;
  background-color: #eaeaea;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-family: 'Ubuntu Mono', monospace;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.appname-dark {
  width: 100%;
  max-width: 44rem;
  color: #1a1a1a;
  background-color: #1e1e1e;
  border-radius: 0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-family: 'Ubuntu Mono', monospace;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.terminal-header-white {
  background-color: white;
  border: 1px solid #e7e7e7;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  gap: 0;
  height: 2.5rem;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
}
.terminal-header-dark {
  background-color: #3b3b3b;
  height: 2.5rem;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid #484848;
  border-bottom: 1px solid #2e2e2e;
  display: flex;
  flex-direction: row;
  gap: 0;
}
.card-dark {
  background-color: #1e1e1e;
  padding: 1rem;
  max-width: 25rem;
  display: flex;
  margin-right: 2rem;
  margin-left: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  min-height: 6rem;
  border-radius: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
}
.h2-light {
  color: #274c77;

}
.card-light {
  background-color: #f8f8f8;
  padding: 1rem;
  max-width: 25rem;
  display: flex;
  margin-right: 2rem;
  margin-left: 0;
  align-items: center;
  align-self: center;
  justify-content: center;
  min-height: 6rem;
  border-radius: 1.3rem;
  border: 2px solid #274c77;
}
.terminal-container {
  background-color: rgba(255, 255, 255, 0.97);
  color: black!important;
  border: 1px solid #e7e7e7;
  height: 100%;max-height: 20rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  padding: 1rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border-top: 0;
  min-height: 90vh;

}
.terminal-container-dark {
  background-color: rgba(31, 31, 31, 0.77);
  height: 100%;
  max-height: 20rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  align-content: flex-start;
  padding: 1rem;
  border-radius: 0rem 0rem 1rem 1rem;
  border: 1px solid #3c3c3c;
  border-top: 0;
  min-height: 90vh;
}
.terminal-white {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: black!important;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 80vw;
  max-width: 90vw;
  min-height: 90vh;
}
.terminal-uni {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: black!important;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 30vw;
  max-width: 50vw;
  min-height: 90vh;
}
.terminal-dark {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  min-width: 80vw;
  max-width: 90vw;
  min-height: 90vh;

}
.offers-container {
  height: 100%;
  max-height: 8rem;
  margin-bottom: 1rem;
}
.terminal-heading-dark {
  color: white;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
}
.terminal-heading-light {
  color: #262626;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 1.5rem;
}
.terminal-text-dark {
  color: white;
  font-family: Point, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  width: 100%;
  max-width: 54rem;

}
.terminal-text-light {
  color: #1e1e1e;
  font-family: Point, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  width: 100%;
  max-width: 54rem;
}
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.81);
  backdrop-filter: blur(20px);
  z-index: 999999;
}

.modal-content {
  z-index: 9999999;
}
:deep(.ant-steps-item-title) {
  color: white!important;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  max-width: 5rem!important;
}
:deep(.ant-steps-item-content) {
  word-wrap: break-word;
  width: 100%;
  max-width: 2rem;
}

.ant-radio-group {
  display: flex;
}
.ant-radio-button-wrapper-checked {
  background-color: #274c77!important;
}
.ant-radio-button-wrapper:hover {
  color: #274c77;
}




</style>