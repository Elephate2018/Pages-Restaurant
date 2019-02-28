import React from 'react';
import {Helmet} from "react-helmet";

const Menu = () => (
    <article>
        <Helmet>
            <title>Pizzeriotella</title>
        </Helmet>    
        <div className="content">
            <p>
                Dear guest, welcome to the website of our pizzeria.
                We have been operating on the market for a short time, but we are sure that in our restaurant you will eat a delicious pizza. 
                Go to the reviews tab to find out what other customers think about our pizzeria.

            </p>
        </div>

        <h1>Price list</h1>
        <div>
            <table>
                <tbody>   
                <tr>
                    <th>Pizza</th>
                    <th>30cm</th>
                    <th>40cm</th>
                </tr>
                <tr>
                    <td>Pizza Margeritta</td>
                    <td>13</td>
                    <td>16.9</td>
                </tr>
                <tr>
                    <td>Pizza capricciosa</td>
                    <td>15</td>
                    <td>19.5</td>
                </tr>
                <tr>
                    <td>Pitra quattro fornaggii </td>
                    <td>16</td>
                    <td>20.8</td>
                </tr>
                <tr>
                    <td>Pizza bianca</td>
                    <td>15</td>
                    <td>19.50</td>
                </tr>
                <tr>
                    <td>Sicilian pizza</td>
                    <td>20</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>pizza romana </td>
                    <td>14</td>
                    <td>18.2</td>
                </tr>
                <tr>
                    <td>New York style pizza</td>
                    <td>18</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>Vegge pizza</td>
                    <td>19</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>pizza napoletana</td>
                    <td>20</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>Pizza al raglio</td>
                    <td>17</td>
                    <td>22.1</td>
                </tr>
                <tr>
                    <td>Pizza marinara</td>
                    <td>22</td>
                    <td>28.6</td>
                </tr>
                <tr>
                    <td>Pizza de Vesuvius </td>
                    <td>15</td>
                    <td>19.5</td>
                </tr>
                </tbody>
            </table>
            <h3>Other</h3>   
            <table> 
                <tbody>     
                
                <tr>
                    <td>sausage & chips  </td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>grilled fish with potatoes</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Khao pad</td>
                    <td>19</td>
                </tr>         
                <tr>
                    <td>Vegetable pasta</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>Roast chicken</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Apple juice</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>turkish delights</td>
                    <td>10</td>
                </tr>         
                <tr>
                    <td>Tomato soup </td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>French onion soup</td>
                    <td>11</td>
                </tr>
                </tbody>
            </table>
        </div> 
    </article>
)

export default Menu