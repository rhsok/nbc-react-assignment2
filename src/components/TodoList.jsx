import React from "react";
// import { useDispatch } from "react-redux";

function TodoList({ isActive }) {
  //   const dispatch = useDispatch();
  return (
    <div>
      <h4>{isActive === true ? "TODOLIST" : "Done"}</h4>
      {/* {Todos.filter((item) => item.isDone === !isActive).map((item) => {
        return (
          <>
            <h4>title : {item.title}</h4>
            <h4>contents : {item.contents}</h4>
            <button
              onClick={() => {
                dispatch({ type: TODO_HANDLER });
              }}
            >
              {isActive ? "완료" : "취소"}
            </button>
            <button>삭제</button>
          </>
        );
      })} */}
    </div>
  );
}

export default TodoList;
