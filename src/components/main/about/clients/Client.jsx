import ClientItem from "./clientItem";

import client1 from "../../../../images/logo-1-color.png";
import client2 from "../../../../images/logo-2-color.png";
import client3 from "../../../../images/logo-3-color.png";
import client4 from "../../../../images/logo-4-color.png";
import client5 from "../../../../images/logo-5-color.png";
import client6 from "../../../../images/logo-6-color.png";
import "./client.css";

const Client = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
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
