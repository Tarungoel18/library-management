import "./table.css";
const index = ({
  caption,
  columns,
  data,
  isBook,
  onRowClick,
  show,
  setShow,
}) => {
  return (
    <>
        
        <div className="d-flex position-relative w-100  gap-10 justify-content-center align-items-center mt-3">
            <div>
         <p className="mb-0 fs-3 fw-bold">{caption}</p>
         </div>
         <div className="position-absolute top-0 end-0">
           <button className="btn btn-primary" onClick={() => setShow(prev => !prev)} >{show ? "Hide" : "Show"}</button>

         </div>
         </div>

         {show ?  <table className="table table-hover caption-top mb-0 ">
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
                <tr
                  key={e?.id}
                  role={isBook ? undefined : "button"}
                  onClick={
                    isBook ? undefined : () => onRowClick && onRowClick(e)
                  }
                >
                  <th className="width-33">{e?.id}</th>
                  <td className="width-33">{e?.title}</td>
                  {isBook ? (
                    <td className="width-33">{e?.author}</td>
                  ) : (
                    <td className="width-33">{e?.age}</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table> : <></>}
       
        
        </>
    
      
    
  );
};

export default index;
