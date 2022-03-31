import { useState } from "react";

export default function SendMessage() {
  const [tel, setTel] = useState();
  const [sentMessage, setSentMessage] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userNumber: tel }),
    })
      .then((res) => res.json())
      .then((res) => setSentMessage(res.messageToUser))
      .catch((err) => console.error(err));
  };

  return (
    <section className="flex flex-col items-center py-4">
      <form className="w-96">
        <label className="flex flex-col text-sm font-medium text-slate-700">
          Phone Number
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="p-2 rounded-lg mb-4"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <button
          className="w-full bg-red-600 text-white py-2 rounded-lg"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {!sentMessage ? (
        ""
      ) : (
        <div className="w-96">
          <hr />
          <div className="mt-4 font-bold mb-2">
            Here's the message that was sent to: {tel}
          </div>
          <p className="bg-white p-3 rounded-lg text-sm text-center text-slate-700">
            {sentMessage}
          </p>
        </div>
      )}
    </section>
  );
}
