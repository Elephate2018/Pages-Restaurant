<template>
  <b-container class="hello">
 
    <header>
     <vue-headful
          title="Restaurant"
      />
      <div>
        <b-jumbotron >
          <template slot="header">Welcome in restaurant</template>
          <template slot="lead" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent aliquam scelerisque eleifend. Morbi placerat, erat sit amet cursus
            tincidunt, metus eros ornare velit, ac vulputate neque justo vel ipsum.
            Fusce luctus sed turpis vel accumsan. Suspendisse rutrum tortor et ipsum maximus, 
            iaculis dolor rhoncus. Vestibulum elementum augue quis venenatis vulputate.
          </template>
          <hr class="my-4" />
          <p>
            Aenean diam ante, consequat et malesuada id, viverra sed purus.
            Proin varius congue ultrices. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas
          </p>
          <b-button variant="primary" to="/o-nas">About us</b-button>
        </b-jumbotron>
      </div>
    </header>  
  </b-container>
</template>
<script>
  export default {
    name: 'HomeContent',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    background: white;
    border: 1px solid;
    border: 1.24;
    border-radius: 0.3rem;
    padding: 20px;
    border-color: #bbbbbb;
  }
  .jumbotron {
    background: white;
  }
  .jumbotron button {
    float: right;
  }
  .display-3 {
    font-size: 3vw;
    font-weight: 700;
 
  }
</style>
