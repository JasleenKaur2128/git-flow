import React from 'react'

function SimpsonsCard({ data }) {
  return (
    <section className="simpson">
        {data.map((simpson) => (
          <article key={simpson.id} className="simpson__card">
            <img
              src={simpson.image}
              alt={simpson.name}
              className="simpson__image"
            />
            <h4>{simpson.name}</h4>
          </article>
        ))}
      </section>
  )
}

export default SimpsonsCard