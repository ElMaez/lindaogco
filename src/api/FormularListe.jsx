export const FormularListe = [
  {
    id: "name",
    label: "Navn",
    type: "text",
    placeholder: "Fx: Anna Jensen",
    validation: {
      required: "Navn er påkrævet",
      minLength: {
        value: 2,
        message: "Navnet skal være mindst 2 tegn",
      },
    },
  },
  {
    id: "phone",
    label: "Tlf",
    type: "tel",
    placeholder: "+45 12 34 56 78",
    validation: {
      required: "Telefonnummer er påkrævet",
      pattern: {
        value: /^[0-9+ ]{8,}$/,
        message: "Indtast et gyldigt telefonnummer",
      },
    },
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "navn@firma.dk",
    validation: {
      required: "Email er påkrævet",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Indtast en gyldig emailadresse",
      },
    },
  },
  {
    id: "branche",
    label: "Branche",
    type: "text",
    placeholder: "Detail",
    validation: {
      required: "Branche er påkrævet",
    },
  },
  {
    id: "employerAmount",
    label: "Antal medarbejdere",
    type: "number",
    placeholder: "0",
    validation: {
      required: "Antal medarbejdere er påkrævet",
      min: {
        value: 0,
        message: "Antal kan ikke være negativt",
      },
    },
  },
  {
    id: "textfield",
    label: "Kommentarfelt",
    type: "textarea",
    placeholder: "Hvad kan vi hjælpe dig med?",
    validation: {
      maxLength: {
        value: 500,
        message: "Maks. 500 tegn",
      },
    },
  },
];
