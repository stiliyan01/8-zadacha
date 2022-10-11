let entityObjName = projection.manifest.projectionObjectName;
let projectionData = projection.data[entityObjName];

let table = document.querySelector(".table");
let output = "";

function renderTable(projection, projectionData) {
  output += `<thead>
    <tr>
        ${dataForHeader(projection)}
    </tr>
    </thead >
    <tbody>
        <tr>
        ${dataForBody(projectionData, projection)}
        </tr>
    </tbody>
    `;

  table.innerHTML += output;
}

function dataForHeader(projection) {
  let result = "";
  projection.schema[entityObjName].fields.forEach((el) => {
    result += `<th>${el.heading}</th>`;
  });
  return result;
}

function getEntitiesObjectNames(projection) {
  let arr = [];

  projection.schema[entityObjName].fields.forEach((el) => {
    let result = {};
    result["objectName"] = el.objectName;
    arr.push(result);
  });
  return arr;
}

function dataForBody(projectionData, projection) {
  let result = "";
  projectionData.forEach((dataEl) => {
    getEntitiesObjectNames(projection).forEach((objNameEl) => {
      //   dataEl.fields[objNameEl.objectName].forEach((elInFieldObjectName) => {
      //     console.log(elInFieldObjectName);
      //   });

      result += `<td>${dataEl.fields[objNameEl.objectName]}${
        objNameEl.objectName
      }</td>`;
    });
  });
  // if(RecordEssentials)
  return result;
}

renderTable(projection, projectionData);
