import * as React from 'react';

import './styles.scss';

interface ITableComponent {
  title?: string;
  schema: {
    head: string[],
    body: any[]
  };
}

export default function Table(props: ITableComponent) {
  const { title }: { title?: string } = props;

  return (
    <div className="table__container">
      {title && <h4 className="table__title">{title}</h4>}
      <table className="table">
        {renderTableHead(props.schema.head)}
        {renderTableBody(props.schema.body)}
      </table>
    </div>
  );
}

const renderTableHead = (head: string[]) => (
  <thead className="table__head">
    <tr>
      {head.map((name: string, key: number) => (
        <th className="table__head__item" key={key}>{name}</th>
      ))}
    </tr>
  </thead>
);

const renderTableBody = (body: any[]) => (
  <tbody className="table__body">
    {body.map((items: any[], trkey: number) => (
      <tr className="table__body__row" key={trkey}>
        {items.map((item: any, tdkey: number) => (
          <td className="table__body__item" key={tdkey}>{renderItem(item)}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

const renderItem = (item: any) => {
  if(item.type === 'color') {
    return (
      <div>
        <span className="table__body__item__color" style={{ background: item.name }} />
        <span className="table__body__item__color-name">{item.name}</span>
      </div>
    );
  }

  return item.name;
};
