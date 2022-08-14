export default function Editor(props) {
  return (
    <div className="editor-pane">
      <label>
        <textarea
          id="editor"
          placeholder="type here"
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  );
}
