<template>
  <form class="card" @submit.prevent="cardForm">
    <div class="card__inner">
      <div class="card__wrapper">
        <div class="card__credit-card">
          <div class="card__front-and-back">
            <div class="card__front">
              <div class="card__front-top-wrapper">
                <div class="card__front-chip"></div>
                <logo-card-visa class="card__front-logo" />
              </div>
              <div class="card__front-center">
                <ul class="card__numbers-card">
                  <li class="card__number">{{firstNumbers}}</li>
                  <li class="card__number">{{secondNumbers}}</li>
                  <li class="card__number">{{thirdNumbers}}</li>
                  <li class="card__number">{{lastNumbers}}</li>
                </ul>
              </div>
              <div class="card__front-bottom">
                <div class="card__front-bottom-left">{{nameHolder}}</div>
                <div class="card__front-bottom-right">
                  <p class="card__front-month">{{selectedMonth}}/</p>
                  <p class="card__front-year">{{selectedYears}}</p>
                </div>
              </div>
            </div>
            <div class="card__back">

            </div>
          </div>
        </div>
       
        <fieldset class="card__number-wrapper">
          <h2 class="card__number-title">card number</h2>
          <div class="card__number-items">
            <my-input maxlength="4" class="card__input-number" v-model="firstNumbers"/>
            <my-input maxlength="4" class="card__input-number" v-model="secondNumbers"/>
            <my-input maxlength="4" class="card__input-number" v-model="thirdNumbers"/>
            <my-input maxlength="4" class="card__input-number" v-model="lastNumbers"/>
          </div>
        </fieldset>
        <fieldset class="card__holder-wrapper">
          <my-input class="card__holder" v-model="nameHolder"/>
        </fieldset>
        <fieldset class="card__date-ccv-wrapper">
          <div class="card__date-wrapper">
            <my-select class="card__input-number selected" v-model="selectedMonth" :options="optionsMonth"/>
            <my-select class="card__input-number selected" v-model="selectedYears" :options="optionsYears"/>
          </div>
          <div class="card__ccv-wrapper">
            <my-input maxlength="3" class="card__ccv card__input-number"/>
          </div>
        </fieldset>
        <div class="card__submit-wrapper">
          <my-button class="card__btn">submit</my-button>
        </div>
      </div>
      
    </div>
  </form>
</template>

<script>
import svgVisa from '@/components/svg/logoCardVisa.vue'
import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import LogoCardVisa from '../components/svg/logoCardVisa.vue'
  export default {
  name: 'cardHolder',
  components: {
      svgVisa,
      MyInput,
      MyButton,
      MySelect,
      LogoCardVisa
  },
  data ()
  {
    return {
      firstNumbers: null,
      secondNumbers: null,
      thirdNumbers: null,
      lastNumbers: null,
      nameHolder: null,
      selectedMonth: null,
      selectedYears: null,
      optionsMonth: [
        { value: '01', name: '01' },
        { value: '02', name: '02' },
        { value: '03', name: '03' },
        { value: '04', name: '04' },
        { value: '05', name: '05' },
        { value: '06', name: '06' },
        { value: '07', name: '07' },
        { value: '08', name: '08' },
        { value: '09', name: '09' },
        { value: '10', name: '10' },
        { value: '11', name: '11' },
        {value: '12', name: '12'}
      ],
      optionsYears: [
        { value: '2016', name: '2016' },
        { value: '2017', name: '2017' },
        { value: '2018', name: '2018' },
        { value: '2019', name: '2019' },
        { value: '2020', name: '2020' },
        { value: '2021', name: '2021' },
        { value: '2022', name: '2022' },
        { value: '2023', name: '2023' },
        { value: '2024', name: '2024' },
        { value: '2025', name: '2025' },
      ]
      }
  },
  methods: {
    cardForm ()
    {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul,li {
    list-style-type: none;
  }
  fieldset {
    border: none;
    padding: 0;
    padding: 10px 0;
    position: relative;
    clear: both;
  }
  .selected {
    position: relative;
    width: 100%;
    color: hsl(0, 0, 20);
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    outline: none!important;
    border: 1px solid hsla(0, 0, 0, 0.3);
    box-shadow: inset 0 1px 4px hsla(0, 0, 0, 0.2);
  }
  .card{
    background: linear-gradient(50deg, #f3c680, hsla(179,54%,76%,1));
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    &__inner {
      background: #FFFFFF;
      margin: 150px auto 30px;
      position: relative;
      width: 460px;
      border-radius: 15px;
      padding: 160px 45px 30px;
      box-shadow: 0 10px 40px hsla(0, 0, 0, .1);
    }
    &__credit-card {
      width: 400px;
      height: 280px;
      position: absolute;
      top: -112px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__credit-card:hover &__front-and-back {
      transform: rotateY(180deg);
    }
    &__front-and-back {
      transition: 0.6s;
      transform-style: preserve-3d;
      position: relative;
    }
    &__front, &__back {
      width: 400px;
      height: 250px;
      border-radius: 15px;
      backface-visibility: hidden;
      background: linear-gradient(135deg, #bd6772, #53223f);
      position: absolute;
      color: #fff;
      top: 0;
      left: 0;
      text-shadow: 0 1px 1px hsla(0, 0, 0, 0.3);
      box-shadow: 0 1px 6px hsla(0, 0, 0, 0.3);
    }
    &__front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    &__front-center {
      height: 50px;
    }
    &__front-logo {
      position: absolute;
      right: 20px;
      top: 20px;
    }
    &__front-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      padding: 0 20px;
    }
    &__front-bottom-right {
      display: flex;
    }
    &__front-year {
      width: 50px;
    }
    &__numbers-card {
      display: flex;
      margin-top: 100px;
    }
    &__number {
      margin-right: 43px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    &__number:last-child {
      margin-right: 0px;
    }
    &__back {
      transform: rotateY(180deg);
    }
    &__front::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url('http://cdn.flaticon.com/svg/44/44386.svg') no-repeat center;
      background-size: cover;
      opacity: .05;
    }
    &__front-chip  {
      position: absolute;
      width: 60px;
      height: 45px;
      top: 20px;
      left: 20px;
      background: linear-gradient(135deg, hsl(269,54%,87%) 0%,hsl(200,64%,89%) 44%,hsl(18,55%,94%) 100%);;
      border-radius: 8px;
    }
    &__front-chip::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border: 4px solid hsla(0, 0, 50, .1);
      width: 80%;
      height: 70%;
      border-radius: 5px;
    }
    &__input-number {
      width: 100%;
      height: 18px;
      color: hsl(0, 0, 20);
      padding: 10px;
      border-radius: 5px;
      font-size: 15px;
      outline: none!important;
      border: 1px solid hsla(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 4px hsla(0, 0, 0, 0.2);
    }
    &__number-items {
      display: flex;
      justify-content: space-between;
    }
    &__input-number {
      width: 82px;
      display: inline-block;
      margin-right: 8px;
      
    }
    &__input-number:last-child {
      margin-right: 0;
    }
    &__holder-wrapper {
      display: flex;
    }
    &__holder {
      width: 100%;
      height: 18px;
      color: hsl(0, 0, 20);
      padding: 10px;
      border-radius: 5px;
      font-size: 15px;
      outline: none!important;
      border: 1px solid hsla(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 4px hsla(0, 0, 0, 0.2);
    }
    &__date-ccv-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__ccv {
      clear: none;
      width: 86px;
    }
    &__btn {
      width: 100%;
      outline: none!important;
      background: linear-gradient(180deg, #49a09b, #3d8291);
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      box-shadow: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      margin-top: 15px;
      display: block;
      //background: hsl(86, 76%, 71%);
      color: hsl(0, 0, 100);
      text-decoration: none;
      margin: 20px 0;
      padding: 15px 15px;
      border-radius: 5px;
      position: relative;
    }
  }
</style>