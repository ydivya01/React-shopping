import React from 'react'
import Data from './Data.json'

export const CardComp = ({value}) => {
  return (<>

    <div className='col'>
      <div className="card" style={{ width: "14rem" }}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAANlBMVEXMzMyUlJTPz8/Ly8uXl5eSkpLDw8PHx8e2trahoaGcnJzAwMDExMSZmZmkpKS9vb2zs7OsrKyX5kUVAAADVElEQVR4nO3Y3XqbMAyAYeQfDAZjuP+bnWRDmqbdYbqn7HsPmOORPrEiyyLDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnqyrb//61aQ+Hpfxm1tdGpfz7mFIy5KGb8Y3sJQytUEtZrMl+yPEcPiv92aRfsfgJh3npc+PNj+5H/vM77aJtNW4XSTGmHXFTuf0xfG6yFR06SKHjcdo95SWHSnbWOpPf/R3WSWcMTnkSH3v+KjDTcr6cm/V8PlNgt1zSFmmILuzlNH5Mch2k0TRSFwxmdsCzSRhccuXL14zKSedj1pqfJbD+Vlm19Jqtj8kN4nJWrYrJkV6XbHl6Q7yukk+Fnlm0uwHTQiNVdLUaDem9s7DkiW+5tXvpF/9dMUkhisvNslu8KXHpO56Ge0yJNtZPSaaRYu9u1jOiGVYDTcpKC4Uf8bEx5JcSwwtGboldHfYxhhDnFzKcb/e0fdObTGxTdZzxg3L+Xd+OzfF3Z3nzhIlzHs7iWcrl3rNNq914shtj5i0zraxLBpju2pujFdM9jvERNc9DmdMqhZbEWs+PsfEgiLzWSrWuUiYhjMmQ4/J0mNS7hGTGrfhism6jFMR3SgvMXEpyGO1Wkxa2LSShL6Dzpjof90jJm6L1V0xsdea//NrnmiPmh9B8XUvdvg88kTulidLCG54ikmLQ/ock1VDMh5yndOWIbF+3jvjnWJSW0sePjpQ15rX89zpDZnf7Dg6wnK9aWy19PncWe907tRsQijHR0zsgOn9Se6h8um6DO2oHlvfctv+xCejK7qegC03fGtPdRzk5SHQ70e98mS1SnL1scH62Nr6lpt4qrG19fO6Jcrq1vj6vfusj8qunzLteWewB532pLS1OvPjH/1tekz8tHqtp2J1I0XZ7cH35XvXtefVa721ed1ffuntv/3KMJ5t7030mKRiR65+4UNbvMzn+Il2vZJzb1CsyObSw6MPklKy3KLEnqL1aVo6ox5BR59Ks/WuX35NtBy55u23gdbS2rhaC3z84Gd+t/On1FSn+njYT3WvX3961HunafEf48fmWnX+vZ/yH3F/ffH9vHPfzwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/j9/AKKPGaM/zZAQAAAAAElFTkSuQmCC" className="card-img-top" alt="" />
        <div className="card-body">
        
          <h4 className="card-title">{value.ProductName}</h4>
          <p className="card-text">{value.Price}</p>
          <a href="/" className="btn btn-outline-dark">{value.ButtonView}</a>
        </div>
      </div>
    </div>

  </>

  )
}
