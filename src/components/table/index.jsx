import "./table.css"
const index = ({ caption, columns, data, isBook, onRowClick }) => {
  return (
    <table className="table table-hover caption-top mb-0 ">
      <caption className="text-center fs-3 fw-bold">{caption}</caption>
      <thead>
        <tr>
          {columns?.map((col) => (
            <th className="width-33" key={col.field} scope="col">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((e) => {
          return (
            <tr key={e?.id}  role={isBook ? undefined : 'button'} onClick={isBook ? undefined : () => onRowClick && onRowClick(e)}>
              <th  className="width-33" >{e?.id}</th>
              <td  className="width-33">{e?.title}</td>
              {isBook ? <td  className="width-33" >{e?.author}</td> : <td  className="width-33">{e?.age}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default index;
