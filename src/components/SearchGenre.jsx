import clsx from 'clsx'
const searchGenre = ({setGenre}) => {
    const handleGetGenre = (value) => {
        setGenre(value);
    }
    return (<>
        <div className={clsx('form-card-group')}>
            <label>Genre</label>
            <input type="text"  onChange={(e)=> {handleGetGenre(e.target.value)}} />
        </div>
    </>)
}


export default searchGenre;