export const UseCardValidator = (formData: any) => {
    let error: any = {};
    const regexCardNumber = /^\d{15}$/;
    const regexCardCVV = /^\d{3,4}$/;
    const regexCardExpiryDate = /^\d{4}$/;


    if (!formData.cardNumber) {
        error.cardNumber = "Card number must not be empty";
    } else if (!regexCardNumber.test(formData.cardNumber)){
        error.cardNumber = "must be 15 number characters";
    }

    if (!formData.cvv) {
        error.cvv = "CVV must not be empty";
    }
    if (!regexCardCVV.test(formData.cvv)) {
        error.cvv = "CVV must be 3 number characters";
    }
    if (!formData.expiryDate) {
        error.expiryDate = "expiry date must not be empty";
    }
    if (!regexCardExpiryDate.test(formData.expiryDate)) {
        error.expiryDate = "Invalid Date format";
    }

    return error;
}
