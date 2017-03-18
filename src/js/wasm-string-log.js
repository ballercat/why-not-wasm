/* eslint-env es6 */
export default memory => pointer => {
  const buffer = new Uint8Array(memory.buffer);
  if (buffer[pointer] === 0)
    return;
  console.log(new TextDecoder('utf8').decode(buffer.slice(pointer, buffer.indexOf(0, pointer))));
}
