const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
  };

  const parseInputs = (...input) => {
    return input.map(str => parseInt(str));
  };