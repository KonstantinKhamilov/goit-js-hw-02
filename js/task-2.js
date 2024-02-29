`use strict`;

function formatMessage(message, maxLength) {
  let threePoint = "...";
  if (message.length == maxLength) {
    console.log(message);
  } else if (message.length > maxLength) {
    message = message.slice(0, maxLength) + threePoint;
    console.log(message);
  }
}

formatMessage("Curabitur ligula sapien", 16); // "Curabitur ligula..."
formatMessage("Curabitur ligula sapien", 23); // "Curabitur ligula sapien"
formatMessage("Vestibulum facilisis purus nec", 20); // "Vestibulum facilisis..."
formatMessage("Vestibulum facilisis purus nec", 30); // "Vestibulum facilisis purus nec"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // "Nunc sed turpis..."
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); // "Nunc sed turpis a felis in nunc fringilla"
