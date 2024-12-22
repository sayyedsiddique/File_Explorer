import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./component/Folder";
import useTraverseThree from "./hooks/use-traverse-three";

export default function App() {
  const [explorerData, setExplorereData] = useState(explorer);
  console.log("explorerData ", explorerData);

  const { insertNode } = useTraverseThree();

  const handlerInsertNode = (folderId, item, isFolder) => {
    const finalThree = insertNode(explorerData, folderId, item, isFolder);

    setExplorereData(finalThree);
  };
  return (
    <div className="App">
      <Folder handlerInsertNode={handlerInsertNode} explorer={explorer} />
    </div>
  );
}
