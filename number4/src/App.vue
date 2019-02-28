<template>
  <div id="app">
    <div id="nav">
      <div class="sidenav">
         <b-link to="/">Home</b-link>
         <b-link to="/reviews">Reviews</b-link>
    </div>
    <b-container fluid>
      <router-view class="content"/>
    </b-container>

   </div>
    <footer>       
      <p>© 2019 Pizzerionardo </p>
      <p>41, Unnamed Road, 979103, Jordan Valley, Malheur County, Oregon</p>        
    </footer>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300');
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ffffff;
  }
  .content {
    margin-left: 200px;
    padding: 25px;
  
    font-family: 'Roboto', sans-serif;
    max-width: 980px;
  }
  .content h2 {
    font-weight: 700;
  }
  .content p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: .3px;
    font-weight: 500;
  }
  .sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
    box-shadow: 6px 0 6px rgba(0,0,0,.1);
  }
  .sidenav a {
    padding: 6px 6px 6px 32px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
    text-align: left;
  }
  .sidenav a:hover {
    color: #f1f1f1;
  }
  .main {
    margin-left: 200px; /* Same as the width of the sidenav */
  }
  footer {
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    color: grey;
    text-align: center;
    margin-left: 200px;
    font-size: 12px;
  }
  footer p{
    margin: 0;
  }
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
