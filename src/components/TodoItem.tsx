"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodoAsync: (id: string, complete: boolean) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodoAsync,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 item-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => {
          toggleTodoAsync(id, e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
