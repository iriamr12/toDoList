import React from 'react'

const Title = () => {
  return (
    <div>
    <h1 className="text-xl content-center col-start-1 col-end-3">
            <span className="text-CE0E1DD">router.</span>
            <span className="text-C0D1B2A font-bold text-2xl">get</span>
            <span className="text-CE0E1DD">(</span>
            <span className="text-C0D1B2A font-bold text-2xl">"/todos"</span>
            <span className="text-CE0E1DD">, async (req, res) =&gt; </span>
            <span className="text-C0D1B2A font-bold text-2xl">{'{done}'}</span>
            <span className="text-CE0E1DD">)</span>
        </h1>
</div>
  )
}

export default Title