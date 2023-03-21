<template>
  <div class="Home">
     <div class="header">
       <div><h3>Number Counter</h3></div>
       <div>
        <input type="search" placeholder="Search">
       </div>
     </div>
     <div class="main">
          <h4>Impressive easy-to-use Counter for everyone</h4>
          <h2>INCREASE, DECREASE, AND RESET</h2>
          <p class="demo-btn"><RouterLink to="/counter"> <button>TRY DEMO</button></RouterLink></p>
     </div>

     

  </div>
</template>


<script>
</script>


<style>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;
    color: #FFFFFF;
    background-color: #323131;
  }
  input{
  outline: 0;
  width: 100%;
  background: var(--color-light);
  padding: 0 1.6rem;
  border-radius: var(--rad);
  appearance: none;
  transition: all var(--dur) var(--bez);
  z-index: 1;
  position: relative;
  background-color: #eeeaea;
}
.main{
  margin-top: 6rem;
}
.demo-btn button{
  background-image: linear-gradient(#4e4b4b, #010101);
  padding: 1rem 2rem;
  color: #FFFFFF;
  border-radius: 5px;
}

.demo-btn button:hover {
  background-image: linear-gradient(#17222b, #0f161c);
  border-color: #c3ccd3;
  text-decoration: none;
}

</style>
