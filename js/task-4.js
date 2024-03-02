`use strict`;

function getShippingCost(country) {
  let price;

  switch (country) {
    case `Australia`:
      price = 170;
      break;
    case `China`:
      price = 100;
      break;
    case `Chile`:
      price = 250;
      break;
    case `Jamaica`:
      price = 120;
      break;
  }

  if (
    country == `Australia` ||
    country == `China` ||
    country == `Chile` ||
    country == `Jamaica`
  ) {
    console.log(`Shipping to ${country} will cost ${price} credits`);
  } else {
    console.log(`Sorry, there is no delivery to your country`);
  }
}

getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"
