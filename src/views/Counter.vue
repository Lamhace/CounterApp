<template>
  <div>
    <div>
      <div class="header">
        <div>
          <h3>Number Counter</h3>
        </div>
      </div>
      <div class="counter-dir">
        <button @click="$store.commit('decrement')">-</button>
        <span class="counter">
          {{ $store.state.counter }}
        </span>
        <button @click="$store.commit('increment')">+</button>
      </div>
      <span class="reset-btn"><button @click="$store.commit('reset')">Reset</button></span>
      </div>
  </div>
</template>




<script>

export default {
  name: 'Counter'
}
</script>



<style>
.counter-dir{
  margin-top: 10rem;
}
.counter{
  margin: 0 4rem;
  font-size: 3.5rem;
}

.counter-dir button {
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 8px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: expo-brand-demi,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 18px;
  height: 52px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.counter-dir button:hover {
  box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
  opacity: .85;
}

.counter-dir button:active {
  outline: 0;
}

.counter-dir button:focus {
  box-shadow: rgba(0, 0, 0, .5) 0 0 0 3px;
}

@media (max-width: 420px) {
  .counter-dir button {
    height: 48px;
  }
}




.reset-btn button {
  margin-top: 2rem;
  background: #fff;
  backface-visibility: hidden;
  border-radius: .375rem;
  border-style: solid;
  border-width: .125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: 0.5rem 4rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.reset-btn button:not(:disabled):hover {
  transform: scale(1.05);
}

.reset-btn button:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

.reset-btn button:focus {
  outline: 0 solid transparent;
}

.reset-btn button:focus:before {
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

.reset-btn button:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.reset-btnbutton:focus:not(:focus-visible):before {
  border-width: 0;
}

.reset-btn button:not(:disabled):active {
  transform: translateY(.125rem);
}

</style>
