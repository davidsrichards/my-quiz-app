{
  /*   <div className="flex flex-col gap-4 text-[1.1rem] text-slate-200 group/item">
        <p>{questions?.question}</p>
        <ul key={questions?.id} className="flex flex-col gap-4">
          {questions?.options.map((q, i) => (
            <li key={i} className="flex items-center gap-4">
              {" "}
              <input
                type="radio"
                name={`options`}
                value={check}
                id={`option-${i}`}
                onChange={() => handleInputCheck(i)}
                className={`transition delay-100 h-[1.3rem] w-[1.3rem] input-group`}
              />
              <label htmlFor={`option-${i}`}>{q}</label>
              <div
                className={`check${results[trace] == i ? "checked" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
      </div> */
}

const lastNameError = savedError?.map((err) => {
  err.find((err) => err === "Please provide lastname");
});
// email error
const emailError = savedError?.map((err) => {
  err.find((err) => err === "Please provide email");
});
// password error
const passwordError = savedError?.map((err) => {
  err.find((err) => err === "Please provide password");
});
/// phone number

const phoneNumberError = savedError?.map((err) => {
  err.find((err) => err === "Please provide phone number");
});
/////

firstNameError
  ? setAdminErrors({
      firstnameError: "Please provide firstname",
    })
  : setAdminErrors({ firstnameError: "" });

////
lastNameError
  ? setAdminErrors((err) => ({
      ...err,
      lastnameError: "Please provide lastname",
    }))
  : setAdminErrors((err) => ({ ...err, lastnameError: "" }));

////
emailError
  ? setAdminErrors((err) => ({
      ...err,
      emailError: "Please provide email",
    }))
  : setAdminErrors((err) => ({ ...err, emailError: "" }));

////
passwordError
  ? setAdminErrors((err) => ({
      ...err,
      passwordError: "Please provide password",
    }))
  : setAdminErrors((err) => ({ ...err, passwordError: "" }));

////
phoneNumberError
  ? setAdminErrors((err) => ({
      ...err,
      phoneNumberError: "Please provide phone number",
    }))
  : setAdminErrors((err) => ({ ...err, phoneNumberError: "" }));
console.log(firstNameError ? "yes" : "no");
console.log(savedError);

{
  /*  <table
          role="list"
          className=" divide-y-2 font-semibold text-[1.3rem] border-4 overflow-hidden container mx-auto p-4"
        >
          <thead className="w-full">
            <tr className="w-full">
              <td className="relative left-10">Name</td>
              <td className="relative left-10">Total Atempts</td>
              <td className="relative left-10">Points</td>
              <td className="relative left-10">Remark</td>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2 divide-x-2">
              <td className="relative left-8 p-8">{username || "Dauda"}</td>
              <td className="relative left-8 p-8">{totalAttempt}</td>
              <td className="relative left-8 p-8">{onpoint}</td>
              <td
                className={`relative left-8 p-8 text-${
                  onpoint <= 20 ? "red-500" : "green-500"
                }`}
              >{`${onpoint < 20 ? "Failed" : "Pass"}`}</td>
            </tr>
          </tbody>
        </table> */
}
