import "./table.css";
import { Link } from "react-router-dom";
import {ROUTES} from "../../constants/routes.js"
const Index = ({ columns, data, isBook}) => {
  return (
    <>
      <table className="table table-hover caption-top mb-0 ">
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
              >
                <th className="width-33">{e?.id}</th>
                <td className="width-33">{e?.title}</td>
                {isBook ? (
                  <td className="width-33">{e?.author}</td>
                ) : (
                  <td className="width-33">{e?.age}</td>
                )}
                {!isBook && (
                 <td><Link className="text-text-decoration-none" to={`${ROUTES.STUDENT}/${e?.id}`}><button className="btn btn-primary px-2 py-1">View</button></Link></td>
                  
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Index;
