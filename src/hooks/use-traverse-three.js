import React from "react";

const useTraverseThree = () => {
  function insertNode(three, folderId, item, isFolder) {
    if (three.id === folderId && three.isFolder) {
      three.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return three;
    }

    let latestNode = [];
    latestNode = three.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...three, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseThree;
