import React from "react";
import { useDispatch } from "react-redux";

function Input() {
  const dispatch = useDispatch();
  return (
    <section>
      <form
        onSubmit={() => {
          dispatch({ type: "HANDLE_SUBMIT" });
        }}
      >
        제목:
        <input
          onChange={() => {
            dispatch({ type: "INPUT_ITTLE" });
          }}
        />
        내용:
        <input
          onChange={() => {
            dispatch({ type: "INPUT_CONTENTS" });
          }}
        />
        <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
