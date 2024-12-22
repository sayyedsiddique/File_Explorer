import { useState } from "react";

function Folder({ handlerInsertNode, explorer }) {
  console.log("explorer >>>> ", explorer);

  const [expand, setExpand] = useState(false);
  const [showInput, setshowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handlerNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);

    setshowInput({
      visible: !showInput.visible,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    console.log("input enter clicked ", e.keyCode);

    if (e.keyCode === 13 && e.target.value) {
      // add logic
      handlerInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setshowInput({ ...showInput, visible: false });
    }
  };

  return explorer.isFolder ? (
    <div style={{ marginTop: 5 }}>
      <div className="folder" onClick={() => setExpand(!expand)}>
        <span>📁{explorer.name}</span>

        <div>
          <button onClick={(e) => handlerNewFolder(e, true)}>Folder +</button>
          <button onClick={(e) => handlerNewFolder(e)}>File +</button>
        </div>
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput?.visible && (
          <div className="inputContainer">
            <span>{showInput?.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              name=""
              id=""
              className="explorer_input"
              autoFocus
              onBlur={() => setshowInput({ ...showInput, visible: false })}
              onKeyDown={(e) => onAddFolder(e)}
            />
          </div>
        )}

        {explorer.items.map((exp) => {
          return (
            <Folder
              handlerInsertNode={handlerInsertNode}
              explorer={exp}
              key={exp.id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <span className="file">📄{explorer.name}</span>
  );
}

export default Folder;
