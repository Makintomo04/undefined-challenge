import { FC } from 'react'
import Card from './Card';

interface CardContainerProps {
  filteredData:object[];
}

const CardContainer: FC<CardContainerProps> = ({filteredData}) => {
  return (
    <>
    {filteredData.map((item) => (
      <Card key={item.id} item={item} />
    ))}
    </>
    )
}

export default CardContainer