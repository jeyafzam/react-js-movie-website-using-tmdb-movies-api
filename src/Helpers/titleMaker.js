export function itemTitleMaker(title, type) {
    let itemType = "";
    if (type === "movie") {
      itemType = "";
    } else if (type === "series") {
      itemType = "";
    }
    if (title === "") {
      document.title ="FliXGo";
    } else {
      document.title = `FliXGo-${itemType} ${title}  `;
    }
  }
  
  export function pageTitleMaker(title) {
    document.title = ` ${title}  `;
  }
  