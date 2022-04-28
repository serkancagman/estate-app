import React from "react";
import style from "./style/Agents.module.css";
import { agentItems } from "helpers/AgentItems";
import AgentItem from "./AgentItem";
const Agents = () => {
  return (
    <section className={style.agents}>
      <div className="container">
        <div className={style.agentsHeader}>
          <h2 className={style.agentsTitle}> Explore The Best Agents</h2>
          <p className={style.agentsText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem enim necessitatibus, dignissimos hic sunt adipisci,
            mollitia, quibusdam accusantium tenetur officiis aliquid. Deleniti
            reprehenderit facilis itaque?
          </p>
        </div>
        <div className="row g-3">
          {agentItems.map((item, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6">
                {" "}
                <AgentItem  item={item} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agents;
