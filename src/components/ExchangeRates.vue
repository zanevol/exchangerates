<template>
  <div class="er-wrapper">
    <div class="currency-block">
      <h3 class="currency-block-title">
        Курс {{ currency.base }} на {{ formatDate() }}
      </h3>
      <div class="currency-block-list">
        <div
          class="currency-block-list-prev"
          :style="
            currentSlidePosition == 0
              ? 'visibility:hidden;'
              : 'visibility:visible;'
          "
          @click.stop="prevSlide()"
        >
          <img src="@/assets/currency-arrow.svg" alt="currency-arrow-prev" />
        </div>
        <div class="currency-block-list-items">
          <div
            class="currency-block-list-items-wrapper"
            :style="{
              transform: `translateX(${
                -currentSlidePosition * currentBlockWidth * 10
              }%)`,
            }"
          >
            <span
              class="currency-block-list-items-wrapper-text"
              :style="{ flex: `0 0 ${currentBlockWidth}%` }"
              v-for="(cur, idx) in currency.rates"
              :key="'curr' + idx"
            >
              {{ idx }}
            </span>
          </div>
        </div>
        <div
          class="currency-block-list-next"
          :style="
            currentSlidePosition == 7
              ? 'visibility:hidden;'
              : 'visibility:visible;'
          "
          @click.stop="nextSlide()"
        >
          <img src="@/assets/currency-arrow.svg" alt="currency-arrow-next" />
        </div>
      </div>
    </div>
    <div class="user-count-block">
      <input type="text" class="user-count-block-input" v-model="inpValue" />
      <span class="user-count-block-currency">eur</span>
    </div>

    <div class="calc-currencies-block">
      <div
        class="calc-currencies-block-line"
        :style="{
          'margin-left': `calc(${-currentBigSlidePosition * 50}% + ${
            -currentBigSlidePosition * 3
          }px)`,
        }"
      >
        <div
          class="calc-currencies-block-line-item"
          v-for="(cur, idx) in currency.rates"
          :key="'cur' + idx"
        >
          <div class="calc-currencies-block-line-item-info">
            <span class="calc-currencies-block-line-item-info-count">{{
              inpValue
            }}</span>
            <span class="calc-currencies-block-line-item-info-currency">{{
              currency.base
            }}</span>
            <span class="calc-currencies-block-line-item-info-equal"
              >&#61;</span
            >
          </div>
          <div class="calc-currencies-block-line-item-total">
            <span class="calc-currencies-block-line-item-total-sum">{{
              calcCur(cur)
            }}</span>
            <span class="calc-currencies-block-line-item-total-currency">{{
              idx
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons-block">
      <button
        class="buttons-block-btn"
        @click.stop="prevBigSlide()"
        :class="currentBigSlidePosition == 0 ? 'notactive' : ''"
      >
        <span class="buttons-block-btn-prev">
          <img src="@/assets/buttons-arrow.svg" alt="arrow-prev" />
        </span>
        <span class="buttons-block-btn-text">назад</span>
      </button>
      <button
        class="buttons-block-btn"
        @click.stop="nextBigSlide()"
        :class="currentBigSlidePosition == 14 ? 'notactive' : ''"
      >
        <span class="buttons-block-btn-text">далее</span>
        <span class="buttons-block-btn-next">
          <img src="@/assets/buttons-arrow.svg" alt="arrow-next" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeRates",
  data() {
    return {
      currency: "", // переменная с данными с сервера
      date: new Date(), // переменная с датой
      currentSlidePosition: 0, // переменная счетчик для слайдера с названиями валют
      currentBigSlidePosition: 0, // переменная счетчик для слайдера ковертацией валют
      currentBlockWidth: 5, // переменная счетчик ширины блока с названиями валют
      inpValue: "", // переменная со значением инпута
    };
  },
  methods: {
    /**
     * Метод формирования текущей даты
     */
    formatDate() {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return new Intl.DateTimeFormat("ru-Ru", options).format(this.date);
    },
    /**
     * Метод переключения слайдера вправо
     */
    prevSlide() {
      if (this.currentSlidePosition > 0) {
        --this.currentSlidePosition;
      }
    },

    /**
     * Метод премещения слайдера влево
     */
    nextSlide() {
      if (
        this.currentSlidePosition <
        Object.keys(this.currency.rates).length - 25
      ) {
        ++this.currentSlidePosition;
      }
    },

    /**
     * Метод переключения слайдера вправо
     */
    prevBigSlide() {
      if (this.currentBigSlidePosition > 0) {
        this.currentBigSlidePosition--;
      }
    },
    /**
     * Метод премещения слайдера влево
     */
    nextBigSlide() {
      if (
        this.currentBigSlidePosition >=
        Object.keys(this.currency.rates).length - 18
      ) {
        return;
      } else {
        this.currentBigSlidePosition++;
      }
    },

    /**
     * Метод расчета перевода в другие валюты
     */
    calcCur(cur) {
      return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits: 2,
      }).format(this.inpValue * cur);
    },
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
  },
};
</script>

<style lang="sass">
.er-wrapper
	max-width: 720px
	width: 100%
	background: #fff
	.currency-block
		width: 100%
		background: #FFE782
		margin-bottom: 30px
		&-title
			font-style: normal
			font-weight: normal
			font-size: 21px
			line-height: 25px
			color: #2B2D33
			padding: 30px 0 8px 24px
			margin: 0
		&-list
			width: 100%
			display: flex
			justify-content: space-between
			&-items
				width: 90%
				overflow: hidden
				&-wrapper
					width: 100%
					display: flex
					align-items: center
					justify-content: space-between
					transition: all .5s ease-in-out
					&-text
						font-style: normal
						font-weight: 500
						font-size: 14px
						line-height: 16px
						text-align: center
						color: #CCAE68
						padding: 16px 32px
						cursor: pointer
						transition: all .2s ease-in-out
						&:hover
							border-top-left-radius: 10px
							border-top-right-radius: 10px
							background: #FFFFFF
							color: #000
			&-prev
				width: 5%
				display: flex
				align-items: center
				justify-content: center
				transform: rotate(180deg)
				cursor: pointer
			&-next
				width: 5%
				display: flex
				align-items: center
				justify-content: center
				cursor: pointer
	.user-count-block
		text-align-last: right
		padding-right: 24px
		&-input
			width: 120px
			border: none
			border-bottom: 1px solid #D9D9D9
			outline: none
			margin-right: 10px
			font-size: 18px
			&::placeholder
				font-style: normal
				font-weight: normal
				color: #2B2D33
		&-currency
			font-style: normal
			font-weight: normal
			font-size: 18px
			line-height: 21px
			color: #B9B9B9
			text-transform: uppercase

	.calc-currencies-block
		height: 310px
		position: relative
		box-sizing: border-box
		margin: 24px 20px 40px 20px
		overflow: hidden
		&-line
			position: absolute
			min-width: 5490px
			display: flex
			justify-content: space-between
			flex-wrap: wrap
			transition: all .5s ease-in-out
			&-item
				min-width: 327px
				background: #FFFFFF
				box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16)
				border-radius: 12px
				margin-bottom: 18px
				&-info
					padding: 18px 0 20px 30px
					&-count
						font-style: normal
						font-weight: 300
						font-size: 24px
						line-height: 28px
						color: #2B2D33
						margin-right: 5px
					&-currency
						font-weight: 300
						font-size: 24px
						line-height: 28px
						color: #B9B9B9
						margin-right: 5px
						text-transform: uppercase
					&-equal
						font-style: normal
						font-weight: 300
						font-size: 24px
						line-height: 28px
						color: #B9B9B9
				&-total
					padding: 0 0 17px 30px
					&-sum
						font-style: normal
						font-weight: 300
						font-size: 48px
						line-height: 56px
						color: #2B2D33
						margin-right: 5px
					&-currency
						font-style: normal
						font-weight: 300
						font-size: 24px
						line-height: 28px
						color: #2B2D33
						text-transform: uppercase

	.buttons-block
		display: flex
		align-items: center
		justify-content: center
		padding-bottom: 24px
		&-btn
			display: flex
			background: #FFFFFF
			align-items: center
			border: none
			box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16)
			border-radius: 8px
			margin-right: 20px
			padding: 10px 24px
			cursor: pointer
			outline: none
			&.notactive
				background: #EFEFEF

			&:last-child
				margin-right: 0
			&-text
				font-style: normal
				font-weight: 300
				font-size: 14px
				line-height: 16px
				letter-spacing: 1px
				text-transform: uppercase
				color: #2B2D33
			&-prev img
				margin-right: 10px
				transform: rotate(180deg)
			&-next img
				margin-left: 10px
</style>