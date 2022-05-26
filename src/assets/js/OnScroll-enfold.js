
Enfold({
    effects: {
      log: (entry) => {
        // User defined sideEffect function
        console.log("LOG EFFECT");
        console.log(entry.target);
      },
    },
  });