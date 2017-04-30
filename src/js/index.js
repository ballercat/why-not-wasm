/* eslint-env es6 */
import Physics from './physics';

const physics = new Physics();
window.obj = physics.newObject();

console.log(window.obj);
