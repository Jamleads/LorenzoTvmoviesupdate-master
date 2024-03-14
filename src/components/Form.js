import React from "react";

const Form = ({
  createContactUsDoc,
  submitMessage,
  handleSendAnother,
  errorMessage,
  handleContactChange,
}) => {
  // const formRef = useRef(null);
  // const scriptUrl =
  //   "https://script.google.com/macros/s/AKfycbziYLO7VN1PtUIAGhRFhOOb45NoZedg4AkAqLss4XcAgFdGjfE9QdqSb52C1DCq4fzu/exec";

  // const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setSubmitted(true);

  //   fetch(scriptUrl, {
  //     method: "POST",
  //     body: new FormData(formRef.current),
  //   })
  //     .then((res) => {
  //       console.log("SUCCESSFULLY SUBMITTED");
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleSendAnother = () => {
  //   setSubmitted(false);
  // };

  return (
    <div className="w-full">
      {!submitMessage && (
        <form onSubmit={createContactUsDoc} name="google-sheet">
          <div className="flex gap-5">
            <input
              type="text"
              id="fname"
              onChange={handleContactChange}
              placeholder="First Name"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              id="lname"
              onChange={handleContactChange}
              placeholder="Last Name"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
          </div>
          <div className="flex gap-5 mt-8">
            <input
              type="email"
              id="email"
              onChange={handleContactChange}
              placeholder="Email address"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <input
              type="number"
              id="phone"
              onChange={handleContactChange}
              placeholder="Phone number"
              className="w-1/2 h-[60px] px-5 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
          </div>
          <textarea
            id="message"
            onChange={handleContactChange}
            placeholder="Enter your message here"
            className="w-full h-[150px] pt-5 px-5 mt-8 text-[0.85rem] bg-inherit border border-red-600 rounded-lg outline-none"
            required
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              createContactUsDoc();
            }}
            className="w-full py-5 mt-8 bg-red-600 rounded-lg hover:translate-y-[6px] transition-all duration-300"
          >
            Submit
          </button>
          {errorMessage && (
            <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
              <p>{errorMessage}</p>
            </div>
          )}
        </form>
      )}
      {submitMessage && (
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <h3 className="text-[1.5rem]">
              Thank you for reaching out. We’ll get back to you soon.
            </h3>
            <button
              onClick={handleSendAnother}
              className="w-full py-5 mt-8 bg-red-600 rounded-lg hover:translate-y-[6px] transition-all duration-300"
            >
              Send Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
