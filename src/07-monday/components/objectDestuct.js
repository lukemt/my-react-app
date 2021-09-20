export function objectDestruct() {
  const obj = {
    foo: 1,
    bar: 2,
  };

  const { foo, bar } = obj;

  console.log(foo);
  console.log(bar);

  // -------------

  function bla(param) {
    console.log(param);
  }

  function bla2({ foo, bar }) {
    console.log(foo);
    console.log(bar);
  }

  bla(obj);

  // same
  bla({
    foo: 1,
    bar: 2,
  });
}
