import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { UseCardValidator } from "../hooks/UseCardValidate";

export const CreditCardForm = () => {
  const URL = "http://localhost:8080/api/credit-cards/validate";
  const cardDetails = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const [card, setCard] = useState(cardDetails);
  const [responseData, setResponseData] = useState();
  const [cardDetailsErrors, setCardDetailsErrors] = useState<any>({});

  const handleCardValidation = (e: any) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const verifyCardDetail = async (e: any) => {
    setResponseData(undefined);
    console.log(card);
    e?.preventDefault();
    setCardDetailsErrors(UseCardValidator(card));

    console.log(Object.keys(UseCardValidator(card)));
    if (Object.keys(UseCardValidator(card)).length === 0) {
      try {
        const apiResponseData = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(card),
        });
        const response = await apiResponseData.json();
        console.log(response);
        setResponseData(response?.valid);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-[80%] md:w-[30%] m-auto my-auto">
      <div className="text-center">
    <div className="text-3xl font-bold">Jessy's Store</div>
    <br />
    </div>
      <form>
        <small style={{ color: "red", margin: "0", padding: "0" }}>
          {cardDetailsErrors.cardNumber}
        </small>
        <FormInput
          id="cardNumber"
          name="cardNumber"
          value={card.cardNumber}
          label="Card Number"
          placeholder="Card Number"
          handleChange={handleCardValidation}
          type="text"
        />
        <div className="flex justify-between gap-2">
          <div>
            <small style={{ color: "red", margin: "0", padding: "0" }}>
              {cardDetailsErrors.expiryDate}
            </small>
            <br />

            <FormInput
              id="expiryDate"
              name="expiryDate"
              value={card.expiryDate}
              label="Expiry Date"
              placeholder="Expiry Date"
              handleChange={handleCardValidation}
              type="text"
            />
          </div>

          <div>
            <small style={{ color: "red", margin: "0", padding: "0" }}>
              {cardDetailsErrors.cvv}
            </small>
            <br />
            <FormInput
              id="cvv"
              name="cvv"
              value={card.cvv}
              label="CVV"
              placeholder="CVV"
              handleChange={handleCardValidation}
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center" >
          <button
            onClick={(e) => verifyCardDetail(e)}
            type="submit"
            className="text-white bg-[#59A7EA] focus:ring-4 rounded-[8px] focus:outline-none font-medium w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Validate
          </button>
          {responseData + "" == "true" ? (
            <i className="fa fa-solid fa-check text-[green]"> </i>
          ) : 
          responseData == undefined ? (
            <span className=""> </span>
          ) : 
          (
            <i className="fa fa-solid fa-x text-[red]"> </i>
          )}
        </div>
      </form>
    </div>
  );
};
