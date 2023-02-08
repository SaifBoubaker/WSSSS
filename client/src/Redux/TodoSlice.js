import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTodos = createAsyncThunk("todo/getAll", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createTodo = createAsyncThunk("todo/create", async (task) => {
  try {
    const { data } = await axios.post("http://localhost:5000/todos", { task });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateTodo = createAsyncThunk(
  "todo/update",
  async ({ task, id }) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/todos/${id}`, {
        task,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  reducers: {
    EditTodo: (state, action) => {
      state.todoList.map((el) =>
        el._id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
  },
  extraReducers: {
    [getAllTodos.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllTodos.fulfilled]: (state, action) => {
      state.todoList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [getAllTodos.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
    ////////////////////////////////////////////////////////////////////
    [createTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.createdTodo = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [createTodo.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
    ///////////////////////////////////////////////////////////////////////////////
    [updateTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.UpdatedTodo = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [updateTodo.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
  },
});

export default todoSlice.reducer;
export const { EditTodo } = todoSlice.actions;
