<template>
  <div class="review">
     <vue-headful
        title="Pizzerionardo – Reviews"
      />      
     <section>
        <h2>
          Reviews
        </h2>
        <article>
          <p>
            For the last 3 days we were eating french fries, chickens, but… we much needed a change. 
          </p>
        </article>
        <article>
          <p>
      I     Pizzeria X is one of the most pleasant places I have had the opportunity to visit this year. Great atmosphere, friendly                 service,delicious food. What more could you want?
          </p>
        </article>
        <article>
          <p>
            We are a small family of 3 (we + small kid) and we’re very pleased with the service and the quality of pizza, mmm.
          </p>
        </article>
        <article>
          <p>
            I have been working on a night shift for a long time. I was looking for a pizzeria, where I could drink a beer and eat a pizza at 5 am. I could not find one until my friend recommended a x restaurant. It was a hit. I am glad that the pizzeria works at night, and in addition, I must admit that it is very tasty.
          </p>
        </article>
        <article>
          <p>
            I literally loved the atmosphere in this pizzeria. Impressive decoration,  great people. We were able to sit around the table and play a guitar song. I needed it so much!  
          </p>
        </article>
    </section>
  </div>
</template>

<style>
  h5 {
    font-weight: 900!important;
  }
  h2 {
         
    text-align: left;
   ;
  }
  section {
    text-align: center;
    padding: 20px;
  }

  .content p {
    font-weight: 900;
    color: #656565;
  }

  article {
    text-align: left;
    padding: 10px;
    margin-top: 10px;
    border-bottom: 1px solid;
    border-color: #e6e6e6;
  }
</style>

<script>
// @ is an alias to /src


export default {
  name: 'review'
}
</script>