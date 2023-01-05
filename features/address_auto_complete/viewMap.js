export const viewAddress = {};

const viewMapElement = document.createElement("div");
viewMapElement.innerHTML = `
<img src="https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/638357b90f508b04558ecaf8.png" width="25px">
<span>
View Map 
</span>
`;

viewMapElement.style = `
    display: flex;
    align-items: center;
    width: 111px;
    justify-content: space-around;
    position: absolute;
    right: 5px;
    top: -36px;
    padding: 0.2rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
`;

viewMapElement.addEventListener("click", (e) => {
  const addressElement = document.querySelector("#full_address_input");
  const address = addressElement.value;
  const mapUrl = `https://www.google.com/maps/search/${address}`;
  window.open(mapUrl, "_blank").focus();
});

const viewMap = () => viewMapElement;
export default viewMap;
