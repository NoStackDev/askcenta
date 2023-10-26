"use client";

import React from "react";

export default function useVerificationHook(verificationCodeLength: number) {
  const [verificationCode, setVerificationCode] = React.useState<string | null>(
    null
  );

  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [inputValue3, setInputValue3] = React.useState("");

  let inputStates: {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }[] = [];

  inputStates.push({ inputValue, setInputValue });
  inputStates.push({ inputValue: inputValue1, setInputValue: setInputValue1 });
  inputStates.push({ inputValue: inputValue2, setInputValue: setInputValue2 });
  inputStates.push({ inputValue: inputValue3, setInputValue: setInputValue3 });

  const verificationInputClassName = "verification_input";

  React.useEffect(() => {
    let finalCode = inputStates
      .map((input) => {
        return input.inputValue;
      })
      .join("");

    // provide the complete code only if it is complete
    if (finalCode.length === verificationCodeLength) {
      setVerificationCode(finalCode);
    } else setVerificationCode(null);
  }, [inputStates, verificationCodeLength]);

  // for (let i = 0; i < verificationCodeLength; i++) {
  //   const [inputValue, setInputValue] = React.useState("");
  //   inputStates.push({ inputValue, setInputValue });
  // }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let entry = e.target.value; // stores user's entry

    // limit user entry per input to 1 character
    if (entry.length <= 1) {
      // set and limit per input box to 1 character
      inputStates[index].setInputValue(e.target.value);

      if (entry.length === 1) {
        /* user entered a character
	       move focus to next empty input box unless it's the last one,
        */
        if (index < verificationCodeLength - 1) {
          let nextInput = document.querySelectorAll(
            `.${verificationInputClassName}`
          )[index + 1];

          if ((nextInput as HTMLInputElement).value === "")
            (nextInput as HTMLInputElement).focus();
        }
      } else if (entry.length === 0) {
        /* user deleted a code
	       move focus to the previous input box
        */
        let prevInput = document.querySelectorAll<HTMLInputElement>(
          `.${verificationInputClassName}`
        )[index - 1];

        // focus if prevInput is defined
        if (prevInput !== undefined) prevInput.focus();
      }
    } else return;
  };

  return {
    verificationCode,
    inputStates,
    verificationInputClassName,
    handleChange,
  };
}
