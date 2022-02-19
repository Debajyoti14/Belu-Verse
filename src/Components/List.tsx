import React from 'react'

interface iprops {
    people:{
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
  }

const List : React.FC<iprops> = ({people}) => {
    const renderList = () : JSX.Element[]=> {
        return(
            people.map((person) =>{
                return (
                    <li className="List">
                        <div className="List-Header">
                            <img src={person.url} alt={person.name} className="List-img" />
                            <h2>{person.name}</h2>
                        </div>
                        <p>{person.age} years old</p>
                        <p className="List-note">{person.note}</p>
                    </li>
                )
            })
        )
    }
  return (
    <ul>
        {renderList()}
    </ul>
  )
}

export default List