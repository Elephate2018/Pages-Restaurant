<template>
  <div class="menu">
    <vue-headful
        title="Pizzerionardo"
      /> 
    <section class="text">
      <p>
       We are a company with a long tradition.
        We have been operating on the market for over a dozen years, invariably offering delicious pizzas and caring for the quality of service.
        We have affordable prices, for every budget

      </p> 
    </section>
    <section>
       <table style="widtd: 50%">
            <h2>Restaurant</h2>
            <tr>
                <th style="text-align: left">Pizza</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Pepperoni pizza</td>
                <td>22</td>
            </tr>
            <tr>
                <td>Lazio</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Neapolitan pizza</td>
                <td>23</td>
            </tr>
            <tr>
                <td>Neapolitan pizza</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Domino's</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Siciliana pizza</td>
                <td>16</td>
            </tr>
            <tr>
                <td>BBQ Chicken pizza </td>
                <td>18</td>
            </tr>
            <tr>
                <td>Havaiian Pizza</td>
                <td>19</td>
            </tr>
            <tr>
                <td>Meat-lovel pizza</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Basiliana</td>
                <td>22</td>
            </tr>
            <tr>
                <td>Chicken pizza</td>
                <td>22</td>
            </tr>
            <tr>
                <td>Veggie pizza</td>
                <td>22</td>
            </tr>
             <tr>
                <td>Campfire pepperoni</td>
                <td>22</td>
            </tr>
        </table>
        <table style="widtd: 50%">
          <h5>Other</h5>
            <tr>
                <th style="text-align: left"></th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Curried cottage pie</td>
                <td>16</td>
            </tr>
            <tr>
                <td>tomato tart</td>
                <td>11</td>
            </tr>
            <tr>
                <td>victoria sponge cake</td>
                <td>16</td>
            </tr>
            <tr>
                <td>English Tea</td>
                <td>11</td>
            </tr>
            <tr>
                <td>Mineral water</td>
                <td>14</td>
            </tr>
            <tr>
                <td>tomato soup</td>
                <td>12</td>
            </tr>
            <tr>
                <td>fruit salad</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Chocolate brownies</td>
                <td>17</td>
            </tr>
            <tr>
                <td>turkish delights</td>
                <td>13</td>
            </tr>
        </table>
    </section>
  </div>
</template>

<style>

h5 {
  padding-top: 15px;  
}

table {
  line-height: 26px;
  float: left;

}

section {
  text-align: center;
}

tr {
  text-align: left;
 
}

tr > td:first-child {
   min-width: 250px!important;
}

.menu {
    display: flex; 
    flex-direction: column; 
    padding-left: 55px;
}

section:nth-child(1) {
    max-width: 650px;
}

section:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.text {
    text-align: left;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'menu'
}
</script>