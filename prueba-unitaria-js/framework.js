function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error("Prueba no exitosa");
      }
    }
  };
}

function it(title, callback) {
  try {
    callback();
    console.log(`Ok: ${title}`);
  } catch (error) {
    console.error(`ERROR: ${title}`);
  }
}
