import { Selector } from "testcafe";

fixture`Wessex Mill: Strong white bread flour`
  .page`https://www.wessexmill.co.uk/acatalog/Strong-White-Bread-Flour-10kg-X049.html`;

test("10 Kg is available", async (t) => {
  await t
    .expect(Selector(".cart-button-placement").innerText)
    .notContains("Apologies we are offline");
});

fixture`Marriages: Strong organic white bread flour`
  .page`https://flour.co.uk/view/strong-organic-white`;

test("1 Kg is available", async (t) => {
  console.log(await Selector(".product-options .row:first-child").innerText);
  await t
    .expect(Selector(".product-options .row:first-child").innerText)
    .notContains("OUT OF STOCK");
});

test("6x 1 Kg is available", async (t) => {
  console.log(await Selector(".product-options .row:first-child").innerText);
  await t
    .expect(Selector(".product-options .row:nth-child(2)").innerText)
    .notContains("OUT OF STOCK");
});
