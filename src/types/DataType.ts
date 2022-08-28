export type DataType = {
  dados: {
    nome: string;
    idade: string;
    endereco: {
      rua: string;
      n: number;
      cidade: string;
      estado: string;
    };
  };
  servicos: Services[];
  categoria: string;
};

export type Services = {
  nome: string;
  texts: {
    key: string;
    prioridade: number;
    value: string;
  }[];
};

export type ServiceFiltred = {
  name: string;
  price: {
    key: string;
    prioridade: number;
    value: string;
  };
  description: {
    key: string;
    prioridade: number;
    value: string;
  };
  special: boolean;
};
