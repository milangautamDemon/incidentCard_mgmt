import Card from '../Component/Card';

const CardList = ({cards, deleteCards}) => {
    return(
        <>
        <div className="card-lists grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ">
            { cards.map((list, index) => {
                return <Card key={index}
                id={list.id}
                title={list.title}
                incidentNumber={list.incidentNumber}
                createdOn = {list.createdOn}
                priority={list.priority}
                status = {list.status} 
                itemDelete={deleteCards}
                />
            })}
        </div>
        </>
    )
}
export default CardList;