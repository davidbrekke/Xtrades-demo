import downArrow from '../assets/downArrow.svg'
import '../styles/sort.css'
const Sort = ({ label }) => {
  return (
    <div className="sort">
      <div className="sort-selected">
        Sort by:
        <div className="sort-by">{label}</div>
      </div>
      <img src={downArrow} alt="down arrow" />
    </div>
  )
}

export default Sort
