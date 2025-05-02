import React from 'react'

const Boxes = () => {
    const data = [
        {
            id: 1,
            title: "Total links",
            num: 10
        },
        {
            id: 2,
            title: "Links created today",
            num: 2
        },
    ]
  return (
    <section>
        <div className='general'>
            <h2>General stats</h2>
            <div className="general-stats">
                {data.map((item) => (
                    <div key={item.id} className='box'>
                        <h4>{item.title}</h4>
                        <p>{item.num}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Boxes