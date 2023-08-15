import ClientItem from "./clientItem";
import { clients } from "../../../../data/data";

import "./client.css";

const Client = () => {
  return (
    <div className="clients">
      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        <ClientItem clients={clients} />
      </ul>
    </div>
  );
};

export default Client;
