import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show the error modal

      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: dueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4">
          Ooops ... looks like you forget to enter a value.
        </p>

        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>

          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md  bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input
            type="text"
            ref={descriptionRef}
            label="Description"
            textarea
          />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
