import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'

export const Project = () => {
  return (
    <div className='project'>
        <div className="flex1 flex">
            <div className="design web">
                <div className="design-text">
                    <h2>web design</h2>
                    <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                </div>
            </div>
        </div>
        <div className="flex2 flex">
            <div className="design app">
                <div className="design-text">
                    <h2>app design</h2>
                    <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                </div>
            </div>
            <div className="design graphic">
                <div className="design-text">
                    <h2>graphic design</h2>
                    <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                </div>
            </div>
        </div>
    </div>
  )
}
