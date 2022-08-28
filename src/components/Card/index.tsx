import { useEffect, useState } from "react";
import { DataType, ServiceFiltred, Services } from "../../types/DataType";
import "./Card.css";

type Props = {
  data: DataType;
};

const Card = ({ data }: Props) => {
  const [specialServices, setSpecialServices] = useState<ServiceFiltred[]>([]);

  const services = data.servicos.map((item) => {
    const special = item.texts.find(
      (services) => services.key === "Serviço Especial"
    );
    const price = item.texts.find((services) => services.key === "Preço");
    const description = item.texts.find(
      (services) => services.key === "Descrição"
    );

    return {
      name: item.nome,
      price,
      description,
      special: !!special,
    };
  });

  useEffect(() => {
    setSpecialServices(
      services.filter((services) => services.special) as ServiceFiltred[]
    );
  }, []);

  return (
    <div className="card">
      <div className="card__name">{data.dados.nome}</div>
      <div className="card__special">
        <div className="card__title">- Serviços Especiais</div>
        {specialServices?.map((item, i) => (
          <ul key={i} className="card__ul">
            <li>{item.name}</li>
            <li>{item.price.value}</li>
          </ul>
        ))}
      </div>

      <div className="card__services">
        <div className="card__title">- Todos os Serviços</div>
        {services.map((item, i) => (
          <ul key={i} className="card__ul">
            <li style={{ fontSize: "18px" }}>{item.name}</li>
            <li style={{ color: "#999" }}>{item.description?.value}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Card;
