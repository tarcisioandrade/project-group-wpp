import { useEffect, useState } from "react";
import { DataType, Services } from "../../types/DataType";
import "./Card.css";

type Props = {
  data: DataType;
};

const Card = ({ data }: Props) => {
  const [specialServices, setSpecialServices] = useState<Services[]>([]);
  const [allServices, setAllServices] = useState<Services[]>([]);

  useEffect(() => {
    data.servicos.map((item) => {
      const auth = item.texts
        .map((it) => it.value === item.nome)
        .includes(true);
      if (auth) {
        setSpecialServices((prev) => [...prev, item]);
      } else {
        return;
      }
    });

    data.servicos.map((item) => {
      setAllServices((prev) => [...prev, item]);
    });
  }, []);

  return (
    <div className="card">
      <div className="card__name">{data.dados.nome}</div>
      <div className="card__special">
        <div className="card__title">- Serviços Especiais</div>

        {specialServices.map((item, i) => (
          <ul key={i} className="card__ul">
            <li>{item.nome}</li>
            <li>{item.texts[1].value}</li>
          </ul>
        ))}
      </div>

      <div className="card__services">
        <div className="card__title">- Todos os Serviços</div>
        {allServices.map((item, i) => (
          <ul key={i} className="card__ul">
            <li style={{ fontSize: "18px" }}>{item.nome}</li>
            <li style={{ color: "#999" }}>{item.texts[0].value}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Card;
