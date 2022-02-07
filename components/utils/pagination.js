import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'

function Pagination({ pageIndex, handlePaginationClick }) {

  /**
   * @param {Number} start start number of array
   * @param {Number} end end number of array
   * @returns {Array<Number>} return an array of number from start to end [start -1, start, start+1, ...., end]
   */
  function paginationRange(start, end) {
    return start == 0 
      ?
      Array(end - start).fill().map((_, idx) => start + idx) :
      Array(end - start).fill().map((_, idx) => start - 1 + idx)
  }

  return (
    <div className="mb-3 flex justify-center items-center">
      <ChevronLeftIcon 
        onClick={handlePaginationClick(pageIndex -1)} 
        className='h-8 cursor-pointer'
      />
      { [...paginationRange(pageIndex , pageIndex + 4)].map(rangeIndex => {
          return (
            <span 
              onClick={handlePaginationClick(rangeIndex)} 
              key={rangeIndex} 
              className={"m-2 p-2 border-2 border-white-500 hover:border-green-700 cursor-pointer " + (rangeIndex == pageIndex ? 'border-green-700' : '')}
            >
              { rangeIndex }
            </span>
          ) 
        })
      }
      <ChevronRightIcon 
        onClick={handlePaginationClick(pageIndex + 1)} 
        className='h-8 cursor-pointer'
      />
    </div>
  )
}

export default Pagination