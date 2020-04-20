import { Selector } from "testcafe";

fixture`Wessex Mill: Strong white bread flour`
  .page`https://www.wessexmill.co.uk/acatalog/Strong-White-Bread-Flour-10kg-X049.html`;

test("10 Kg is unavailable", async (t) => {
  await t
    .expect(Selector(".cart-button-placement").innerText)
    .contains("Apologies we are offline");
});

fixture`Marriages: Strong organic white bread flour`
  .page`https://flour.co.uk/view/strong-organic-white`;

test("1 Kg is unavailable", async (t) => {
  console.log(await Selector(".product-options .row:first-child").innerText);
  await t
    .expect(Selector(".product-options .row:first-child").innerText)
    .contains("OUT OF STOCK");
});

test("6x 1 Kg is unavailable", async (t) => {
  console.log(await Selector(".product-options .row:first-child").innerText);
  await t
    .expect(Selector(".product-options .row:nth-child(2)").innerText)
    .contains("OUT OF STOCK");
});
