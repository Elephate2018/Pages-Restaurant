import React from 'react';
import {Helmet} from "react-helmet";

const Review = () => (
    <article>
        <Helmet>
          <title>Pizzeriotella - Reviews</title>
        </Helmet>  
        <h1>Reviews</h1>
        <div className="container">
            <section>    
                <div>
                When choosing a pizzeria you always look at one factor - how many local people eat there. If a lot, it means that the pizza is good.
                </div>
            </section>
            <section>   
                <div>
                Pizzeria in X? In this case, the only choice, within 100 kilometers, is the pizzeria x. Even if there were more pizzerias, I would go to the pizzeria X, because the food is really great. I will go there often for dinners.
                </div>
            </section>
            <section>          
                <div>
                I love this pizzeria! Andrei, the owner of the restaurant, greeted us when we entered the room and asked the waiter to show us the best table for our family (me + husband + 1 adolescent daughter).  We were able to watch TV while eating pizza. 
                </div>
            </section>
            <section>           
                <div>
                Well I was afraid if the restaurant is capable of our group of 24. Fortunately enough, the pizzeria has a separate room dedicated to groups. 
                </div>
            </section>
            <section>
                <div>
                Wonderful, extremely tasty pizza. The place itself is great too. So cozy atmosphere inside, we were treated by restaurant staff as a part of their family. That was so kind of them!  I need to ask the chief for the recipe, It was best of its kind 
                </div>
            </section>
        </div> 
    </article>
)

export default Review