import 'babel-polyfill';
import fruit from './fruit';
import $ from 'jquery';

$('<h1>Fruit</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const item of fruit) {
    $('<li></li>').text(item).appendTo(ul);
}